package main

import (
	"net/http"

	"github.com/rs/cors"
	"goji.io"
	"goji.io/pat"
)

func NewRouter(s *Server) *goji.Mux {
	mux := goji.NewMux()

	if s.ForceHTTPS {
		mux.Use(ForceHTTPS)
	}

	// CORS
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowCredentials: true,
	})

	mux.Use(c.Handler)
	mux.UseC(s.NotFound)

	// Handlers
	mux.HandleFunc(pat.Get("/v1/authenticate"), s.HandleAuthenticate)
	mux.HandleFunc(pat.Get("/v1/callback"), s.HandleCallback)
	mux.HandleFunc(pat.Get("/v1/ws"), s.HandleWS)
	mux.HandleFunc(pat.Get("/v1/logout"), s.HandleLogout)
	mux.HandleFunc(
		pat.Get("/static/*"),
		http.FileServer(http.Dir(".")).ServeHTTP,
	)

	return mux
}

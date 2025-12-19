import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // ADICIONE ESSA LINHA ABAIXO (substitua pelo nome do seu repositório)
  base: "https://github.com/hugomodenez13/remix-of-remix-of-arquitetura-refinada-main.git", 
  
  server: {
    host: "::", // Ou host: true, conforme falamos antes
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
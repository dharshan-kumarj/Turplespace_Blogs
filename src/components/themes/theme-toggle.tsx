import { Moon, Sun } from "lucide-react"
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { useTheme } from "./theme-provider"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="icon"
          style={{
            backgroundColor: "transparent",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" style={{ color: "#aa14f0" }} />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" style={{ color: "#aa14f0" }} />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" style={{ backgroundColor: "white", border: "1px solid #ccc", borderRadius: "4px" }}>
        <DropdownMenuItem onClick={() => setTheme("light")} style={{ cursor: "pointer", padding: "8px 12px" }}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} style={{ cursor: "pointer", padding: "8px 12px" }}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} style={{ cursor: "pointer", padding: "8px 12px" }}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
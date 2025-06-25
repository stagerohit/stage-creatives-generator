import { Button } from "./components/ui/button"

function App() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-foreground">
          Content Asset Generator
        </h1>
        <p className="text-muted-foreground text-lg">
          AI-powered platform for generating marketing assets
        </p>
        <div className="space-x-4">
          <Button variant="default">
            Get Started
          </Button>
          <Button variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
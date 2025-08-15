import * as React from "react"
import { OpenInV0Button } from "@/components/open-in-v0-button"
import { HelloWorld } from "@/registry/new-york/blocks/hello-world/hello-world"
import { DemoCard } from "@/components/demo-card"
// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Persian Fonts</h1>
        <p className="text-muted-foreground">
          All persian open source fonts available from shadcn ui cli.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <DemoCard title="Hello World" description="an simple hello world" component={<HelloWorld />}/>
      </main>
    </div>
  )
}

import React from "react";
import { OpenInV0Button } from "./open-in-v0-button";

interface DemoCardProps {
    component: React.JSX.Element | React.ReactNode,
    title: string,
    description: string,
}

export function DemoCard({component, title, description}: DemoCardProps) {
    return <>
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 sm:pl-3">
              <h2 className="text-lg  font-bold">{title}</h2>
              <p className="text-sm text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            {component}
          </div>
        </div>
    </>
}
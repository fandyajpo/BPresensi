import Navigation from "./Navigation";

export default function Layout({ children }) {
  
    return (
      <div className="w-full min-h-screen">
        
          {children}
          <div>
              <Navigation/>
          </div>
      </div>
    )
  }
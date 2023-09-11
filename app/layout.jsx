import '@styles/globals.css';

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
    title:'Promptopia',
    description:'Discover and share AI Promts'
}

const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
        <head>
            <link rel="icon" href='../static/logo.png' sizes="any" />
        </head>
        <body suppressHydrationWarning={true}>
            <Provider>
                <div className="main">
                    <div className="gradient"/>
                </div>
                <main className="app">
                <Nav />
                {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default Rootlayout
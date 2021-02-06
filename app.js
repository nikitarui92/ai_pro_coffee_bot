
import App from './app/App.js'

const app = new App()

app
.startup()
.then(()=>{
    console.log(`App listining on port: ${app.config.appPort}`)
})

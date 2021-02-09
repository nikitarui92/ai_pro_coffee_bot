
import App from './app/app.js'

const app = new App()

app
.startup()
.then(()=>{
    console.log(`App listining on port: ${app.config.appPort}`)
})


import http from 'http'

console.log(http);

const app=http.createServer();
const PORT=5000
app.listen(PORT,()=>{
    console.log(`Server runnimg on http://localhost:${PORT}`);
    
})

import path from 'path'
import { createConnection} from 'typeorm'


export async function connectDB() {
    try{
        await createConnection({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: 'root',
            password: '',
            database: 'oxtraining',
            entities: [
                path.join(__dirname , "../entity/**/**.ts")
            ],
            synchronize: true
        })
        console.log("DB Connected")
    } catch(error) {
        console.log(error)
        process.exit(1)
    }
}
import { Epoch } from '@banur/epoch'
import * as dotenv from 'dotenv'

dotenv.config()


// Instantiates a new 
const server = new Epoch(process.env.url ?? "")

server.start(5000)

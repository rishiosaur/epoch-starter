import { Epoch } from '@banur/epoch'
import { ConnectionOptions } from 'typeorm'

// Instantiates a new 
const server = new Epoch({
	type: process.env.type,
	url: process.env.url,
} as ConnectionOptions)

server.start(5000)
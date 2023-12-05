import { user } from "./db_dumb.js"

export const getUser=()=>{

    //handle request to real database here e.g. MongoDB, PostgreSQL etc.
    //in this example we only return the dumb user
    return user

}
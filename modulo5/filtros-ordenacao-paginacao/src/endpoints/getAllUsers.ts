import  connection  from "../database/connection"
import { Request, Response } from "express"

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    let statusCode = 400
    try {

        let name = req.query.name as string
        let type = req.params.type as string
        let sort = req.query.sort as string
        let order = req.query.order as string
        let page = Number(req.query.page)

        if(!name){
            name = "%"
        }

        if(!type){
            type = "%"
        }

        if(!sort){
            sort = "email"
        }

        if(!order){
            order = "ASC"
        }

        if (order && order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC") {
            order = "ASC"
         }

        if(!sort && !order){
            sort = "name" 
            order = "DESC"
        }

        if (sort !== "name" && sort !== "type") {
            sort = "email"
         }

         if (isNaN(page) || page < 1) {
            page = 1
         }

       let offset = 5 * (page - 1)

       const result = await connection("aula48_exercicio").select("*")
       .where("name", "like", `%${name}%`, )
       .and.where("type", "like", `%${type}%`)
       .orderBy(sort, order)
       .limit(5)
       .offset(offset)
 
       if(!result.length){
          statusCode = 404
          throw new Error("No users found")
       }

       res.status(200).send(result)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

 export const getAllUsersbyType = async(req: Request,res: Response): Promise<void> =>{
    let statusCode = 400
    try {

        let type = req.params.type as string

       const result = await connection("aula48_exercicio").select("*").where("type", "like", `%${type}%`)
 
       if(!result.length){
          statusCode = 404
          throw new Error("No users found")
       }

       res.status(200).send(result)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }
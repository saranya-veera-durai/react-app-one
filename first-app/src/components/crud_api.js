
import React,{useState} from "react"
import axios from "axios"
    

export default function Crud() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

    function HandleName(e){
    setName(e.target.value)
    }
    function HandleAge(e){
    setAge(e.target.value)
    }
    function HandleGender(e){
    setGender(e.target.value)
    }
     
       function PostApi(e){
          e.preventDefault();
          console.log({name,age,gender})
          axios.post("https://62a06a9fa9866630f80e53d0.mockapi.io/todo",{
           name:name,
           age:age,
           gender:gender
          })
          .then((response)=>{
          console.log(response.data)
          })
       }
      function PutApi(e){
          e.preventDefault();
          console.log({name,age,gender})
          axios.put("https://62a06a9fa9866630f80e53d0.mockapi.io/todo/6",{
           name:name,
           age:age   
          
          })
          .then((response)=>{
          console.log(response.data)
          })
      }
      function DeleteApi(e){
          e.preventDefault();
          axios.delete("https://62a06a9fa9866630f80e53d0.mockapi.io/todo/18")
          .then((response)=>{
          console.log(response.data)
          })
      }

      const [person,setPerson]=useState([])
         function GetApi(e){
           e.preventDefault();
           axios.get("https://62a06a9fa9866630f80e53d0.mockapi.io/todo")
           .then((response)=>{
           console.log(response)
           setPerson(response.data)
           })
      }
          return(
              <>
               <form>
                 <label>name</label><input onChange={HandleName} value={name}  type="text"/><br/>
                 <label>age</label> <input onChange={HandleAge} value={age}  type="text"/><br/>
                 <label>gender</label> <input onChange={HandleGender} value={gender}  type="text"/><br/>
     
                 <button type='submit'onClick={PostApi}>Post</button>
                 <button type='submit'onClick={PutApi}>Put</button>
                 <button type='submit'onClick={DeleteApi}>Delete</button>

                 <button type='submit'onClick={GetApi}>Get</button>
                 {person.map((value)=>{
                     return(<>
                     <div key={value.id}>
                        <h1>Name: </h1>{value.name}
                        <h1>Age: </h1>{value.age}
                        <h1>Gender: </h1>{value.gender}
                     </div>
                            </>
                     )
                 })}
               </form>
             </>
          )
}
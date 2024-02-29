import { styled,FormControl,FormGroup, InputLabel ,Input,Typography,Button} from "@mui/material";
import react,{ useState } from "react";

import { addUser } from "../service/api";

import { useNavigate } from "react-router-dom";



const Container=styled(FormGroup)`
width:50%;
margin: 5% auto 0 auto;
&>div{
    margin-top: 20px;
}
`
const initialValues={
    name:'',
    username:'',
    email:'',
    phone:''
}


const AddUser=()=>{
    const[user,setUser]=useState(initialValues);
    const{name,username,email,phone}=user;
    let navigate=useNavigate();

    const onValueChange=(e)=>{
       setUser({...user,[e.target.name]:e.target.value})
       //console.log(user);
    }
    
    const addUserDetails=async()=>{
    await addUser(user); //cause adduser in api.js ia an async function
    navigate('/all');
}
    return(
        <Container>
        <Typography variant="h4">
            Add User
        </Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">
                    Name
                </InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name" value={name} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel
                htmlFor="my-input">
                    Username
                </InputLabel>
                <Input  onChange={(e)=>onValueChange(e)} name="username"
                    value={username} id="my-input"
                />
            </FormControl>
            <FormControl>
                <InputLabel  htmlFor="my-input">
                    Email
                </InputLabel>
                <Input  onChange={(e)=>onValueChange(e)} name="email"
                    value={email} id="my-input"
                />
            </FormControl>
            <FormControl>
                <InputLabel  htmlFor="my-input">
                    Phone
                </InputLabel>
                <Input  onChange={(e)=>onValueChange(e)} name="phone"
                    value={phone} id="my-input"
                />
            </FormControl>
            <FormControl>
                <Button onClick={()=>addUserDetails()} variant="contained" color="primary">
                    Add User
                </Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;
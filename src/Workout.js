import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
//
import { Container } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
//
import SearchAppBar from './Searchbar';
//
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export default function Name() {
  const [open, setOpen] = React.useState(false);

  const [todo, settodo] = React.useState([]);
  const [text, settext] = React.useState('');
  const [title, settitle] = React.useState('');
  const [id, setid] = React.useState(0);
  const [type, setType] = React.useState();


  const [exercise, setExercise] = React.useState('');
  
  const [arr, setArr]= React.useState([])
  

    const handleChange = (event) => {
      setExercise(event.target.value);
      
    };

  const handleClickOpen = () => {
    setOpen(true);
    setType('Add');
  };

  const handleClose = () => {
    setOpen(false);
    setid('');
    settitle('');
    settext('');
    setArr([])
  };
  const handleAdd = () => {
    if (id) {
      const copy = [...todo];
      const index = copy.findIndex((e) => e.id === id);
      console.log('idx==>', index);
      copy[index].title = title;
      copy[index].text = text;
      copy[index].Execrise=arr
      
     

      settodo([...copy]);
      setOpen(false);
    } else {
      setOpen(false);

      settodo([...todo, { id: todo.length + 1, title, text ,Execrise:arr}]);
      setArr([])
      setid(todo.length + 1);
    }
    setid('');
    settitle('');
    settext('');
  
  };
const onedit=(ele)=>{
  setOpen(true);
  settitle(ele.title);
  settext(ele.text);
  setid(ele.id);
  setArr(ele.Execrise)

  setType('Edit'); 
}
  const EditId = (id) => {
    for (let index = id + 1; index < todo.length; index += 1) {
      todo[index].id -= 1;
    }
  };

const handleAddExercise=()=>{

   let cop= [...arr]
   if(!arr.includes(exercise)){

     cop.push(exercise)
     setArr(cop)
  console.log(exercise,arr)
   }
   else{
    alert("Already incldes")
   }
}

  return (
    <Container style={{ marginTop: '10px' }}>
      <div className="d-flex justify-content-end">
        <SearchAppBar/>
        <Button variant="contained" onClick={handleClickOpen}>
        <AddIcon  />  Name
        </Button>{' '}
      </div>{' '}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Name&apos; data</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            value={title}
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />

          <TextField
            margin="dense"
            id="data"
            value={text}
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => {
              settext(e.target.value);
            }}
          />

<Box sx={{ minWidth: 120, minHeight:50 }}>
      <FormControl style={{width:'60%' ,margin:"5px 5px 0px 0px"}}>
        <InputLabel id="demo-simple-select-label">Exercise</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={exercise}
          label="Exercise"
          onChange={handleChange}
        >
          <MenuItem value="pushup">pushup</MenuItem>
          <MenuItem value="Upperbody">Upperbody</MenuItem>
          <MenuItem value="lowerbody">lowerbody</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" style={{margin:"5px 5px 0px 5px"}} onClick={()=>{handleAddExercise()}}>
      <AddIcon  />Exercise
      </Button>
      <table className=" table  table-bordered mt-3 mb-3 text-center pt-5">
        <tr>
          <th>Exercise</th>
          <th>Delete</th>
        </tr>

      {arr.map((ex)=>(

        <tr key={ex.length+1}>
            <td className="px-3">
        {ex}
            </td>
            <td>
            <button
                className="btn  btn-light bg-light "
                onClick={() => {
                  let copy=[...arr]
                  let index=copy.findIndex((ele)=>ele==ex)
                  copy.splice(index,1)
                  setArr(copy)                 
                }}
              >
                {' '}
                <i className="fas fa-trash">&nbsp;</i>{' '}
              </button>
            </td>
        </tr> 
       
      ))}
      </table>
    </Box>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>{type === 'Add' ? 'Add Name' : 'Update Name'}</Button>
        </DialogActions>
      </Dialog>
      {/* <Grid container spacing={{ xs: 2 }}  style={{marginTop:"10px"}}> */}
      {/* {todo.map((data) => (
          <>
            <Grid item xs={6} md={4}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Grid container spacing={{ xs: 2 }}>
                    <Grid item xs={6}>
                      <Typography variant="h5" component="div">
                        <b> Title: </b> {data.title}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Button
                        variant="outlined"
                        onClick={() => {
                          const index = todo.findIndex(
                            (ele) => ele.id === data.id
                          );
                          const arr = [...todo];
                          arr.splice(index, 1);
                          settodo(arr);
                        }}
                      >
                        Delete
                      </Button>
                    </Grid>
                    <Grid item xs={3}>
                      <Button
                        variant="outlined"
                        onClick={() => {
                          setOpen(true);
                          settitle(data.title);
                          settext(data.text);
                          setid(data.id);
                        }}
                      >
                        EDIT
                      </Button>
                    </Grid>
                  </Grid>
                  <Typography variant="body2">{data.text}</Typography>
                </CardContent>
              </Card>
            </Grid>
          </>
        ))} */}
      {/* </Grid> */}
      <div className="table-responsive">
      <table className=" table  table-bordered mt-3 mb-3 text-center pt-5">
        <tr>
          {/* <th className="px-3">ID</th> */}
          <th className="px-3">Name</th>
          <th className="px-3"> Description </th>

          <th className="px-3">Actions</th>

        </tr>
        {todo.map((ele) => (
          <tr className="table-primary" key={ele.id}>
            {/* <th className="px-3" scope="col">{ele.id}</th> */}
            <th className="px-3 pt-3 pb-3" scope="col"  >
              {ele.title}
            </th>

            <th scope="col">{ele.text}</th>

            <th className="px-3" scope="col">
              <button
                className="btn btn-light bg-light"
                onClick={() => {
                  onedit(ele)
                
                }}
              >
             
                <i className="fas fa-edit">&nbsp;</i>
              </button>
            &nbsp;
              <button
                className="btn  btn-light bg-light "
                onClick={() => {
                  const index = todo.findIndex((j) => j.id === ele.id);
                  const arr = [...todo];
                  arr.splice(index, 1);
                  settodo(arr);
                  EditId(index);
                 
                }}
              >
                {' '}
                <i className="fas fa-trash">&nbsp;</i>{' '}
              </button>
            </th>
          </tr>
        ))}
      </table>
      </div>
    </Container>
  );
}

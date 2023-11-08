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
import FilterListIcon from '@mui/icons-material/FilterList';
//
import SearchAppBar from './Searchbar';
//
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';




export default function User() {
  const [open1, setOpen1] = React.useState(false);

  const [todo, settodo] = React.useState([]);
  const [text, settext] = React.useState('');
  const [title, settitle] = React.useState('');
  const [id, setid] = React.useState(0);
  const [type, setType] = React.useState();
  const [height, setHeight] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [trainer, setTrainer] = React.useState('');
  const [severity, setSeverity] = React.useState('');


  const [open, setOpen] = React.useState(false);


  const handleChange = (event) => {
    setTrainer(event.target.value);
  };

  const handleChange2 = (event) => {
    setSeverity(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleClickOpen1 = () => {
    setOpen1(true);
    setType('Add');
  };

  const handleClose1 = () => {
    setOpen1(false);
    setid('');
    settitle('');
    settext('');
    setWeight('');
    setHeight('');
  };
  const handleAdd = () => {
    if (id) {
      const copy = [...todo];
      const index = copy.findIndex((e) => e.id === id);
      console.log('idx==>', index);
      copy[index].title = title;
      copy[index].text = text;
      copy[index].height = height;
      copy[index].weight = weight;

      settodo([...copy]);
      setOpen1(false);
    } else {
      setOpen1(false);

      settodo([...todo, { id: todo.length + 1, title, text, height, weight }]);
      setid(todo.length + 1);
    }
    setid('');
    settitle('');
    settext('');
    setHeight('');
    setWeight('');
  };
const onedit=(ele)=>{
  setOpen1(true);
  settitle(ele.title);
  settext(ele.text);
  setid(ele.id);
  setHeight(ele.height);
  setWeight(ele.weight);
  setType('Edit'); 
}
  const EditId = (id) => {
    for (let index = id + 1; index < todo.length; index += 1) {
      todo[index].id -= 1;
    }
  };

  return (
    <Container style={{ marginTop: '10px' }}>
      <div className="d-flex justify-content-end">

      <Button variant="outlined" onClick={handleClickOpen} style={{height:'5.5vh' ,marginTop:'14px'}}>
        <FilterListIcon/>
      </Button>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Filter"}</DialogTitle>
        <DialogContent>
        <Box sx={{ minWidth: 120 }} > 
        <FormControl  sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Trainer</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={trainer}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      {/* 2 */}
      <FormControl  sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Severity</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select-filled"
          value={severity}
          onChange={handleChange2}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>close</Button>
          <Button onClick={handleClose}>Filter</Button>
        </DialogActions>
      </Dialog>

        <SearchAppBar/>
        <Button variant="contained" onClick={handleClickOpen1}>
        <AddIcon /> User  
        </Button>{' '}
      </div>{' '}
      <Dialog open={open1} onClose={handleClose1}>
        <DialogTitle>User&apos; data</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            value={title}
            label="User&apos; Name"
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
            label="User&apos; Status"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => {
              settext(e.target.value);
            }}
          />

          <TextField
            margin="dense"
            id="data"
            value={height}
            label="Height"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setHeight(e.target.value);
            }}
          />

          <TextField
            margin="dense"
            id="data"
            value={weight}
            label="Weight"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setWeight(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose1}>Cancel</Button>
          <Button onClick={handleAdd}>{type === 'Add' ? 'Add User' : 'Update User'}</Button>
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
          <th className="px-3">User&apos;s name</th>
          <th className="px-3"> Status </th>
          <th className="px-3">Height</th>
          <th className="px-3">Weight</th>
          <th className="px-3">Actions</th>
        </tr>
        {todo.map((ele) => (
          <tr className="table-primary" key={ele.id}>
            {/* <th className="px-3" scope="col">{ele.id}</th> */}
            <th className="px-3 pt-3 pb-3" scope="col"  >
              {ele.title}
            </th>
            <th className="px-3" scope="col">{ele.text}</th>
            <th className="px-3" scope="col">{ele.height}</th>
            <th scope="col">{ele.weight}</th>

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

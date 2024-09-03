import React, { useState, useEffect } from "react";
import "./read.css";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { FormControl } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FetchUser } from "../Redux/Thunk/FetchThunk";
// import { CategoryUser } from "../Redux/Thunk/CategoryThunk";
import { PaultryUser } from "../Redux/Thunk/PoultryThunk";
import { BreedUser } from "../Redux/Thunk/BreedThunk";
import { CreatePostUser } from "../Redux/Thunk/CreatePostThunk";
import { DeleteUser } from "../Redux/Thunk/DeleteThunk";
import { FetchGetUser } from "../Redux/Thunk/FetchGetThunk";
import { UpdateUser } from "../Redux/Thunk/UpdateThunk";
import { toast } from "react-toastify";
import { resetState } from "../Redux/Slice/CreatePostSlice";
// import { resetDeleteError } from "../Redux/Slice/DeleteSlice";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const Read = () => {

  const loginData = useSelector((state)=>state.user);
  const login=loginData?.data?.data
  const auth_token=login?.jwt
  console.log(auth_token)
  
  // console.log(auth_token)
  

  useEffect(() => {
    const savedToken = localStorage.getItem("auth_token")
    console.log(savedToken)

      if(!savedToken){
        window.location.href = "/"
      }
  }, [auth_token])

  const handleLogout = () =>{
    localStorage.removeItem("auth_token")
    window.location.href = "/"
  }

  const [productName, setProductName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [poultryId, setPoultryId] = useState("");
  const [breedId, setBreedId] = useState("");
  const [id, setId] = useState(null);
  const [error, setError] = useState({});
  console.log("error",error)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [newproduct, setNewproduct] = useState(false);
  
  
const resetfeild = () =>{
  setId("");
  setProductName("");
  setCategoryId("");
  setQuantity("");
  setPrice("");
  setPoultryId("");
  setBreedId("");
  setError("")
}
 
   // Required................
   const handleChangeproductName = (e) =>{
    setProductName(e.target.value)
    if(e.target.value){
      setError((name) => ({...name,productName :""}))
    }
  };
  const handleChangeCategory=(e)=>{
    setCategoryId(e.target.value)
    if(e.target.value){
      setError((name)=>({...name,categoryId :""}))
    }
  };
  const handleChangequantity=(e)=>{
    setQuantity(e.target.value)
    if(e.target.value){
      setError((name)=>({...name,quantity :""}))
    }
  };
  const handleChangeprice=(e)=>{
    setPrice(e.target.value)
    if(e.target.value){
      setError((name)=>({...name,price :""}))
    }
  };
  // const handlePoultryy=(e)=>{
  //   setPoultryId(e.target.value)
  //   if(e.target.value){
  //     setError((name)=>({...name,poultryId :""}))
  //   }
  // };
    //  update  fetch .................................
  const handleClickOpen = async (val) => {
    // const values= val.id
    console.log("val", val);
    setId(val.id);
    setProductName(val.productName);
    setCategoryId(val.categoryId);
    console.log("val.categoryName", val.categoryName);
    setQuantity(val.quantity);
    setPrice(val.price);
    handlePoultry(val.poultryId);
    console.log("val.poultryId", val.poultryName);
    handlebreed(val.breedId);
    console.log("val.breedId", val.breedId);
    // setPoultryId(id)

    // dispatch(BreedUser({poultryId}))

    dispatch(FetchGetUser(val.id));
    setOpen(true);
  };
    //  update proccess..............................................
    const updateresponse=useSelector((state)=>state.Updated)
  console.log("updateresponse",updateresponse)
  const updatedata=updateresponse?.data?.data
  console.log("updatedata",updatedata)
  const handleUpdate = () => {
    // const newError = {};
    // if (!productName) newError.productName = "requierd";
    // if (!categoryId) newError.categoryId = "required";
    // if (!quantity) newError.quantity = "required";
    // if (!price) newError.price = "required";
    // if (!poultryId) newError.poultryId = "required";
    // if (!breedId) newError.breedId = "required";
    // setError(newError);
    dispatch(
      UpdateUser({
        id,
        productName,
        categoryId,
        quantity,
        price,
        poultryId,
        breedId,
      })
    ).then(() => {
      dispatch(FetchUser());
      // Close the dialog and reset the form
      setOpen(false);
      setId("");
      setProductName("");
      setCategoryId("");
      setQuantity("");
      setPrice("");
      setPoultryId("");
      setBreedId("");
    });
  
    console.log("update");
  };
  
  useEffect(() => {
    if (updatedata) {
      toast.success(updatedata, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }, [updatedata]);
  

        //  Delete proccess.............................................
   const deleteresponse=useSelector((state)=>state.deleted)
   console.log("deleteresponse",deleteresponse)
    const deleteddata=deleteresponse?.data?.data
     console.log("deletedata",deleteddata)

   const deleteresponseerr=useSelector((state)=>state.deleted)
   console.log("deleteresponseerr",deleteresponseerr)
   const errordatad=deleteresponseerr?.error1?.error?.reason
  //  const errordatad=deleteresponseerr?.error
  console.log(errordatad,"errordatad")



  const handleDeleteClickOpen = (id) => {
    setId(id);
    setDeleteOpen(true);
  };
  const handleDeleteClose = (id) => {
    dispatch(DeleteUser(id))
        .then((resultAction) => {
            if (DeleteUser.fulfilled.match(resultAction)) {
                setDeleteOpen(false);
                toast.success("User deleted successfully", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                dispatch(FetchUser()); // Refresh data after successful deletion
            } else {
                toast.error(resultAction.error?.message || "Failed to delete user", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        })
        .catch((error) => {
            toast.error(`Error: ${error.message}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        });
};

  

  // create proccess....................................................
  const handleClickNew = () => {
    setNewproduct(true);
  };
  const createresponse=useSelector((state)=>state.createPost) 
  const createdata=createresponse?.data?.data
  console.log("createdata",createdata)
  const erorresponse=useSelector((state)=>state.createPost) 
  console.log(erorresponse,"erorresponse")
  const errdatas=erorresponse?.error?.error?.reason
  console.log(errdatas,"errdatas")


  const handleCreate = () => {
    const newError = {};
    if (!productName) newError.productName = "requierd";
    if (!categoryId) newError.categoryId = "required";
    if (!quantity) newError.quantity = "required";
    if (!price) newError.price = "required";
    if (!poultryId) newError.poultryId = "required";
    if (!breedId) newError.breedId = "required";
    setError(newError);
    console.log("newError",newError)

    
    if (Object.keys(newError).length === 0) {
    dispatch(
      CreatePostUser({
        productName,
        categoryId,
        quantity,
        price,
        poultryId,
        breedId,
      })
    );
    console.log("CreatePostUser",productName,
      categoryId,
      quantity,
      price,
      poultryId,
      breedId,)
    // toast.success("Wow so easy!",{
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "colored",
    //   // transition: Bounce,
    // });
    // setNewproduct(false);
    // dispatch(FetchUser());
    // setId("");
    // setProductName("");
    // setCategoryId("");
    // setQuantity("");
    // setPrice("");
    // setPoultryId("");
    // setBreedId("");
  }
  };
  useEffect(() => {
    if (createdata) {
       setNewproduct(false);
       toast.success(` ${JSON.stringify(createdata)}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      // dispatch(resetState());
    dispatch(FetchUser());

    }
  }, [createdata]);
  useEffect(() => {
     if (errdatas) {
      setNewproduct(true);
      toast.error(errdatas, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    // setNewproduct(true);
    dispatch(resetState());
    // dispatch(FetchUser());
}, [errdatas]);

 const response = useSelector((state) => state.fetch);
  console.log("response", response);
  // const {loading,data:resData}=response
  // console.log("loading",loading)
  const { loading: fetchLoading } = useSelector((state) => state.fetch);
const { loading: deleteLoading } = useSelector((state) => state.deleted);

const reloading = fetchLoading || deleteLoading;

   
  // const reloading = useSelector((state) => state.fetch.loading);
  console.log("reloading",reloading)


  const resData = response?.data?.data;
  console.log("resData", resData);
  

  useEffect(() => {
    dispatch(FetchUser());
  }, []);

  const cateresponse = useSelector((state) => state.category);
  console.log("cateresponse", cateresponse);
  const cateData = cateresponse?.data?.data;
  console.log("cateData", cateData);

  const paultryresponse = useSelector((state) => state.paultry);
  const paultrydata = paultryresponse?.data?.data;
  console.log("paultrydata", paultrydata);

  const breedresponse = useSelector((state) => state.breed);
  const breeddata = breedresponse?.data?.data;
  console.log("breeddata", breeddata);

  useEffect(() => {
    // dispatch(CategoryUser());
    dispatch(PaultryUser());
    // dispatch(BreedUser());
  }, []);

  const handlePoultry = (id) => {
    console.log("clicked");
    setPoultryId(id);
    console.log("breed", id);
    dispatch(BreedUser({ id }));
    if (id) {  
      setError((prevError) => ({ ...prevError, poultryId: "" }));  
    }
  };
  // const handlecategory=(id)=>{
  //   setCategoryId(id)
  //   dispatch(CategoryUser({id}));
  // }
  const handlebreed = (id) => {
    setBreedId(id);
    console.log(id);
    // dispatch(PaultryUser({id}));
    if (id) {
      setError((prevError) => ({ ...prevError, breedId: "" }));
    }
  };

  return (
    <>
    {
      reloading?(<h2>loading....</h2>):(
   
    <div className="container readpage">
    
      <div className=" header d-flex  mt-5  justify-content-between mx-3">
        <h5 className="mx-5">PRODUCT</h5>
          <button className="btn btn-success" onClick={()=>{resetfeild();handleClickNew()}}>
          +New Product
        </button>
        <button className="btn btn-primary" onClick={handleLogout}>
          Logout
        </button>

      </div>

      <div className="table-responsive mt-5 mx-5 product_Details">
        <table className="table">
          <thead>
            <tr className="table-primary">
              <th>S.NO</th>
              <th>PRODUCT</th>
              <th>CATEGORY</th>
              <th>QUANTITY</th>
              <th>RATE</th>
              <th>POULTRY</th>
              <th>BREED</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {resData?.map((val, index) => (
              <tr key={val.id}>
                <td>{index + 1}</td>
                <td>{val?.productName}</td>
                <td>{val?.categoryName}</td>
                <td>{val?.quantity}</td>
                <td>{val?.price}</td>
                <td>{val?.poultryName}</td>
                <td>{val?.breedName}</td>
                <td className="editDeleteIcons">
                  <span
                    className="px-2 py-1"
                    onClick={() => handleClickOpen(val)}
                  >
                    <FaRegEdit size={20} color="#1db9aa" />
                  </span>
                  <span
                    className="px-2 py-1"
                    onClick={() => handleDeleteClickOpen(val.id)}
                  >
                    <RiDeleteBinLine size={22} color="#e63c3c" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Create Product Dialog .............................................................*/}
      <BootstrapDialog
        onClose={() => setNewproduct(false)}
        aria-labelledby="customized-dialog-title"
        open={newproduct}
        fullWidth
        
      
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          PRODUCT Create
          <IconButton
            aria-label="close"
            onClick={() => setNewproduct(false)}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <label htmlFor="Product ">productName *</label>
            <input
              type="text"
              id="productName"
              className="form-control"
              name="productName"
              // value={resData?.product}
              value={productName}
              onChange={handleChangeproductName}
            />
            {error.productName ? (
              <p style={{ color: "red" }}>{error.productName} </p>
            ) : (
              ""
            )}
          </Typography>
          <Typography gutterBottom>
            <label htmlFor="Category" className="mt-2">
              Category *
            </label>
            <select
              name="categoryId"
              className="form-control"
              id="categoryId"
              value={categoryId}
              onChange={handleChangeCategory}
            >
              <option value="">Select Category</option>
              {cateData?.map((item) => {
                console.log("cateData", cateData);
                return (
                  <option  key={item?.id}value={item?.categoryId}>
                    {item?.categoryName}
                  </option>
                );
              })}
              {/* {
                cateData?.map((item)=>(
                  <option key={item.id} value={item?.categoryId}>{item?.categoryName} </option>
                ))
              } */}
              {/* <option value="Animal">Animal</option>
              <option value="Birds">Birds</option>
              <option value="Animals">Animals</option> */}
            </select>
            {error.categoryId ? (
              <p style={{ color: "red" }}>{error.categoryId} </p>
            ) : (
              ""
            )}
          </Typography>
          <Typography gutterBottom>
            <label htmlFor="Quanatity" className="mt-2">
              Quanatity*
            </label>
            <input
              type="number"
              id="quantity"
              className="form-control"
              name="quantity"
              // value={resData?.quantity}
              value={quantity}
              onChange={handleChangequantity}
            />
            {error.quantity ? (
              <p style={{ color: "red" }}>{error.quantity} </p>
            ) : (
              ""
            )}
          </Typography>
          <Typography gutterBottom>
            <label htmlFor="Rate" className="mt-2">
              Rate*
            </label>
            <input
              type="number"
              id="price"
              className="form-control"
              name="price"
              // value={resData?.rate}
              value={price}
              // onChange={(e) => setPrice(e.target.value)}
              onChange={handleChangeprice}
            />
            {error.price ? <p style={{ color: "red" }}>{error.price} </p> : ""}
          </Typography>
          <Typography gutterBottom>
            <label htmlFor="Poultry" className="mt-2">
              Poultry*
            </label>
            <select
              name="poultryId"
              className="form-control"
              id="poultryId"
              value={poultryId}
              onChange={(e) => handlePoultry(e.target.value)}
              // onChange={handlePoultryy}
            >
              <option value="Select poultry">Select Poultry</option>
              {paultrydata?.map((items) => {
                return <option value={items?.id}>{items?.poultryName}</option>;
              })}
              {/* <option value="Lab">Qulia</option>
              <option value="Germanshepherd">Chicken</option> */}
            </select>
            {error.poultryId ? (
              <p style={{ color: "red" }}>{error.poultryId} </p>
            ) : (
              ""
            )}
          </Typography>
          <Typography gutterBottom>
            <label htmlFor="Breed" className="mt-2">
              Breed*
            </label>

            <select
              name="breedId"
              className="form-control"
              id="breedId"
              value={breedId}
              onChange={(e) => handlebreed(e.target.value)}
            >
              <option value="Select Breed">Select Breed</option>
              {breeddata?.map((vals) => {
                return <option value={vals?.breedId}>{vals?.breedName}</option>;
              })}
              {/* <option value="Lab">Lab</option>
              <option value="Germanshepherd">GermanShepherd</option> */}
            </select>
            {error.breedId ? (
              <p style={{ color: "red" }}>{error.breedId} </p>
            ) : (
              ""
            )}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleCreate}>
            Submit
          </Button>
        </DialogActions>
      </BootstrapDialog>

      {/* Delete Confirmation Dialog.............................................. */}
      <BootstrapDialog
        onClose={() => setDeleteOpen(false)}
        aria-labelledby="customized-dialog-title"
        open={deleteOpen}
        fullWidth
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Delete Production
          <IconButton
            aria-label="close"
            onClick={() => setDeleteOpen(false)}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>Are you sure want to delete ?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteOpen(false)}>Cancel</Button>
          <Button color="error" onClick={() => handleDeleteClose(id)}>
            OK
          </Button>
        </DialogActions>
      </BootstrapDialog>

      {/* Add/Edit Product Dialog Edit...................................*/}
      <BootstrapDialog
        onClose={() => setOpen(false)}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          PRODUCT
          <IconButton
            aria-label="close"
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <label htmlFor="Product ">Product *</label>
            <input
              type="text"
              id="productName"
              className="form-control"
              name="productName"
              // value={resData?.product}
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
           
          </Typography>
          <Typography gutterBottom>
            <label htmlFor="Category" className="mt-2">
              Category *
            </label>
            <select
              name="categoryId"
              className="form-control"
              id="categoryId"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
            >
              <option value="Select Category">Select Category</option>
              {cateData?.map((item) => {
                // return <option value={item?.id}>{item?.categoryName}</option>;
                return (
                  <option key={item.id} value={item?.categoryId}>
                    {item?.categoryName}
                  </option>
                );
              })}
              {/* <option value="Animal">Animal</option>
              <option value="Birds">Birds</option>
              <option value="Animals">Animals</option> */}
            </select>
            
          </Typography>
          <Typography gutterBottom>
            <label htmlFor="Quanatity" className="mt-2">
              Quanatity*
            </label>
            <input
              type="number"
              id="quantity"
              className="form-control"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
           
          </Typography>
          <Typography gutterBottom>
            <label htmlFor="Rate" className="mt-2">
              Rate*
            </label>
            <input
              type="number"
              id="price"
              className="form-control"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            {/* {error.price ? <p style={{ color: "red" }}>{error.price} </p> : ""} */}
          </Typography>
          <Typography gutterBottom>
            <label htmlFor="Poultry" className="mt-2">
              Poultry*
            </label>
            <select
              name="poultry"
              className="form-control"
              id="poultry"
              value={poultryId}
              onChange={(e) => handlePoultry(e.target.value)}
            >
              {/* <option value="Select poultry">Select Breed</option> */}
              {paultrydata?.map((items) => {
                return (
                  <option key={items.id} value={items?.poultryId}>
                    {items?.poultryName}
                  </option>
                );
              })}
              {/* <option value="Lab">Qulia</option>
              <option value="Germanshepherd">Chicken</option> */}
            </select>
           
          </Typography>
          <Typography gutterBottom>
            <label htmlFor="Breed" className="mt-2">
              Breed*
            </label>
            <select
              name="breed"
              className="form-control"
              id="breed"
              value={breedId}
              onChange={(e) => handlebreed(e.target.value)}
            >
              <option value="Select Breed">Select Breed</option>
              {breeddata?.map((vals) => {
                return (
                  <option key={vals.id} value={vals?.breedId}>
                    {vals?.breedName}
                  </option>
                );
              })}

              {/* <option value="Lab">Lab</option>
              <option value="Germanshepherd">German Shepherd</option> */}
            </select>
            
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button  variant="contained"  className="btn btn-primary" onClick={handleUpdate}>
            Update
          </Button>
        </DialogActions>
      </BootstrapDialog>
   
    </div>
      )
    }
   </>
    
  );
};

export default Read;

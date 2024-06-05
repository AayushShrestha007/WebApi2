import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createProductApi, getAllProductApi } from '../../../apis/Api'


const AdminDashboard = () => {

    //state for all fetched product

    const [products, setProducts] = useState([])

    //call api initally on page load
    useEffect(() => {
        getAllProductApi().then((res) => {
            setProducts(res.data.products)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    console.log(products)


    //state for input fields
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [productDescription, setProductDescription] = useState('')

    //state for image
    const [productImage, setProductImage] = useState('')
    const [previewImage, setPreviewImage] = useState('')

    //image upload handler
    const handleImage = (event) => {
        const file = event.target.files[0]
        setProductImage(file) // for backend
        setPreviewImage(URL.createObjectURL(file))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        //make a form data (text, files)
        const formData = new FormData()
        formData.append('productName', productName)
        formData.append('productPrice', productPrice)
        formData.append('productDescription', productDescription)
        formData.append('productCategory', productCategory)
        formData.append('productImage', productImage)

        //make an api call
        createProductApi(formData).then((res) => {

            if (res.status === 201) {
                toast.success(res.data.message)
            }


        }).catch((error) => {
            if (error.response) {
                if (error.response.status === 400) {
                    toast.warning(error.response.data.message)
                }
                else if (error.response.status === 500) {
                    toast.error(error.response.data.message)
                }
                else {
                    toast.error("something went wrong")
                }

            } else {
                toast.error("something went wrong")
            }

            //for error status code

        });
    }


    return (

        <>

            <div className='container mt-3'>
                <div className='d-flex justify-content-between'>
                    <h3>Admin Dashboard</h3>
                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add product
                    </button>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Create a product</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="">
                                        <label>
                                            Product Name
                                        </label>
                                        <input type="text" onChange={(e) => setProductName(e.target.value)} className='form-control mt-2' placeholder='Enter product name'>
                                        </input>

                                        <label>
                                            Product Price
                                        </label>
                                        <input type="number" onChange={(e) => setProductPrice(e.target.value)} className='form-control mt-2' placeholder='Enter product price'>
                                        </input>

                                        <label>
                                            Choose Category
                                        </label>
                                        <select className='form-control mt-2'
                                            onChange={(e) => setProductCategory(e.target.value)} >
                                            <option value="plants">Plants</option>
                                            <option value="pots">Pots</option>
                                            <option value="cars">Cars</option>
                                        </select>
                                        <label className='mt-2'>
                                            Enter description
                                        </label>
                                        <textarea onChange={(e) => setProductDescription(e.target.value)} className='form-control'></textarea>
                                        <label className='mt-2'>
                                            Upload image
                                        </label>
                                        <input onChange={handleImage} type='file' className='form-control'></input>

                                        {/* Preview image */}
                                        {
                                            previewImage && <img src={previewImage} alt="preview image" className='img-fluid' />
                                        }



                                    </form>

                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button onClick={handleSubmit} type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <table className='table mt-3' >
                    <thead className='table-dark'>
                        <tr>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((singleProduct) => (
                                <tr>
                                    <td>
                                        <img width={'10%'} src={`http://localhost:5500/products/${singleProduct.productImage}`} alt="" />
                                    </td>
                                    <td>{singleProduct.productName}</td>
                                    <td>{singleProduct.productPrice}</td>
                                    <td>{singleProduct.productCategory}</td>
                                    <td>{singleProduct.productDescription}</td>
                                    <td>
                                        <Link to={`/admin/update/${singleProduct._id}`} className='btn btn-primary'>Edit</Link>
                                        <button className='btn btn-danger ms-2'> Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>



        </>
    )
}

export default AdminDashboard

//edit product
//Admin dashboard (table)
//make a route (Admin edit product)
//fill all the related information only
//Edit garna milnu paryo (text, file)
//make a backend to update product

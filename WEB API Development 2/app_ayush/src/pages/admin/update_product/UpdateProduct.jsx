import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProductApi } from '../../../apis/Api';

const UpdateProduct = () => {
    // get id from url
    const { id } = useParams()

    // get product information (Backend)
    useEffect(() => {
        getSingleProductApi(id).then((res) => {
            console.log(res.data.product.productName)

            setProductName(res.data.product.productName)
            setProductPrice(res.data.product.productPrice)
            setProductCategory(res.data.product.productCategory)
            setProductDescription(res.data.product.productDescription)
            setOldImage(res.data.product.productImage)



        }).catch((error) => {
            console.log(error)
        })
    }

    );

    // fill all the info in each fields

    // make a use state
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [productDescription, setProductDescription] = useState('')

    // state for image
    const [productNewImage, setProductNewImage] = useState(null)
    const [previewNewImage, setPreviewNewImage] = useState(null)
    const [oldImage, setOldImage] = useState('')

    // image upload handler
    const handleImage = (event) => {
        const file = event.target.files[0]
        setProductNewImage(file) // for backend
        setPreviewNewImage(URL.createObjectURL(file))
    }





    return (
        <>
            <div className='container mt-3'>

                <h2>Update product for <span className='text-danger'>'Flower'</span></h2>

                <div className='d-flex gap-3'>
                    <form action="">
                        <label htmlFor="">Product Name</label>
                        <input value={productName} onChange={(e) => setProductName(e.target.value)} className='form-control' type="text" placeholder='Enter your product name' />

                        <label className='mt-2' htmlFor="">Product Price</label>
                        <input value={productPrice} onChange={(e) => setProductPrice(e.target.value)} className='form-control' type="number" placeholder='Enter your product name' />

                        <label className='mt-2'>Choose category</label>
                        <select value={productCategory} onChange={(e) => setProductCategory(e.target.value)} className='form-control'>
                            <option value="plants">Plants</option>
                            <option value="electronics">Electronics</option>
                            <option value="gadgets">Gadgets</option>
                            <option value="furniture">Furniture</option>
                        </select>

                        <label className='mt-2'>Enter description</label>
                        <textarea value={productDescription} onChange={(e) => setProductDescription(e.target.value)} className='form-control'></textarea>

                        <label className='mt-2'>Choose product Image</label>
                        <input onChange={handleImage} type="file" className='form-control' />

                        <button className='btn btn-danger w-100 mt-2'>Update Product</button>


                    </form>
                    <div className='image section'>
                        <h6>
                            Previewing old image
                        </h6>
                        <img height={'200px'} width='300px' className='image-fluid rounded-5 object-fit-cover' src="https://img.freepik.com/free-photo/natures-beauty-captured-colorful-flower-close-up-generative-ai_188544-8593.jpg"></img>\
                        {
                            previewNewImage && <>
                                <h6 className='mt-4'>New image preview</h6>
                                <img height={'200px'} width='300px' className='image-fluid rounded-5 object-fit-cover' src={previewNewImage} alt="" />
                            </>
                        }

                    </div>
                </div>

            </div>
        </>
    )
}

export default UpdateProduct
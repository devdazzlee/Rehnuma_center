import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BeatLoader } from 'react-spinners';
// import BasicModal from '../Modal/Modal';
import { Link  , useNavigate  } from 'react-router-dom';
import Modal1 from '../../Components/Modals/Modal1';
import Modal2 from '../../Components/Modals/Modal2';
import Modal3 from '../../Components/Modals/Modal3';
import Modal4 from '../../Components/Modals/Modal4';
import Teacher_View from '../../Components/Modals/Teacher_View';
import Teacher_Edit from '../../Components/Modals/Teaher_Edit';

const Teacher_List = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [productsBoolean, setProductsBoolean] = useState(false);
  const [Delete , setdelete] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const sendData = (e) => {
    let id = e
    axios
    .post(`http://localhost:8000/api/v1/updates/${id}`)
    .then((response) => console.log(response))
    .catch((err) => console.log(err));



    };
  const getAllProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/v1/Teacher`);
      console.log("response: ", response);
      console.log(products);
      setProducts(response.data.data);
      setProductsBoolean(true)
    } catch (error) {
      console.log("error in getting all products", error);
    }
  };

  const deleteData = async (id)=>{
    try {
      const response = await axios.delete(`http://localhost:8000/api/v1/customer3/${id}`)
      console.log("response: ", response.data);
      setdelete(!Delete)
    } catch (error) {
      console.log("error in getting all products", error);
    }
  }

  useEffect(() => {
    console.log('asdasd')
    getAllProducts()
    // return () => {
    //   console.log('Cleanup Function');
    //  }
}, [Delete , productsBoolean ])
  // Split the address string into words
  
  
  // const filteredProducts = products.filter((value) =>
  // value.patientName.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  
  
  
  const filteredProducts = products

//   // Select the initial 6 words and join them back into a string
//   const shortenedAddress = words.slice(0, 6).join(' ');

//   // Add "..." if there are more words in the address
//   const displayAddress = words.length > 6 ? `${shortenedAddress} ...` : shortenedAddress;

const formatProjectId = (projectId) => {
  // You can implement your own logic to format or truncate the ID
  return projectId.slice(0, 8); // Example: Display the first 8 characters
};


  return (
  <>
     <div className='flex ' >
     <h1 className="text-4xl text-center  mb-6 m-auto">Teachers Details </h1>


      <div>

      <input
            type="text"
            placeholder='Search Here'
            className="mr-4"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

</div>
     </div>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            
                
                <th   scope="col" class="px-6 py-3">
    
                Teacher  Name
    
                </th>
                
               
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                    Teacher Salary 
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                    Teacher  Phone
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                    Salary Inforamtion
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                  View
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3 ">
                    <div  class="flex items-center ">
                    Edit
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                    Delete  
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                    </div>
                </th>
               
            </tr>
        </thead>


        <tbody>
          {productsBoolean ? (
            filteredProducts.map((value) => (
              <tr class=" border-b    bgbg-gray-700 dark:bg-gray-800 dark:border-gray-700">


<th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">
  {value.name}
</th>
<th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">
  {value.salary}
</th>
                <th   onClick={() => navigate('/payment/Detail/view', { state: { id : value._id , name :value.projectName , category :value.projectCategory , requiredAmout : value.amountRequired , collectedAmout : value.paymentDetail , village : value.projectVillage , image: value.imageUrl } })}
 scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">
                    {value.number}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">
                    {value.Salaryinformation}
                </th>

                <td class="px-6 py-4">
                {value.amountRequired}
                </td>
                <td class=" mr-8 text-right">
                    <Teacher_View    name={value.name} salary={value.salary}  Number={value.number}  Salary_Information={value.Salaryinformation} id={value._id}    />
                </td>
                <td class=" mr-8 text-right">
                    <Teacher_Edit     name={value.name} salary={value.salary}  Number={value.number}  Salary_Information={value.Salaryinformation} id={value._id}    />
                </td>
                <td    className='lllololo' 
                
                onClick={()=>{
                    deleteData(value._id)
                }}  style={{"color" : "red" , "cursor" : "pointer" ,  position: "relative", right: "130px"}    } class="px-6 py-4  ">
                Delete
                </td>
                
            </tr>
            ))
          ) : (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '80px',
                margin: 'auto',
                position: 'relative',
                top: '300px',
                left: '450px',
              }}
            >
              <BeatLoader size={15} color={'#0D6DB7'} loading={true} />
            </div>
          )}
        </tbody>

        <tbody> 
   
        </tbody>
    </table>
        
        </>
  )
}

export default Teacher_List
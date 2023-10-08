/* eslint-disable react/prop-types */


const SingleDetails = ({detail}) => {
    return (
   <div >



<div className="mt-6 max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 my-10 space-y-10 lg:gap-12">
        <div>
              
            
           <div className="">
              
              <div  className="block transition duration-200 ease-out transform hover:scale-110 justify-center items-center flex">
                  <img className="object-cover md:w-[80%] shadow-sm h-full" src={detail.image}/>
              </div>

          
            
              <div className="mt-2">
                 
                  <div 
                      className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-[#130F40]  hover:underline">{detail.title}</div>   

                    
             </div>
          
             
       <div className="text-center">

         
           <div>
                  <p className="mt-2 p-8">If you created a web application and wanted it to grow a user base reall quickly,the easiest way is to avoid bothering them with alot forms. No one likes filling up forms! A web form should and must only be used when necessary,in case a user doesnt have account with any of the social networks.That is the moment you want to implement social login on your application.</p>
           </div>

           <button className="btn text-xl bg-[#FF630E] text-white">
           {  <p className="text-xl text-white">price:{detail.price}</p> } Booked Now</button>

              </div>
          </div>

 
           
   <div className="max-w-4xl py-16 xl:px-8 flex justify-center mx-auto">
                      
      <div className="w-full mt-16 md:mt-0 ">
         <form className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
             <h3 className="mb-6 text-2xl font-medium text-center">Write a comment</h3>
             <textarea type="text" name="comment" className="w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-[#FF630E] focus:outline-none" placeholder="Write your comment" rows="5" cols="33"></textarea>
             <input type="submit" value="Submit comment" name="submit" className=" text-white px-4 py-3 bg-[#FF630E]  rounded-lg"/>
         </form>
     </div>
  </div>

</div>
</div>



   </div>

    );
};

export default SingleDetails;
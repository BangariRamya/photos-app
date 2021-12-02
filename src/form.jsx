import { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const Form = () => {

    const [formOpen, setFormOpen] = useState(false);
    const [title,setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [thumbnailUrl, setThumbnailUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/albums/1/photos' , {
             
             method: 'POST',
             body : JSON.stringify({
                 title : title,
                 url: url,
                 thumbnailUrl : thumbnailUrl,
       
             }),
             headers : {
                 'Content-type' :'application/json; charset=UTF-8',
             },

        }).then(resp => resp.json()).then((data) => console.log(data));
        setFormOpen(false);

    }

    const buttonDisabled = title&&url&&thumbnailUrl;

    return(
        // <div>Hello</div>
        <>
        <button onClick={()=>setFormOpen(true)}>New Photo</button>

        {formOpen && <Modal isOpen size="lg">
            <ModalHeader>Add New Photo</ModalHeader>
            <ModalBody>
            <form onSubmit={handleSubmit}>
            
                <label> Title : </label> 

                <input type="text" onChange={(e)=>setTitle(e.target.value)}/> <br/> <br/>
                <label> Url : </label>  
                <input type="url"  onChange={(e)=>setUrl(e.target.value)}/>   <br/> <br/>
                <label> ThumbnailUrl : </label>  
                <input type="url" onChange={(e)=>setThumbnailUrl(e.target.value)}/>  <br/><br/>

                {/* {buttonDisabled && <input type="submit" />}   <br/> */}

                <input type="submit" disabled={!buttonDisabled}/>

           </form>
            </ModalBody>
     
        </Modal>}
        
        </>
    )
}

export default Form;
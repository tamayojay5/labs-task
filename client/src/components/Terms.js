import React, {useState} from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')

function Terms (){
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div className="Terms">
                <div className="form-group form-check mt-5">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        I accept the <a href="#" onClick={() => setModalIsOpen(true)}>Terms and Conditions</a>
                </div>
                
                            
            
            <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={() =>setModalIsOpen(false)}           
            style={{
                content: {              
                    left: '500px',
                    right: '500px',              
                }
            }}>
                
                <button className="close" type="button" onClick={() => setModalIsOpen(false)}><span aria-hidden="true">&times;</span></button>         

                <h2 className="mt-4" style={{fontSize: "30px"}}>Terms and Conditions</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia delectus commodi culpa laborum, illum corporis. Unde atque aspernatur veritatis odit voluptates ex, commodi, quis iusto illo sequi architecto nulla impedit?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam natus distinctio tenetur et voluptatem a ullam tempora, quaerat dolore ex dignissimos reprehenderit neque laudantium consectetur veniam quod, dolorem ab pariatur?</p>
                
            </Modal>

            

        </div>
    )
}

export default Terms




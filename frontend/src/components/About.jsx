import React from 'react'

const About = () => {
  return (
    <>
        <header className="masthead">
            <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-10 align-self-end mb-4" style={{background: "#0000002e"}}>
                    	 <h1 className="text-uppercase text-white font-weight-bold">About Us</h1>
                        <hr className="divider my-4" />
                    </div>
                    
                </div>
            </div>
        </header>

    <section className="page-section">
        <div className="container">
    {/* <?php echo html_entity_decode($_SESSION['system']['about_content']) ?>         */}
    
        </div>
        </section>
    </>
  )
}

export default About
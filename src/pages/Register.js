import React from 'react'
import { LC6 } from '../assets/Index'

const Register = () => {
  return (
    <div>
      <section class="h-100 bg-dark">
        <div class="container p-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col">
              <div class="card card-registration my-4">
                <div class="row g-0">
                  <div class="col-xl-6 p-5">
                    <img src={LC6}
                      alt="Sample photo" class="img-fluid"
                      style={{ borderRadius: ".25rem" }} />
                  </div>
                  <div class="col">
                    <div class="card-body p-md-5 text-black">
                      <h3 class="mb-5 text-uppercase">Registration</h3>


                      <div class="form-outline">
                        <input type="text" id="form3Example1n" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Example1n">Name</label>
                      </div>
                      <div class="form-outline mb-4">
                        <input type="text" id="form3Example8" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Example8">Address</label>
                      </div>

                      <div class="form-outline mb-4">
                        <input type="text" id="form3Example97" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Example97">Email</label>
                      </div>

                      <div class="form-outline mb-4">
                        <input type="text" id="form3Example9" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Example9">DOB</label>
                      </div>

                      <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">

                        <h6 class="mb-0 me-4">Gender: </h6>

                        <div class="form-check form-check-inline mb-0 me-4">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                            value="option1" />
                          <label class="form-check-label" for="femaleGender">Female</label>
                        </div>

                        <div class="form-check form-check-inline mb-0 me-4">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                            value="option2" />
                          <label class="form-check-label" for="maleGender">Male</label>
                        </div>
                      </div>

                      <div class="d-flex justify-content-between pt-3">
                        <button type="button" class="btn btn-outline-success">Reset all</button>
                        <button type="button" class="btn btn-outline-success">Submit form</button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Register
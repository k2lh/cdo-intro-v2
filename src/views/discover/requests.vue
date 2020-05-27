<template>
  <div id="projects" class="page-body">
    <pageheadDiscover></pageheadDiscover>
    <div id="leadspace">
      <h1 id="pagetitle-h1" class="h1 dw-navpage-develop">Make a Service Request</h1>
      <p></p>
    </div>

    <div class="container unbox formpage">
      <div class="row">
        <div class="team100">
          <p>In our goal to provide quality Analytics Services, we practice continuous improvement.
            As part of this, your assigned analyst will email you a survey link for your feedback. Please completed
            this within 5 business days of your service request's completion. This will allow us to provide you with
            any follow-up responses or future services.</p>
          <h5 class="h4">Account Information</h5>
        </div>
      </div>

      <div class="row">
        <div class="col span_5">
          <div class="bx--form-item">
            <label for="select-id-form" class="bx--label">Geography</label>
            <div class="bx--select">
              <select id="select-id-form" class="bx--select-input" v-model="geography">
                <option class="bx--select-option" disabled selected>Choose an option</option>
                <option class="bx--select-option" value="AP">AP IOT - Asia Pacific </option>
                <option class="bx--select-option" value="EU">EU IOT - Europe</option>
                <option class="bx--select-option" value="GCG">GCG IOT - Greater China Group</option>
                <option class="bx--select-option" value="JP">JP IOT - Japan</option>
                <option class="bx--select-option" value="LA">LA IOT - Latin America</option>
                <option class="bx--select-option" value="MEA">MEA IOT - Middle East &amp; Africa</option>
                <option class="bx--select-option" value="NA">NA IOT - North America</option>
                <option class="bx--select-option" value="ALL">ALL</option>
              </select>
              <div class="form-requirement">
                Please choose an option.
              </div>
              <svg class="bx--select__arrow" width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
                <path d="M10 0L5 5 0 0z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="col span_5">
          <div class="bx--form-item">
            <label for="select-id-form" class="bx--label">Country</label>
            <div class="bx--select">
              <select id="select-id-form" class="bx--select-input"  v-model="country">
                <option class="bx--select-option" disabled selected>Choose an option</option>
                <option class="bx--select-option" value="All">All</option>
                <option class="bx--select-option" value="Other">Other</option>
                <option class="bx--select-option" value="Australia">Australia</option>
                <option class="bx--select-option" value="Belgium">Belgium</option>
                <option class="bx--select-option" value="Brazil">Brazil</option>
                <option class="bx--select-option" value="Canada">Canada</option>
                <option class="bx--select-option" value="Denmark">Denmark</option>
                <option class="bx--select-option" value="Finland">Finland</option>
                <option class="bx--select-option" value="France">France</option>
                <option class="bx--select-option" value="Hong Kong">Hong Kong</option>
                <option class="bx--select-option" value="India">India</option>
                <option class="bx--select-option" value="Italy">Italy</option>
                <option class="bx--select-option" value="Netherlands">Netherlands</option>
                <option class="bx--select-option" value="Norway">Norway</option>
                <option class="bx--select-option" value="Spain">Spain</option>
                <option class="bx--select-option" value="United Arab Emirates">United Arab Emirates</option>
                <option class="bx--select-option" value="United Kingdom">United Kingdom</option>
                <option class="bx--select-option" value="United States">United States</option>
              </select>
              <div class="form-requirement">
                Please choose an option.
              </div>
              <svg class="bx--select__arrow" width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
                <path d="M10 0L5 5 0 0z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="col span_5">
          <div class="bx--form-item">
            <label for="text1" class="bx--label">Account name</label>
            <input id="text1" type="text" class="bx--text-input" v-model="accountName" placeholder="Enter the account name." />
            <div class="form-requirement">
              This field is required.
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col span_5">
          <div class="bx--form-item">
            <label for="select-id-form" class="bx--label">Sector</label>
            <div class="bx--select">
              <select id="select-id-form" class="bx--select-input" v-model="sector" v-on:change="pickOther(sector, 'sector')">
                <option class="bx--select-option" disabled selected>Choose an option</option>
                <option class="bx--select-option" value="All">All</option>
                <option class="bx--select-option" value="Other">Other</option>
                <option class="bx--select-option" value="Communications Sector">Communications Sector</option>
                <option class="bx--select-option" value="Computer Services">Computer Services</option>
                <option class="bx--select-option" value="Distribution Sector">Distribution Sector</option>
                <option class="bx--select-option" value="Financial Service Sector">Financial Service Sector</option>
                <option class="bx--select-option" value="Internal Account">Internal Account</option>
                <option class="bx--select-option" value="Industrial Sector">Industrial Sector</option>
                <option class="bx--select-option" value="Public Sector">Public Sector</option>
              </select>
              <div class="form-requirement">
                Please choose an option.
              </div>
              <svg class="bx--select__arrow" width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd"><path d="M10 0L5 5 0 0z"></path></svg>
            </div>
          </div>

          <div class="bx--form-item" v-show="sectorAdd">
            <label for="text1" class="bx--label">Sector, other</label>
            <input id="text1" type="text" class="bx--text-input" v-model="sectorAddOther" placeholder="Enter a sector." />
            <div class="form-requirement">
              This field is required.
            </div>
          </div>
        </div>
        <div class="col span_5">
          <div class="bx--form-item">
            <label for="select-id-form" class="bx--label">Industry</label>
            <div class="bx--select">
              <select id="select-id-form" class="bx--select-input" v-model="industry" v-on:change="pickOther(industry, 'industry')">
                <option class="bx--select-option" disabled selected>Choose an option</option>
                <option class="bx--select-option" value="All">All</option>
                <option class="bx--select-option" value="Other">Other</option>
                <option class="bx--select-option" value="Aerospace &amp; Defense">Aerospace &amp; Defense</option>
                <option class="bx--select-option" value="Automotive">Automotive</option>
                <option class="bx--select-option" value="Banking">Banking</option>
                <option class="bx--select-option" value="Chemicals &amp; Petroleum">Chemicals &amp; Petroleum</option>
                <option class="bx--select-option" value="Computer Services">Computer Services</option>
                <option class="bx--select-option" value="Consumer Products">Consumer Products</option>
                <option class="bx--select-option" value="Corporate">Corporate</option>
                <option class="bx--select-option" value="Education">Education</option>
                <option class="bx--select-option" value="Electronics">Electronics</option>
                <option class="bx--select-option" value="Energy &amp; Utilities">Energy &amp; Utilities</option>
                <option class="bx--select-option" value="Engineering">Engineering</option>
                <option class="bx--select-option" value="Financial Markets">Financial Markets</option>
                <option class="bx--select-option" value="General Business Enterprise">General Business Enterprise</option>
                <option class="bx--select-option" value="General Business Mid Market">General Business Mid Market</option>
                <option class="bx--select-option" value="Government">Government</option>
                <option class="bx--select-option" value="Government, Central/Federal">Government, Central/Federal</option>
                <option class="bx--select-option" value="Government, State/Provincial/Local">Government, State/Provincial/Local</option>
                <option class="bx--select-option" value="Healthcare">Healthcare</option>
                <option class="bx--select-option" value="Global Account">Global Account</option>
                <option class="bx--select-option" value="Industrial Markets">Industrial Markets</option>
                <option class="bx--select-option" value="Industrial Products">Industrial Products</option>
                <option class="bx--select-option" value="Insurance">Insurance</option>
                <option class="bx--select-option" value="Law Firm">Law Firm</option>
                <option class="bx--select-option" value="Life Sciences">Life Sciences</option>
                <option class="bx--select-option" value="Manufactoring">Manufactoring</option>
                <option class="bx--select-option" value="Marketing">Marketing</option>
                <option class="bx--select-option" value="Media &amp; Entertainment">Media &amp; Entertainment</option>
                <option class="bx--select-option" value="Mortgage">Mortgage</option>
                <option class="bx--select-option" value="Pharmaceutical">Pharmaceutical</option>
                <option class="bx--select-option" value="Real Estate">Real Estate</option>
                <option class="bx--select-option" value="Retail">Retail</option>
                <option class="bx--select-option" value="Software Group">Software Group</option>
                <option class="bx--select-option" value="Technology Group">Technology Group</option>
                <option class="bx--select-option" value="Telecommunications">Telecommunications</option>
                <option class="bx--select-option" value="Travel &amp; Transportation">Travel &amp; Transportation</option>
              </select>
              <div class="form-requirement">
                Please choose an option.
              </div>
              <svg class="bx--select__arrow" width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
                <path d="M10 0L5 5 0 0z"></path>
              </svg>
            </div>
          </div>
          <div class="bx--form-item" v-show="industryAdd">
            <label for="text1" class="bx--label">Industry, other</label>
            <input id="text1" type="text" class="bx--text-input" v-model="industryAddOther" placeholder="Enter an industry." />
            <div class="form-requirement">
              This field is required.
            </div>
          </div>
        </div>
        <div class="col span_5">
          <div class="bx--form-item">
            <label for="select-id-form" class="bx--label">Service line</label>
            <div class="bx--select">
              <select id="select-id-form" class="bx--select-input" v-model="serviceLine" v-on:change="pickOther(serviceLine, 'serviceLine')">
                <option class="bx--select-option" disabled selected>Choose an option</option>
                <option class="bx--select-option" value="Other">Other</option>
                <option class="bx--select-option" value="Business services">Business services</option>
                <option class="bx--select-option" value="Business Analytics and Strategy">Business Analytics and Strategy</option>
                <option class="bx--select-option" value="Application management">Application management</option>
                <option class="bx--select-option" value="Smarter Commerce">Smarter Commerce</option>
                <option class="bx--select-option" value="IT services">IT services</option>
                <option class="bx--select-option" value="Cloud Services">Cloud Services</option>
                <option class="bx--select-option" value="Mobility Services">Mobility Services</option>
                <option class="bx--select-option" value="Networking Services">Networking Services</option>
                <option class="bx--select-option" value="Outsourcing and Managed Services">Outsourcing and Managed Services</option>
                <option class="bx--select-option" value="Resiliency Services">Resiliency Services</option>
                <option class="bx--select-option" value="Security Services">Security Services</option>
                <option class="bx--select-option" value="Site and Data Center Services">Site and Data Center Services</option>
                <option class="bx--select-option" value="Systems Services">Systems Services</option>
                <option class="bx--select-option" value="Technical Support Services">Technical Support Services</option>
                <option class="bx--select-option" value="Outsourcing services">Outsourcing services</option>
                <option class="bx--select-option" value="Business process outsourcing">Business process outsourcing</option>
                <option class="bx--select-option" value="IT outsourcing">IT outsourcing</option>
                <option class="bx--select-option" value="Sourcing">Sourcing</option>
                <option class="bx--select-option" value="Training">Training</option>
                <option class="bx--select-option" value="Course catalogue">Course catalogue</option>
                <option class="bx--select-option" value="Certification (US)">Certification (US)</option>
                <option class="bx--select-option" value="Courses A-Z">Courses A-Z</option>
              </select>
              <div class="form-requirement">
                Please choose an option.
              </div>
              <svg class="bx--select__arrow" width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
                <path d="M10 0L5 5 0 0z"></path>
              </svg>
            </div>
          </div>
          <div class="bx--form-item" v-show="serviceLineAdd">
            <label for="text1" class="bx--label">Service line, other</label>
            <input id="text1" type="text" class="bx--text-input" v-model="serviceLineAddOther" placeholder="Enter a service line." />
            <div class="form-requirement">
              This field is required.
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="team100">
          <h5 class="h4">Project Information</h5>
        </div>
      </div>
      <div class="row">
        <div class="col span_5">
          <div class="bx--form-item">
            <label for="text1" class="bx--label">Project name</label>
            <input id="text1" type="text" class="bx--text-input" placeholder="Placeholder text" />
            <div class="form-requirement">
              Username is taken.
            </div>
          </div>
        </div>
        <div class="team66">
          <div class="bx--form-item">
            <label for="text1" class="bx--label">Project description</label>
            <input id="text1" type="text" class="bx--text-input" placeholder="Placeholder text" />
            <div class="form-requirement">
              Username is taken.
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col span_5">
          <div class="bx--form-item">
            <label for="text1" class="bx--label">Contact's name</label>
            <input id="text1" type="text" class="bx--text-input" placeholder="Placeholder text" />
            <div class="form-requirement">
              Username is taken.
            </div>
          </div>
        </div>
        <div class="col span_5">
          <div class="bx--form-item">
            <label for="text1" class="bx--label">Contact's email</label>
            <input id="text1" type="text" class="bx--text-input" placeholder="Placeholder text" />
            <div class="form-requirement">
              Username is taken.
            </div>
          </div>
        </div>
        <div class="col span_5">
          <div class="bx--form-item">
            <label for="text1" class="bx--label">Contact's phone #</label>
            <input id="text1" type="text" class="bx--text-input" placeholder="Placeholder text" />
            <div class="form-requirement">
              Username is taken.
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col span_5">
          <fieldset class="bx--fieldset">
            <legend class="bx--label">Contacted Chief Architect?</legend>
            <div class="bx--form-item">
              <input class="bx--toggle" id="toggle2" type="checkbox">
              <label class="bx--toggle__label" for="toggle2">
              <span class="bx--toggle__text--left">No</span>
              <span class="bx--toggle__appearance"></span>
              <span class="bx--toggle__text--right">Yes</span>
            </label>
            </div>
          </fieldset>
        </div>
        <div class="col span_5">
          <div class="bx--form-item">
            <label for="text1" class="bx--label">Chief Architect's email</label>
            <input id="text1" type="text" class="bx--text-input" placeholder="Placeholder text" />
            <div class="form-requirement">
              Username is taken.
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col span_5">
          <div class="bx--form-item">
            <label for="text1" class="bx--label">Acct ID & Claim Codes</label>
            <input id="text1" type="text" class="bx--text-input" placeholder="Placeholder text" />
            <p class="after-form">Lack of active CLAIM will limit the assignable analyst talent pool.</p>
          </div>
        </div>
        <div class="col span_5">
          <fieldset class="bx--fieldset">
            <legend class="bx--label">Is this revenue generating?</legend>
            <div class="bx--form-item">
              <div class="bx--radio-button-group">
                <input id="radio-button-1" class="bx--radio-button" type="radio" value="red" name="radio-button" tabindex="0">
                <label for="radio-button-1" class="bx--radio-button__label">
                  <span class="bx--radio-button__appearance"></span>
                  Yes
                </label>
                <input id="radio-button-2" class="bx--radio-button" type="radio" value="green" name="radio-button" tabindex="0">
                <label for="radio-button-2" class="bx--radio-button__label">
                  <span class="bx--radio-button__appearance"></span>
                  No
                </label>
                <input id="radio-button-3" class="bx--radio-button" type="radio" value="blue" name="radio-button" tabindex="0">
                <label for="radio-button-3" class="bx--radio-button__label">
                  <span class="bx--radio-button__appearance"></span>
                  Maybe
                </label>
              </div>
            </div>
          </fieldset>
        </div>
        <div class="col span_5">
          <fieldset class="bx--fieldset">
            <legend class="bx--label">Is this for cost savings?</legend>
            <div class="bx--form-item">
              <div class="bx--radio-button-group">
                <input id="radio-button-4" class="bx--radio-button" type="radio" value="cost1" name="radio-button" tabindex="0">
                <label for="radio-button-4" class="bx--radio-button__label">
                  <span class="bx--radio-button__appearance"></span>
                  Yes
                </label>
                <input id="radio-button-5" class="bx--radio-button" type="radio" value="cost2" name="radio-button" tabindex="0">
                <label for="radio-button-5" class="bx--radio-button__label">
                  <span class="bx--radio-button__appearance"></span>
                  No
                </label>
                <input id="radio-button-6" class="bx--radio-button" type="radio" value="cost3" name="radio-button" tabindex="0">
                <label for="radio-button-6" class="bx--radio-button__label">
                  <span class="bx--radio-button__appearance"></span>
                  Maybe
                </label>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
      <div class="row">
        <div class="col span_4">
          <div class="bx--form-item">
            <label for="text1" class="bx--label">FTE Requirement</label>
            <input id="text1" type="text" class="bx--text-input" placeholder="Placeholder text" />
          </div>
        </div>
        <div class="col span_4">
          <div class="bx--form-item">
            <label for="text1" class="bx--label">Length of Assignment</label>
            <input id="text1" type="text" class="bx--text-input" placeholder="Placeholder text" />
          </div>
        </div>
        <div class="col span_4">
          <div class="bx--form-item">
            <label for="text1" class="bx--label">Total # of Contract Months</label>
            <input id="text1" type="text" class="bx--text-input" placeholder="Placeholder text" />
          </div>
        </div>
        <div class="col span_4">
          <div class="bx--form-item">
            <label for="text1" class="bx--label">Total Contract Value (TCV)</label>
            <input id="text1" type="text" class="bx--text-input" placeholder="Placeholder text" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="team100">
          <h5 class="h4">Analytics Request Information</h5>
        </div>
      </div>
      <div class="row">
        <div class="col span_4">
          <div class="bx--form-item">
            <label for="select-id-form" class="bx--label">Urgency</label>
            <div class="bx--select">
              <select id="select-id-form" class="bx--select-input">
                <option class="bx--select-option" disabled selected>Choose an option</option>
                <option class="bx--select-option" value="Critical (1 week)">Critical (1 week)</option>
                <option class="bx--select-option" value="High (2-3 weeks)">High (2-3 weeks)</option>
                <option class="bx--select-option" value="Medium (6 weeks)">Medium (6 weeks)</option>
                <option class="bx--select-option" value="Low (> 6 weeks)">Low (&gt; 6 weeks)</option>
              </select>
              <p class="after-form">When are the results needed? Calculate for AFTER arrival of useable data.</p>
              <div class="form-requirement">
                Please choose an option.
              </div>
              <svg class="bx--select__arrow" width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
                <path d="M10 0L5 5 0 0z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="col span_4">
          <div class="bx--form-item">
            <label for="text1" class="bx--label">Target Due Date</label>
            <input id="text1" type="text" class="bx--text-input" placeholder="Placeholder text" />
            <p class="after-form">When do you need the visualization presented to the client?</p>
          </div>
        </div>
        <div class="col span_8">
          <div class="bx--form-item">
            <label for="text-area-2" class="bx--label">Why do you want analytics? What pain points/ costs/ contracts issues are you trying to solve? Are we trying to differentiate from competitors, find pain points and opportunities for a new deal, or identify automation opportunities?</label>
            <textarea id="text-area-2" class="bx--text-area" rows="4" cols="50" placeholder="Placeholder text"></textarea>
            <div class="form-requirement">
              Please do not leave blank.
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col span_8">
          <fieldset class="bx--fieldset">
            <legend class="bx--label">Pain Points</legend>
            <div class="bx--form-item bx--checkbox-wrapper">
              <input id="bx--checkbox-new" class="bx--checkbox" type="checkbox" value="new" name="checkbox">
              <label for="bx--checkbox-new" class="bx--checkbox-label">Account is experiencing excessive incident ticket volume. May be caused by various conditions, such as infrastructure, process, labor resources, data issues, etc</label>
            </div>
            <div class="bx--form-item bx--checkbox-wrapper">
              <input id="bx--checkbox-new" class="bx--checkbox" type="checkbox" value="new" name="checkbox">
              <label for="bx--checkbox-new" class="bx--checkbox-label">Account struggling to identify infrastructure servers for critical application hosting.</label>
            </div>
            <div class="bx--form-item bx--checkbox-wrapper">
              <input id="bx--checkbox-new" class="bx--checkbox" type="checkbox" value="new" name="checkbox">
              <label for="bx--checkbox-new" class="bx--checkbox-label">Business and IT struggling with Service/Help Desk operations. Examples: Low customer satisfaction, Ticket prioritization gaps, response and/or resolution timeliness, other.</label>
            </div>
            <div class="bx--form-item bx--checkbox-wrapper">
              <input id="bx--checkbox-new" class="bx--checkbox" type="checkbox" value="new" name="checkbox">
              <label for="bx--checkbox-new" class="bx--checkbox-label">Account needs to understand progress against automation and efficiency objectives.</label>
            </div>
            <div class="bx--form-item bx--checkbox-wrapper">
              <input id="bx--checkbox-new" class="bx--checkbox" type="checkbox" value="new" name="checkbox">
              <label for="bx--checkbox-new" class="bx--checkbox-label">Other</label>
            </div>
          </fieldset>
        </div>
        <div class="col span_8">
          <div class="bx--form-item">
            <label for="text-area-2" class="bx--label">If other, explain here:</label>
            <textarea id="text-area-2" class="bx--text-area" rows="4" cols="50" placeholder="Placeholder text"></textarea>
            <div class="form-requirement">
              Please do not leave blank.
            </div>
          </div>
        </div>
      </div>

      <div class="row pad-1-up">
        <div class="col span_8">
          <div class="bx--form-item">
            <label for="text1" class="bx--label">How do we measure success?</label>
            <input id="text1" type="text" class="bx--text-input" placeholder="Placeholder text" />
            <p class="after-form">Incident reduction, signed deal, % incidents automated, improved change success, etc?</p>
          </div>
        </div>
        <div class="col span_8">
          <div class="bx--form-item">
            <label for="text1" class="bx--label">What is the scope of this request?</label>
            <input id="text1" type="text" class="bx--text-input" placeholder="Placeholder text" />
            <p class="after-form">Server, Mainframe, Incident Problem Change (IPC), End User?</p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col span_8">
          <div class="bx--form-item">
            <label for="text1" class="bx--label">Type of Solution being requested</label>
            <input id="text1" type="text" class="bx--text-input" placeholder="Placeholder text" />
            <p class="after-form">PASIR, Quality Assurance, Reporting Analytics, Newblue, etc.</p>
          </div>
        </div>
        <div class="col span_8">
          <div class="bx--form-item">
            <label for="text1" class="bx--label">Tool Request/Restriction Comments</label>
            <input id="text1" type="text" class="bx--text-input" placeholder="Placeholder text" />
            <p class="after-form">Enter any tool request or restriction information.</p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="team100">
          <h5 class="h4">Analytics Request Information</h5>
        </div>
      </div>

      <div class="row">
        <div class="col span_5">
          <fieldset class="bx--fieldset">
            <legend class="bx--label">Do you currently have access to the data to be analyzed?</legend>
            <div class="bx--form-item">
              <input class="bx--toggle" id="toggle2" type="checkbox">
              <label class="bx--toggle__label" for="toggle2">
              <span class="bx--toggle__text--left">No</span>
              <span class="bx--toggle__appearance"></span>
              <span class="bx--toggle__text--right">Yes</span>
            </label>
            </div>
          </fieldset>
        </div>
        <div class="team66">
          <p>Upload your data to box >>>  Box Data Upload</p>
          <p>Include Account Name and data type in the file name (i.e. ACME Incident Jan-Dec2017.xlsx). Quality of Analytics is completely dependent upon the quality of your supplied data. Recommended Incident and Change field lists are available upon request.</p>
        </div>
      </div>
      <div class="row">
        <div class="col span_5">
          <fieldset class="bx--fieldset">
            <legend class="bx--label">Do you have data restrictions?</legend>
            <div class="bx--form-item">
              <input class="bx--toggle" id="toggle2" type="checkbox">
              <label class="bx--toggle__label" for="toggle2">
              <span class="bx--toggle__text--left">No</span>
              <span class="bx--toggle__appearance"></span>
              <span class="bx--toggle__text--right">Yes</span>
            </label>
            </div>
          </fieldset>
        </div>
        <div class="team66">
          <p>Is the data regulated, limited to U.S. workers, under an NDA, or are there other restrictions to data access (beyond normal confidentiality)?</p>
          <div class="bx--form-item">
            <label for="text1" class="bx--label">Data Restriction Comments</label>
            <input id="text1" type="text" class="bx--text-input" placeholder="Placeholder text" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="team100">
          <fieldset class="bx--fieldset">
            <legend class="bx--label">Select all applicable data types.</legend>
          </fieldset>
        </div>
      </div>
      <div class="row">
        <div class="col span_4">
          <fieldset class="bx--fieldset">
            <div class="bx--form-item bx--checkbox-wrapper">
              <input id="bx--checkbox-new" class="bx--checkbox" type="checkbox" value="new" name="checkbox">
              <label for="bx--checkbox-new" class="bx--checkbox-label">Incident</label>
            </div>
            <div class="bx--form-item bx--checkbox-wrapper">
              <input id="bx--checkbox-new" class="bx--checkbox" type="checkbox" value="new" name="checkbox">
              <label for="bx--checkbox-new" class="bx--checkbox-label">Problem</label>
            </div>
            <div class="bx--form-item bx--checkbox-wrapper">
              <input id="bx--checkbox-new" class="bx--checkbox" type="checkbox" value="new" name="checkbox">
              <label for="bx--checkbox-new" class="bx--checkbox-label">Change</label>
            </div>
          </fieldset>
        </div>
        <div class="col span_4">
          <fieldset class="bx--fieldset">
            <div class="bx--form-item bx--checkbox-wrapper">
              <input id="bx--checkbox-new" class="bx--checkbox" type="checkbox" value="new" name="checkbox">
              <label for="bx--checkbox-new" class="bx--checkbox-label">Work Order</label>
            </div>
            <div class="bx--form-item bx--checkbox-wrapper">
              <input id="bx--checkbox-new" class="bx--checkbox" type="checkbox" value="new" name="checkbox">
              <label for="bx--checkbox-new" class="bx--checkbox-label">Service Request</label>
            </div>
            <div class="bx--form-item bx--checkbox-wrapper">
              <input id="bx--checkbox-new" class="bx--checkbox" type="checkbox" value="new" name="checkbox">
              <label for="bx--checkbox-new" class="bx--checkbox-label">System Logs</label>
            </div>
          </fieldset>
        </div>
        <div class="col span_4">
          <fieldset class="bx--fieldset">
            <div class="bx--form-item bx--checkbox-wrapper">
              <input id="bx--checkbox-new" class="bx--checkbox" type="checkbox" value="new" name="checkbox">
              <label for="bx--checkbox-new" class="bx--checkbox-label">Storage data (e.g. TPC)</label>
            </div>
            <div class="bx--form-item bx--checkbox-wrapper">
              <input id="bx--checkbox-new" class="bx--checkbox" type="checkbox" value="new" name="checkbox">
              <label for="bx--checkbox-new" class="bx--checkbox-label">Performance &amp; Capacity (e.g. SRM)</label>
            </div>
            <div class="bx--form-item bx--checkbox-wrapper">
              <input id="bx--checkbox-new" class="bx--checkbox" type="checkbox" value="new" name="checkbox">
              <label for="bx--checkbox-new" class="bx--checkbox-label">Network Traffic (e.g. NetCool)</label>
            </div>
          </fieldset>
        </div>
        <div class="col span_4">
          <fieldset class="bx--fieldset">
            <div class="bx--form-item bx--checkbox-wrapper">
              <input id="bx--checkbox-new" class="bx--checkbox" type="checkbox" value="new" name="checkbox">
              <label for="bx--checkbox-new" class="bx--checkbox-label">Root Cause Analysis</label>
            </div>
          </fieldset>
          <fieldset class="bx--fieldset">
            <div class="bx--form-item bx--checkbox-wrapper">
              <input id="bx--checkbox-new" class="bx--checkbox" type="checkbox" value="new" name="checkbox">
              <label for="bx--checkbox-new" class="bx--checkbox-label">Other</label>
            </div>
          </fieldset>
          <fieldset class="bx--fieldset">
            <div class="bx--form-item bx--checkbox-wrapper">
              <input id="bx--checkbox-new" class="bx--checkbox" type="checkbox" value="new" name="checkbox">
              <label for="bx--checkbox-new" class="bx--checkbox-label">Unknown</label>
            </div>
          </fieldset>
        </div>
      </div>
      <div class="row pad-1-up">
        <div class="col span_8">
          <div class="bx--form-item">
            <label for="select-id-form" class="bx--label">Data format</label>
            <div class="bx--select">
              <select id="select-id-form" class="bx--select-input">
                <option class="bx--select-option" disabled selected>Choose an option</option>
                <option class="bx--select-option" value="CSV/XLS/XLSX/XLSM">CSV/XLS/XLSX/XLSM</option>
                <option class="bx--select-option" value="Database">Database</option>
                <option class="bx--select-option" value="Tableau Workbook">Tableau Workbook</option>
                <option class="bx--select-option" value="Watson Analytics">Watson Analytics</option>
                <option class="bx--select-option" value="SPSS Model">SPSS Model</option>
                <option class="bx--select-option" value="Text">Text</option>
                <option class="bx--select-option" value="Other">Other</option>
              </select>
              <div class="form-requirement">
                Please choose an option.
              </div>
              <svg class="bx--select__arrow" width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
                <path d="M10 0L5 5 0 0z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="col span_8">
          <div class="bx--form-item">
            <label for="select-id-form" class="bx--label">Connection Type</label>
            <div class="bx--select">
              <select id="select-id-form" class="bx--select-input">
                <option class="bx--select-option" disabled selected>Choose an option</option>
                <option class="bx--select-option" value="Flat File / None">Flat File / None</option>
                <option class="bx--select-option" value="Direct Connect">Direct Connect</option>
                <option class="bx--select-option" value="DB2">DB2</option>
                <option class="bx--select-option" value="Dash">Dash</option>
                <option class="bx--select-option" value="Unknown">Unknown</option>
                <option class="bx--select-option" value="Other">Other</option>
              </select>
              <p>What type of connection will we have to the data?</p>
              <div class="form-requirement">
                Please choose an option.
              </div>
              <svg class="bx--select__arrow" width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
                <path d="M10 0L5 5 0 0z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col span_8">
          <div class="bx--form-item">
            <button class="bx--btn bx--btn--primary" type="button">Submit</button>
          </div>
        </div>
      </div>

    </div>


  </div>
</template>

<script>
// import axios from 'axios';

export default {
  name: 'requests',
  props: ['project'],
  data() {
    return {
      isActive: false,
      items: null,
      geography: null,
      country: null,
      accountName: null,
      sector: null,
      industry: null,
      serviceLine: null,
      sectorAddOther: null,
      industryAddOther: null,
      serviceLineAddOther: null,
      sectorAdd: false,
      industryAdd: false,
      serviceLineAdd: false,
      projectName: null,
      projectDescription: null,
      contactName: null,
      contactEmail: null,
      contactPhone: null,
      architect: null,
      arhictectEmail: null,
      claimCodes: null,
      isRevenue: null,
      isCost: null,
      fteReqs: null,
      assignmentLength: null,
      contractMonths: null,
      contractValue: null,
      urgency: null,
      dueDate: null,
      reason: null,
      painpoints: [],
      painOther: null,
      metrics: null,
      scope: null,
      solution: null,
      restriction: null,
      haveAccess: null,
      haveRestrictions: null,
      haveRestrictionsComment: null,
      dataTypes: [],
      dataFormat: null,
      connectionType: null
    }
  },
  mounted() {
    // axios.get(json).then(function (response) {
    //   self.items = response.data.data;
    // }).catch(function (error) {
    //   console.log(error);
    // });
  },
  methods: {
    pickOther(model, val) {
      var pickedThing = val + 'Add';
      console.log(pickedThing);
      console.log(this[pickedThing]);
      model === 'Other' ? this[pickedThing] = true : this[pickedThing] = false;
    }
  }
}
</script>

<style scoped>

</style>

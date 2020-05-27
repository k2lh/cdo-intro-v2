<template>
  <div id="projectview" class="page-body no-head">
    <div id="leadspace">
      <h1 id="pagetitle-h1" class="h1 dw-navpage-develop">Edit Project</h1>
      <p>Use this form to update your projects.</p>
    </div>
    <div class="container unbox formpage" v-if="item">
        <div class="row">
          <div class="col span_6">
            <div class="bx--form-item">
              <label for="text1" class="bx--label">Project name</label>
              <input type="text" class="bx--text-input" v-model="item.project" placeholder="Enter the project name." />
            </div>
          </div>
          <div class="col span_2 alignright pad-2-up">
            <div class="bx--form-item">
              <button class="bx--btn bx--btn--ghost" type="button">cancel</button>
            </div>
          </div>
          <div class="col span_2 alignright pad-2-up">
            <div class="bx--form-item">
              <button class="bx--btn bx--btn--primary" type="button" v-on:click="submitProject">
                Save project
                <svg class="bx--btn__icon" width="16" height="16" viewBox='0 0 24 24' fill-rule='evenodd'><path d='M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm0-2C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0z'></path><path d='M10.3 13.6L7.7 11l-1.4 1.4 4 4L17.8 9l-1.4-1.4z'></path></svg>
              </button>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col span_16">
            <nav data-tabs class="bx--tabs" role="navigation">
              <ul class="bx--tabs__nav bx--tabs__nav--hidden" role="tablist">
                <li class="bx--tabs__nav-item" data-target=".tab-2" role="presentation" v-bind:class="{ 'bx--tabs__nav-item--selected': standupSection }">
                  <a id="tab-link-2" class="bx--tabs__nav-link" href="javascript:void(0)" v-on:click="changeSection('standupSection')" role="tab" aria-controls="tab-panel-2">All Updates</a>
                </li>
                <li class="bx--tabs__nav-item" data-target=".tab-1" role="presentation" v-bind:class="{ 'bx--tabs__nav-item--selected': infoSection }">
                  <a id="tab-link-1" class="bx--tabs__nav-link" href="javascript:void(0)" v-on:click="changeSection('infoSection')" role="tab" aria-controls="tab-panel-1">Links & Info</a>
                </li>
                <li class="bx--tabs__nav-item" data-target=".tab-2" role="presentation" v-bind:class="{ 'bx--tabs__nav-item--selected': statusSection }">
                  <a id="tab-link-2" class="bx--tabs__nav-link" href="javascript:void(0)" v-on:click="changeSection('statusSection')" role="tab" aria-controls="tab-panel-2">Status & Team</a>
                </li>
                <li class="bx--tabs__nav-item" data-target=".tab-2" role="presentation" v-bind:class="{ 'bx--tabs__nav-item--selected': updateSection }">
                  <a id="tab-link-2" class="bx--tabs__nav-link" href="javascript:void(0)" v-on:click="changeSection('updateSection')" role="tab" aria-controls="tab-panel-2">Summaries</a>
                </li>
                <li class="bx--tabs__nav-item" data-target=".tab-3" role="presentation" v-bind:class="{ 'bx--tabs__nav-item--selected': projectSection }">
                  <a id="tab-link-3" class="bx--tabs__nav-link" href="javascript:void(0)" v-on:click="changeSection('projectSection')" role="tab" aria-controls="tab-panel-3">Project Data</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div v-if="infoSection">
          <div class="row">
            <div class="col span_4">
              <h4 class="h4">Useful Links</h4>
              <p><a href="https://vplanner.dst.ibm.com/team/index/51566/">Vacation Planner home</a></p>
              <p>To broadcast your Notes vacation db, email the file to ecal@torovm1.vnet.ibm.com.</p>
              <p><a href="https://calendar.haifa.ibm.com/#/home">Create a group calendar</a></p>
              <p>setting up claim code</p>
              <p>IPWC setup</p>
              <p>create a service request</p>
            </div>
            <div class="col span_4">
              <h4 class="h4">Related Patterns</h4>
              <p>pattern1</p>
              <p>pattern2</p>
            </div>
            <div class="col span_4">
              <h4 class="h4">Suggested Tutorials & Guides</h4>
              <p>tutorial</p>
              <p>article</p>
              <p>video</p>
            </div>
            <div class="col span_4">
              <h4 class="h4">Related Documentation</h4>
              <p>lessons learned from other-project1</p>
              <p>project plan from other-project2</p>
              <p>kickoff deck from other-project3</p>
            </div>
          </div>
        </div>

        <div v-if="statusSection">
          <div class="row">
            <div class="col span_4">
              <div class="bx--form-item">
                <input class="bx--toggle" id="toggle1" type="checkbox" v-model="item.cocreation">
                <label class="bx--toggle__label" for="toggle1">
                  <span class="bx--toggle__text--left">Regular</span>
                  <span class="bx--toggle__appearance"></span>
                  <span class="bx--toggle__text--right">Co-creation</span>
                </label>
              </div>
              <div class="bx--form-item">
                <input class="bx--toggle" id="toggle2" type="checkbox" v-model="item.inactive">
                <label class="bx--toggle__label" for="toggle2">
                  <span class="bx--toggle__text--left">Active</span>
                  <span class="bx--toggle__appearance"></span>
                  <span class="bx--toggle__text--right">Inactive</span>
                </label>
              </div>
              <div class="bx--form-item">
                <input class="bx--toggle" id="toggle4" type="checkbox" v-model="item.public">
                <label class="bx--toggle__label" for="toggle4">
                  <span class="bx--toggle__text--left">only</span>
                  <span class="bx--toggle__appearance"></span>
                  <span class="bx--toggle__text--right">Public</span>
                </label>
              </div>
              <div class="bx--form-item">
                <input class="bx--toggle" id="toggle15" type="checkbox" v-model="item.clientfocus">
                <label class="bx--toggle__label" for="toggle15">
                  <span class="bx--toggle__text--left">focused</span>
                  <span class="bx--toggle__appearance"></span>
                  <span class="bx--toggle__text--right">Client-focused</span>
                </label>
              </div>
              <div class="bx--form-item">
                <input class="bx--toggle" id="toggle3" type="checkbox" v-model="item.internal">
                <label class="bx--toggle__label" for="toggle3">
                  <span class="bx--toggle__text--left">All XXXers</span>
                  <span class="bx--toggle__appearance"></span>
                  <span class="bx--toggle__text--right">Team-only</span>
                </label>
              </div>
              <div class="bx--form-item" v-if="item.internal === true">
                <label for="select-id-form" class="bx--label">group</label>
                <div class="bx--select">
                  <select id="select-id-form" v-model="item.group" class="bx--select-input">
                    <option class="bx--select-option" disabled selected>Choose one</option>
                    <option class="bx--select-option" value="saa">saa</option>
                    <option class="bx--select-option" value="sda-admins">sda-admins</option>
                  </select>
                  <svg class="bx--select__arrow" width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
                    <path d="M10 0L5 5 0 0z"></path>
                  </svg>
                </div>
              </div>
              <div class="bx--form-item">
                <input class="bx--toggle" id="toggle5" type="checkbox" v-model="item.child">
                <label class="bx--toggle__label" for="toggle5">
                  <span class="bx--toggle__text--left">Standalone</span>
                  <span class="bx--toggle__appearance"></span>
                  <span class="bx--toggle__text--right">Child project</span>
                </label>
              </div>
              <div class="bx--form-item" v-if="item.child === true">
                <label for="text1" class="bx--label">Parent project</label>
                <div class="bx--select">
                  <select id="select-id-form" v-model="item.parent" class="bx--select-input">
                    <option class="bx--select-option" disabled selected>Choose one</option>
                    <option v-bind:value="item.parent">{{item.parent}}</option>
                    <option v-for="(project, index) in projectList" v-if="project !== item.parent" v-bind:key="index" v-bind:value="item.parent">{{project}}</option>
                  </select>
                  <svg class="bx--select__arrow" width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
                    <path d="M10 0L5 5 0 0z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="col span_4">
              <div class="bx--form-item">
                <label for="select-id-form" class="bx--label">Status</label>
                <div class="bx--select">
                  <select id="select-id-form" v-model="item.status" class="bx--select-input">
                    <option class="bx--select-option" disabled selected>Choose one</option>
                    <option class="bx--select-option" value="green">green</option>
                    <option class="bx--select-option" value="amber">amber</option>
                    <option class="bx--select-option" value="red">red</option>
                    <option class="bx--select-option" value="paused">paused</option>
                    <option class="bx--select-option" value="closed">closed</option>
                  </select>
                  <svg class="bx--select__arrow" width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
                    <path d="M10 0L5 5 0 0z"></path>
                  </svg>
                </div>
              </div>
              <div class="bx--form-item">
                <label for="text1" class="bx--label">Repository</label>
                <input type="text" class="bx--text-input" v-model="item.repo" placeholder="leave blank if generated" />
              </div>
            </div>
            <div class="col span_6">
              <div class="bx--form-item">
                <label for="select-id-form" class="bx--label">Tags (max 4)</label>
                <ul>
                  <li v-for="(tag, index) in item.tags" class="clickable-tag selected-tag" v-on:click="item.tags.splice(index, 1);">{{tag}}</li>
                </ul>
                <ul>
                  <li v-for="tag in tags" class="clickable-tag" v-if="item.tags.indexOf(tag) < 0" v-on:click="item.tags.push(tag);">{{tag}}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col span_5">
              <label for="addUser" class="bx--label">Enter email to add person</label>
              <div class="bx--form-item">
                <input id="addUser" type="email" class="bx--text-input" v-model="email"/>
              </div>
              <button class="bx--btn bx--btn--secondary" type="button" v-on:click="getUser(email, 'leads')">
                Add as lead
                <svg class="bx--btn__icon" width="16" height="16" viewBox="0 0 16 16" fill-rule="evenodd">
                  <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm4 9H9v3H7V9H4V7h3V4h2v3h3v2z"></path>
                </svg>
              </button>
              <button class="bx--btn bx--btn--secondary" type="button" v-on:click="getUser(email, 'members')">
                Add as member
                <svg class="bx--btn__icon" width="16" height="16" viewBox="0 0 16 16" fill-rule="evenodd">
                  <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm4 9H9v3H7V9H4V7h3V4h2v3h3v2z"></path>
                </svg>
              </button>
            </div>
            <div class="col span_5">
              <h6 class="h6">Lead(s) &mdash; click to remove</h6>
              <ul>
                <li class="user-list" v-for="(user, index) in item.leads" v-bind:key="index" >
                  <span class="confirmed" v-if="user.uid">
                    <svg width='12' height='9' viewBox='0 0 12 9' fill-rule='evenodd'><path d='M4.1 6.1L1.4 3.4 0 4.9 4.1 9l7.6-7.6L10.3 0z'></path></svg>
                    {{user.name}}
                  </span>
                  <span v-else class="red-icon">
                    <svg width='12' height='9' viewBox='0 0 24 21' fill-rule='evenodd'><path d='M12 0L0 21h24L12 0zm0 3l9 16H3l9-16z'></path><path d='M11.2 8.4V10l.4 4h.8l.4-4V8.4zM11.2 16a.8.8 0 1 1 1.6 0 .8.8 0 1 1-1.6 0'></path></svg>
                    {{user.name}}, {{user.email}}
                  </span>
                  <span class="floatright close-this" v-on:click="item.leads.splice(index, 1);">
                    <svg width='10' height='10' viewBox='0 0 10 10' fill-rule='evenodd'><path d='M9.8 8.6L8.4 10 5 6.4 1.4 10 0 8.6 3.6 5 .1 1.4 1.5 0 5 3.6 8.6 0 10 1.4 6.4 5z'></path></svg>
                  </span>
                </li>
              </ul>
            </div>
            <div class="col span_5">
              <h6 class="h6">Member(s) &mdash; click to remove</h6>
              <ul>
                <li class="user-list" v-for="(user, index) in item.members" v-bind:key="index">
                  <span class="confirmed" v-if="user.uid">
                    <svg width='12' height='9' viewBox='0 0 12 9' fill-rule='evenodd'><path d='M4.1 6.1L1.4 3.4 0 4.9 4.1 9l7.6-7.6L10.3 0z'></path></svg>
                    {{user.name}}
                  </span>
                  <span v-else class="red-icon">
                    <svg width='12' height='9' viewBox='0 0 24 21' fill-rule='evenodd'><path d='M12 0L0 21h24L12 0zm0 3l9 16H3l9-16z'></path><path d='M11.2 8.4V10l.4 4h.8l.4-4V8.4zM11.2 16a.8.8 0 1 1 1.6 0 .8.8 0 1 1-1.6 0'></path></svg>
                    {{user.name}}, {{user.email}}
                  </span>
                  <span class="floatright close-this" v-on:click="item.members.splice(index, 1);">
                    <svg width='10' height='10' viewBox='0 0 10 10' fill-rule='evenodd'><path d='M9.8 8.6L8.4 10 5 6.4 1.4 10 0 8.6 3.6 5 .1 1.4 1.5 0 5 3.6 8.6 0 10 1.4 6.4 5z'></path></svg>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col span_4">
              <label for="select-id-form" class="bx--label">Create</label>
            </div>
            <div class="col span_4">
              <label for="select-id-form" class="bx--label">Task</label>
            </div>
            <div class="col span_8">
              <label for="select-id-form" class="bx--label">Result</label>
            </div>
          </div>
          <div class="row" v-for="(task, index) in item.setup">
            <div class="col span_4">
              <div class="bx--select">
                <select id="select-id-form" class="bx--select-input" v-model="item.setup[index].selected" v-on:change="doTask(index)">
                  <option class="bx--select-option" disabled selected>Choose an option</option>
                  <option class="bx--select-option" value="1">Automatic</option>
                  <option class="bx--select-option" value="3">Manual</option>
                  <option class="bx--select-option" value="2">Clear this entry</option>
                </select>
                <svg class="bx--select__arrow" width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
                  <path d="M10 0L5 5 0 0z"></path>
                </svg>
              </div>
            </div>
            <div class="col span_4">
              <p>{{task.label}}</p>
            </div>
            <div class="col span_8">
              <div v-if="item.setup[index].selected < 2">
                <p>created: {{task.result}}</p>
              </div>
              <div v-if="item.setup[index].selected > 2">
                <input id="text1" type="text" class="bx--text-input" v-model="task.result" placeholder="Enter link for item." />
              </div>
              <div v-else>
                <p></p>
              </div>
            </div>
          </div>
        </div>

        <div v-if="updateSection">
          <div class="row">
            <div class="col span_5">
              <label for="text1" class="bx--label">Activity</label>
            </div>
            <div class="col span_3">
              <label for="text1" class="bx--label">Type</label>
            </div>
            <div class="col span_3">
              <label for="text1" class="bx--label">Quarter</label>
            </div>
            <div class="col span_3">
              <label for="text1" class="bx--label">Year</label>
            </div>
          </div>
          <div class="row" v-for="(thing, index) in item.activities">
            <div class="col span_5">
              <div class="bx--form-item">
                <input type="text" class="bx--text-input" v-model="thing.title"/>
              </div>
            </div>
            <div class="col span_3">
              <div class="bx--form-item">
                <div class="bx--select">
                  <select id="select-id-form" v-model="thing.type" class="bx--select-input">
                    <option class="bx--select-option" disabled selected>Choose one</option>
                    <option v-bind:value="thing.type">{{thing.type}}</option>
                    <option v-for="(type, index) in types" v-if="type !== thing.type" v-bind:key="index" v-bind:value="type">{{type}}</option>
                  </select>
                  <svg class="bx--select__arrow" width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
                    <path d="M10 0L5 5 0 0z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="col span_3">
              <div class="bx--form-item">
                <div class="bx--select">
                  <select id="select-id-form" v-model="thing.quarter" class="bx--select-input">
                    <option class="bx--select-option" disabled selected>Choose one</option>
                    <option v-bind:value="thing.quarter">{{thing.quarter}}</option>
                    <option v-for="(quarter, index) in quarters" v-if="quarter !== thing.quarter" v-bind:key="index" v-bind:value="quarter">{{quarter}}</option>
                  </select>
                  <svg class="bx--select__arrow" width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
                    <path d="M10 0L5 5 0 0z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="col span_3">
              <div class="bx--select">
                <select id="select-id-form" v-model="thing.year" class="bx--select-input">
                  <option class="bx--select-option" disabled selected>Choose one</option>
                  <option v-bind:value="thing.year">{{thing.year}}</option>
                  <option v-for="(year, index) in years" v-if="year !== thing.year" v-bind:key="index" v-bind:value="year">{{year}}</option>
                </select>
                <svg class="bx--select__arrow" width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
                  <path d="M10 0L5 5 0 0z"></path>
                </svg>
              </div>
            </div>
            <div class="col span_2">
              <div class="bx--form-item">
                <span class="remove-row" v-on:click="item.activities.splice(index, 1);">
                  <svg width='10' height='10' viewBox='0 0 10 10' fill-rule='evenodd'><path d='M9.8 8.6L8.4 10 5 6.4 1.4 10 0 8.6 3.6 5 .1 1.4 1.5 0 5 3.6 8.6 0 10 1.4 6.4 5z'></path></svg>
                </span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col span_3">
              <button class="bx--btn bx--btn--secondary" type="button" v-on:click="item.activities.push({ title: '', type: '', quarter: '', year: '' })">
                Add an activity
                <svg class="bx--btn__icon" width="16" height="16" viewBox="0 0 16 16" fill-rule="evenodd">
                  <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm4 9H9v3H7V9H4V7h3V4h2v3h3v2z"></path>
                </svg>
              </button>
            </div>
            <div class="col span_9">
              <p v-if="activityListWarning" class="form-note warning">Each activity must have a title, type, quarter, and year.</p>
            </div>
          </div>
          <div class="row pad-2-up">
            <div class="col span_16">
              <label for="text-area-2" class="bx--label">Add and remove Accomplishments as needed. Empty rows will be ignored.</label>
            </div>
          </div>
          <div class="row" v-for="(thing, index) in item.accomplishments" v-bind:key="index">
            <div class="col span_14">
              <div class="bx--form-item">
                <input type="text" class="bx--text-input repeat-rows" v-model="item.accomplishments[index]" placeholder="Enter a recent accomplishment.">
              </div>
            </div>
            <div class="col span_2">
              <span class="remove-row" v-on:click="item.accomplishments.splice(index, 1);"><svg width='10' height='10' viewBox='0 0 10 10' fill-rule='evenodd'><path d='M9.8 8.6L8.4 10 5 6.4 1.4 10 0 8.6 3.6 5 .1 1.4 1.5 0 5 3.6 8.6 0 10 1.4 6.4 5z'></path></svg></span><br/>
            </div>
          </div>
          <div class="row">
            <div class="col span_11">
              <button class="bx--btn bx--btn--secondary" type="button" v-on:click="item.accomplishments.push('')">
                Add an accomplishment
                <svg class="bx--btn__icon" width="16" height="16" viewBox="0 0 16 16" fill-rule="evenodd">
                  <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm4 9H9v3H7V9H4V7h3V4h2v3h3v2z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="row pad-2-up">
            <div class="col span_16">
              <label for="text-area-2" class="bx--label">Add and remove Next Steps and next steps as needed. Empty rows will be ignored.</label>
            </div>
          </div>
          <div class="row" v-for="(thing, index) in item.upcoming" v-bind:key="index">
            <div class="col span_14">
              <div class="bx--form-item">
                <input type="text" class="bx--text-input repeat-rows" v-model="item.upcoming[index]" placeholder="Enter an upcoming step.">
              </div>
            </div>
            <div class="col span_2">
              <span class="remove-row" v-on:click="item.upcoming.splice(index, 1);"><svg width='10' height='10' viewBox='0 0 10 10' fill-rule='evenodd'><path d='M9.8 8.6L8.4 10 5 6.4 1.4 10 0 8.6 3.6 5 .1 1.4 1.5 0 5 3.6 8.6 0 10 1.4 6.4 5z'></path></svg></span><br/>
            </div>
          </div>
          <div class="row">
            <div class="col span_16">
              <button class="bx--btn bx--btn--secondary" type="button" v-on:click="item.upcoming.push('')">
                Add a step
                <svg class="bx--btn__icon" width="16" height="16" viewBox="0 0 16 16" fill-rule="evenodd">
                  <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm4 9H9v3H7V9H4V7h3V4h2v3h3v2z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div v-if="projectSection">
          <div class="row">
            <div class="col span_16">
              <div class="bx--form-item">
                <label for="text1" class="bx--label">Description</label>
                <input type="text" class="bx--text-input" v-model="item.description" placeholder="Enter a description." />
                <div class="form-requirement">
                  This field is required.
                </div>
              </div>

              <div class="bx--form-item">
                <label for="text-area-2" class="bx--label">Full Description</label>
                <textarea id="text-area-2" class="bx--text-area" v-model="item.description_full" rows="4" cols="50" placeholder="Use this space for a longer description.">
                  {{item.description_full}}
                </textarea>
              </div>

              <div class="bx--form-item">
                <label for="text1" class="bx--label">Problem statement</label>
                <input type="text" class="bx--text-input" v-model="item.problem" placeholder="Enter a short problem statement." />
              </div>
            </div>
          </div>
          <div class="row pad-1-up">
            <div class="col span_5">
              <div class="bx--form-item">
                <label for="text1" class="bx--label">Benefit #1</label>
                <input type="text" class="bx--text-input" v-model="item.benefits[0]" placeholder="Enter a benefit." />
              </div>
            </div>
            <div class="col span_5">
              <div class="bx--form-item">
                <label for="text1" class="bx--label">Benefit #2</label>
                <input type="text" class="bx--text-input" v-model="item.benefits[1]" placeholder="Enter a benefit." />
              </div>
            </div>
            <div class="col span_5">
              <div class="bx--form-item">
                <label for="text1" class="bx--label">Benefit #3</label>
                <input type="text" class="bx--text-input" v-model="item.benefits[2]" placeholder="Enter a benefit." />
              </div>
            </div>
          </div>
          <div class="row pad-1-up">
            <div class="col span_16">
              <div class="bx--form-item">
                <label for="text1" class="bx--label">MVP/Hill #1</label>
                <input type="text" class="bx--text-input" v-model="item.mvp1" placeholder="Enter a description." />
              </div>

              <div class="bx--form-item">
                <label for="text1" class="bx--label">MVP/Hill #2</label>
                <input type="text" class="bx--text-input" v-model="item.mvp2" placeholder="Enter a description." />
              </div>

              <div class="bx--form-item">
                <label for="text1" class="bx--label">MVP/Hill #3</label>
                <input type="text" class="bx--text-input" v-model="item.mvp3" placeholder="Enter a description." />
              </div>
            </div>
          </div>
        </div>

        <div v-if="standupSection">
          <div class="row">
            <div class="col span_14">
              <div class="bx--form-item">
                <label for="text-area-2" class="bx--label">Quick update</label>
                <textarea id="text-area-2" class="bx--text-area" v-model="update" v-on:change="saveUpdate" rows="3" cols="50" placeholder="Enter your project's latest news and events."></textarea>
              </div>
            </div>
            <div class="col span_2">
              <div v-if="save.update" class="green-icon pad-2-up strong">
                <svg width='12' height='9' viewBox='0 0 12 9' fill-rule='evenodd'><path d='M4.1 6.1L1.4 3.4 0 4.9 4.1 9l7.6-7.6L10.3 0z'></path></svg> saved
              </div>
            </div>
          </div>

          <div class="row" v-for="(entry, index) in item.updates">
            <div class="col span_14">
              <div class="bx--form-item">
                <label for="text-area-2" class="bx--label">{{ [entry.date, "YYYY-MM-DD"] | moment("MMM D YYYY") }}</label>
                <textarea id="text-area-2" class="bx--text-area" v-model="item.updates[index].info" rows="3" cols="50"></textarea>
              </div>
            </div>
            <div class="col span_2">
              <div class="bx--form-item">
                <span class="remove-row double" v-on:click="removeItem('updates', index)">
                  <svg width='10' height='10' viewBox='0 0 10 10' fill-rule='evenodd'><path d='M9.8 8.6L8.4 10 5 6.4 1.4 10 0 8.6 3.6 5 .1 1.4 1.5 0 5 3.6 8.6 0 10 1.4 6.4 5z'></path></svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  name: 'projectedit',
  props: ['project'],
  data() {
    return {
      isActive: true,
      checked: false,
      infoSection: false,
      updateSection: false,
      standupSection: true,
      projectSection: false,
      activityListWarning: false,
      statusSection: false,
      email: null,
      today: null,
      save: {
        'update': false
      },
      projectList: [],
      activityList: [
        {
          title: '',
          type: '',
          quarter: '',
          year: ''
        }
      ],
      update: null,
      quarters: [
        'Q1',
        'Q2',
        'Q3',
        'Q4'
      ],
      years: [
        '2017',
        '2018'
      ],
      item: {
        'id': null,
        'project': null,
        'repo': null,
        'description': null,
        'description_full': null,
        'status': null,
        'cocreation': false,
        'inactive': false,
        'internal': true,
        'group': null,
        'clientfocus': false,
        'public': true,
        'child': true,
        'parent': null,
        'owner': null,
        'leads': [],
        'members': [],
        'tags': [],
        'links': [],
        'activities': [],
        'updates': [],
        'dashboard': null,
        'benefits': [],
        'accomplishments': [],
        'upcoming': [],
        'mvp1': null,
        'mvp2': null,
        'mvp3': null,
        'problem': null
      },
      tags: [
        'ai',
        'analytics',
        'api',
        'automation',
        'blockchain',
        'cloud',
        'containers',
        'data science',
        'data viz',
        'data',
        'databases',
        'design',
        'development',
        'devops',
        'education',
        'finance',
        'integration',
        'optimization',
        'platform',
        'retail',
        'security',
        'services',
        'systems',
        'watson',
        'workforce'
      ],
      types: [
        'Algorithm Design',
        'Ask Analysis',
        'Automation Assessment',
        'Change Assessment',
        'Competitive Evaluation',
        'Data Analysis',
        'Data Cleaning',
        'Data Ingestion',
        'Data Modeling',
        'Data Quality',
        'Data Taxonomy',
        'Data Validation',
        'Data Visualization',
        'Ethnography Study',
        'Expert Review',
        'Group Workshop',
        'Hypothesis Testing',
        'Root Cause Analysis',
        'Shape of the Data',
        'Usability Study',
        'User Interviews',
        'UX/UI Design',
        'UX/UI Development'
      ],
      setup: [
        {
          task: 'folder',
          label: 'box folder',
          selected: false,
          result: null
        },
        {
          task: 'repo',
          label: 'github repo',
          selected: false,
          result: null
        },
        {
          task: 'comm',
          label: 'community',
          selected: false,
          result: null
        },
        {
          task: 'vaca',
          label: 'vacation planner',
          selected: false,
          result: null
        },
        {
          task: 'egroup',
          label: 'email group',
          selected: false,
          result: null
        },
        {
          task: 'bgroup',
          label: 'group',
          selected: false,
          result: null
        },
        {
          task: 'epics',
          label: 'milestone/MVP epics',
          selected: false,
          result: null
        },
        {
          task: 'slack',
          label: 'slack channel',
          selected: false,
          result: null
        }
      ]
    }
  },
  computed: mapGetters([
    'usertoken',
    'displayName',
    'groupTeam',
    'groupDash'
  ]),
  mounted() {
    var token = this.$cookie.get('token');
    this.today = this.$moment().format('YYYY-MM-DD');
    if ((this.$store.getters.groupTeam === 'team') && token) {
      axios.get('/api/open/projects').then((response) => {
        var set1 = response.data.active.concat(response.data.core);
        this.projectList = set1.concat(response.data.inactive);
      }).catch(function (error) {
        console.log(error);
      });
      axios.get('/api/open/oneproject/' + this.project).then((response) => {
        var b64content = decodeURIComponent(escape(atob(response.data.content)));
        this.item = JSON.parse(b64content);
        this.item.sha = response.data.sha;
        this.item.updates = this.item.updates.sort(function(a, b) {
          return new Date(b.date) - new Date(a.date);
        });
        this.setSetup();
      }).catch(function (error) {
        console.log(error);
      });
    } else {
      this.message = 'If you’re part of the team and cannot see the projects, contact Tim King to make sure you’re in the group. Alternately, this may be a server issue. In which case, hang tight, site admins are working on it.';
    }
  },
  methods: {
    saveUpdate: function() {
      if (this.update !== '') {
        var newUpdate = {
          'info': this.update,
          'date': this.today
        };
        this.item.updates.push(newUpdate);
      };
      this.item.updated = this.today;
      console.log(this.item);
      this.save.update = true;
      this.updateIndex();
      this.submitProject();
      this.update = '';
    },
    updateIndex: function() {
    },
    removeItem: function(set, val) {
      this.item[set].splice(val, 1);
      this.submitProject();
    },
    changeSection: function(val) {
      this.updateSection = false;
      this.standupSection = false;
      this.projectSection = false;
      this.infoSection = false;
      this.statusSection = false;
      this[val] = true;
    },
    redoArray: function(name) {
      if (this.item[name].length > 0) {
        var arr = [];
        for (var i = 0; i < this.item[name].length; i++) {
          if (this.item[name][i] !== '') {
            arr.push(this.item[name][i]);
          }
        }
        this.item[name] = arr;
      }
    },
    checkList: function(name, origin) {
      if (this[name].length > 0) {
        var warn = name + 'Warning';
        this[warn] = false;
        for (var i = 0; i < this[name].length; i++) {
          if (this[name][i].title && this[name][i].type && this[name][i].quarter && this[name][i].year) {
            this.item[origin].push(this[name][i]);
          } else if (!this[name][i].title && !this[name][i].type && !this[name][i].quarter && !this[name][i].year) {
            this[warn] = false;
          } else {
            this[warn] = true;
          }
        }
      }
    },
    submitProject: function() {
      // if (this.item.internal === false) { this.item.group = ''; };
      // if (this.item.child === false) { this.item.parent = ''; }
      // this.checkList('activityList', 'activities');
      // this.redoArray('accomplishments');
      // this.redoArray('upcoming');
      if (!this.item.project) {
        console.log('NO NAME');
      } else {
        if (!this.item.sha) {
          console.log('make new');
          this.makeProject();
        } else {
          console.log('check this');
          this.updateProject();
        }
      }
    },
    makeProject: function() {
      if (!this.item.id) {
        var id = this.item.project.toLowerCase();
        id = id.split(' ').join('-');
        // id = id.replace(/\s/g, '-');
        this.item.id = id;
      };
      var message = btoa(unescape(encodeURIComponent('first commit')));
      axios.put('/api/open/oneproject/new/' + this.item.id, {
        name: this.$cookie.get('displayName'),
        email: this.$cookie.get('email'),
        content: message
      }).then((response) => {
        this.item.sha = response.data.content.sha;
        console.log('created --> ', this.item.sha);
        console.log(this.item);
        this.updateProject();
      }).catch(function (error) {
        console.log(error);
      });
    },
    getUser: function(email, set, val) {
      this.found = false;
      for (var i = 0; i < this.item[set].length; i++) {
        if (this.item[set][i].email === email) {
          this.found = true;
          break;
        }
      };
      if (this.found === false) {
        axios.get('https://directory.ibm.com/BpHttpApisv3/wsapi?byInternetAddr=' + email).then((response) => {
          var piece = '';
          var obj = {};
          var data = response.data.split('\n');
          for (var i = 0; i < data.length; i++) {
            piece = data[i].split(': ');
            if (piece[0] === 'CNUM') {
              obj.cnum = piece[1];
            } else if (piece[0] === 'COUNTRY') {
              obj.country = piece[1];
            } else if (piece[0] === 'INTERNET') {
              obj.email = piece[1];
            } else if (piece[0] === 'EMPNUM') {
              obj.uid = piece[1];
            } else if (piece[0] === 'EMAILADDRESS') {
              var name1 = piece[1].split('/');
              obj.name = name1[0].substr(3);
            }
          }
          obj.setup = false;
          this.email = null;
          this.item[set].push(obj);
        }).catch(function (error) {
          console.log(error);
        });
      }
    },
    doTask: function(index) {
      console.log(this.item.setup[index].task, this.item.setup[index].selected);
      // if (this.item.setup[index].task === 'bgroup') {
      //   if (this.item.setup[index].selected === 1) {
      //     axios.post('https://directory.ibm.com/tools/groups/protect/groups.wss?selectOn=' + this.item.id + '&task=GoNew&gDesc=group for ' + this.item.project + ', generated by team&mode=members&vAcc=Everyone&Y=2020&M=12&D=31&API=1').then((response) => {
      //       // this.item.setup[index].result = response.data;
      //       this.item.setup[index].result = 'group created';
      //       this.item.setup[index].selected = 1;
      //     }).catch(function (error) {
      //       this.item.setup[index].result = 'error!';
      //       console.log(error);
      //     });
      //   } else {
      //     // https://directory.ibm.com/tools/groups/protect/groups.wss?gName=GROUP_NAME&task=GoDel&API=1
      //     this.item.setup[index].result = 'group deleted';
      //     this.item.setup[index].selected = 0;
      //   }
      // }
      // if (this.item.setup[index].task === 'repo') {
      //   if (this.item.setup[index].selected === 1) {
      //     this.item.setup[index].result = 'repo created';
      //     this.item.setup[index].selected = 1;
      //   } else {
      //     this.item.setup[index].result = 'repo deleted';
      //     this.item.setup[index].selected = 0;
      //   }
      // }
    },
    updateProject: function() {
      console.log('updating --> ', this.item.sha);
      var content = JSON.stringify(this.item);
      var b64content = btoa(unescape(encodeURIComponent(content)));
      axios.put('/api/open/oneproject/update/' + this.item.id, {
        content: b64content,
        name: this.$cookie.get('displayName'),
        email: this.$cookie.get('email'),
        sha: this.item.sha
      }).then((response) => {
        this.item.sha = response.data.content.sha;
        console.log('√ updated --> ', this.item.project, this.today);
        // this.checked = false;
      }).catch(function (error) {
        console.log(error);
      });
    },
    checkProjects: function(thing) {
      console.log('checking -->', thing);
      axios.get('/api/open/oneproject/check/' + thing).then((response) => {
        var allproj = response.data;
        var length = allproj.length;
        var projname = this.item.id + '.json';
        for (var j = 0; j < length; j++) {
          if (allproj[j].name === projname) {
            this.item.sha = allproj[j].sha;
            // break;
          }
        }
        console.log('√ checked --> ', this.item.sha);
      }).catch(function (error) {
        console.log('XXX checked');
        console.log(error);
      });
    },
    setSetup: function() {
      for (var k = 0; k < this.item.setup.length; k++) {
        if (this.item.setup[k].selected === true) {
          this.item.setup[k].selected = 0;
        } else if (this.item.setup[k].selected === false) {
          this.item.setup[k].selected = 0;
        }
      }
    },
    sortDate: function(arr) {
      return arr.slice().sort(function(a, b) {
        return b.date - a.date;
      });
    }
  }
}
</script>

<style scoped>
  li.user-list {
    padding: .25rem .5rem;
    font-size: 1rem;
  }
  li.user-list:hover {
    background-color: rgba(61,112,178,0.1);
  }
  .red-icon {
    color: #E0182D;
  }
  .blue-icon {
    color: #5aaafa;
  }
  .green-icon {
    color: #5aa700;
  }
  .yellow-icon {
    color: #efc100;
  }
  .adjustup {
    margin-top: -1rem;
  }

  .close-this {
    top: 0rem;
    position: relative;
    right: 0;
  }

  .bx--tabs {
    box-shadow: inset 0 -3px 0 #f0f4f4;
    margin-bottom: 2rem;
  }

  .bx--tabs__nav-item {
    padding: .5rem 0 .75rem;
  }

</style>

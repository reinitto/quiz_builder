(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,r){e.exports=r(50)},50:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),s=r(23),i=r.n(s),o=r(9),c=r.n(o),u=r(12),l=r(13),m=r(14),p=r(15),d=r(17),h=r(16),f=r(18),g=r(7),w=r(5),v=r(32),E=r.n(v),b=function(){return{type:"ADD_QUESTION",payload:{id:E()(),question:void 0,img_src:void 0,correct_answer:void 0,other_answers1:void 0,other_answers2:void 0,other_answers3:void 0,requiredFieldsEmpty:!0,error:void 0,created:new Date}}},y=function(e){var t=e.question,r=void 0===t?"Missing question":t,n=e.correct_answer,s=void 0===n?"Missing Correct answer":n,i=e.other_answers1,o=void 0===i?"Missing Other answer 1":i,c=e.other_answers2,u=void 0===c?"Missing Other answer 2":c,l=e.other_answers3,m=void 0===l?"Missing Other answer 3":l,p=e.index,d=e.img_src,h=void 0===d?void 0:d,f=function(t){return void 0===e[t]||""===e[t]?"text-danger":"text-success"};return a.a.createElement("div",null,a.a.createElement("div",{className:"text-left",style:{fontSize:"2rem"}},"#".concat(p+1," ")," Preview"),a.a.createElement("h3",{className:f("question")},""===r?"missing question":r),a.a.createElement("div",{className:"d-flex w-100"},h?a.a.createElement("div",{className:"w-50 mb-3 mr-3"}," ",a.a.createElement("img",{className:"img-fluid",src:h,alt:"fluid"})," "):null,a.a.createElement("ul",{className:"list-group"+(h?" w-50":" w-100")},a.a.createElement("li",{className:f("correct_answer")+" list-group-item list-group-item-action"},""===s?"missing correct answer":s),a.a.createElement("li",{className:f("other_answers1")+" list-group-item list-group-item-action"},""===o?"missing other answers1":o),a.a.createElement("li",{className:f("other_answers2")+" list-group-item list-group-item-action"},""===u?"missing other answers2":u),a.a.createElement("li",{className:f("other_answers3")+" list-group-item list-group-item-action"},""===m?"missing other answers3":m))))},N=function(e){function t(){var e,r;Object(m.a)(this,t);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(r=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={id:r.props.id,question:r.props.question,img_src:r.props.img_src,correct_answer:r.props.correct_answer,other_answers1:r.props.other_answers1,other_answers2:r.props.other_answers2,other_answers3:r.props.other_answers3,requiredFieldsEmpty:r.props.requiredFieldsEmpty,index:r.props.index,error:r.props.error,created:r.props.created},r.handleChange=function(e){r.setState(Object(l.a)({},e.target.name,e.target.value),function(){r.props.updateQuestion(r.state),r.requiredFieldsEmpty()?r.setState({requiredFieldsEmpty:!0},function(){return r.props.updateQuestion(r.state)}):r.setState({requiredFieldsEmpty:!1},function(){return r.props.updateQuestion(r.state)})})},r}return Object(f.a)(t,e),Object(p.a)(t,[{key:"requiredFieldsEmpty",value:function(){return void 0===this.state.question||""===this.state.question||void 0===this.state.correct_answer||""===this.state.correct_answer||void 0===this.state.other_answers1||""===this.state.other_answers1||void 0===this.state.other_answers2||""===this.state.other_answers2||void 0===this.state.other_answers3||""===this.state.other_answers3}},{key:"setErrorMessage",value:function(e){var t=this;this.setState({error:e}),setTimeout(function(){t.setState({error:null})},3e3)}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"form-group list-group-item"},a.a.createElement("div",{className:"input-group input-group-sm mb-3"},a.a.createElement("div",{className:"input-group-prepend"},a.a.createElement("span",{className:"input-group-text bg-info text-white"},"Question:")),a.a.createElement("input",{className:"form-control",type:"text",name:"question",value:this.state.question||"",onChange:this.handleChange,placeholder:"Question"})),a.a.createElement("div",{className:"input-group input-group-sm mb-3"},a.a.createElement("div",{className:"input-group-prepend"},a.a.createElement("span",{className:"input-group-text bg-info text-white"},"Image URL:")),a.a.createElement("input",{className:"form-control",type:"text",name:"img_src",onChange:this.handleChange,value:this.state.img_src||"",placeholder:"Image link (Optional)"})),a.a.createElement("div",{className:"input-group input-group-sm mb-3"},a.a.createElement("div",{className:"input-group-prepend"},a.a.createElement("span",{className:"input-group-text bg-info text-white"},"Correct answer:")),a.a.createElement("input",{className:"form-control",type:"text",name:"correct_answer",onChange:this.handleChange,value:this.state.correct_answer||"",placeholder:"Correct answer"})),a.a.createElement("div",{className:"input-group input-group-sm mb-3 "},a.a.createElement("div",{className:"input-group-prepend"},a.a.createElement("span",{className:"input-group-text bg-info text-white"},"Other answers:")),a.a.createElement("input",{className:"mr-2 form-control",type:"text",name:"other_answers1",onChange:this.handleChange,value:this.state.other_answers1||"",placeholder:"Other answer 1"}),a.a.createElement("input",{className:"mr-2 form-control",type:"text",name:"other_answers2",onChange:this.handleChange,value:this.state.other_answers2||"",placeholder:"Other answer 2"}),a.a.createElement("input",{className:"mr-2 form-control",type:"text",name:"other_answers3",onChange:this.handleChange,value:this.state.other_answers3||"",placeholder:"Other answer 3"})),a.a.createElement("div",null,this.state.error&&a.a.createElement("div",{className:"alert alert-warning",role:"alert"},this.state.error)),a.a.createElement(y,this.state),a.a.createElement("button",{className:"btn btn-danger mt-3",onClick:function(){return e.props.deleteQuestion(e.props.id)}},"Remove Question"))}}]),t}(n.Component),q=Object(g.b)(function(e){return{questions:e.quizBuilder.questions}},{addQuestion:b,updateQuestion:function(e){return{type:"UPDATE_QUESTION",payload:e}},deleteQuestion:function(e){return{type:"DELETE_QUESTION",payload:e}}})(N),_=r(48).knuthShuffle,O=function(e){function t(){var e,r;Object(m.a)(this,t);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(r=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={name:""},r.handleChange=function(e){r.setState(Object(l.a)({},e.target.name,e.target.value))},r.onSubmit=function(){var e=Object(u.a)(c.a.mark(function e(t){var n,a,s;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(r.props.questions.filter(function(e){return!0===e.requiredFieldsEmpty}).length>0)){e.next=6;break}r.setErrorMessage("Please fill out all questions"),e.next=12;break;case 6:return n=r.props.questions.map(function(e){var t=_([e.correct_answer,e.other_answers1,e.other_answers2,e.other_answers3].slice(0));return{correct_answer:e.correct_answer,created:e.created,error:e.error,id:e.id,img_src:e.img_src,index:e.index,answers:t,question:e.question}}),a={questions:n,name:r.state.name},e.next=10,r.props.submitQuiz(a);case 10:s=e.sent,B.push("/quiz/".concat(s));case 12:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),r}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){0===this.props.questions.length&&this.props.addQuestion()}},{key:"setErrorMessage",value:function(e){var t=this;this.setState({error:e}),setTimeout(function(){t.setState({error:null})},3e3)}},{key:"render",value:function(){var e=this.props.questions?this.props.questions.map(function(e,t){return a.a.createElement(a.a.Fragment,{key:t},a.a.createElement(q,Object.assign({key:e.id},e,{index:t})))}):null;return a.a.createElement("div",null,a.a.createElement("div",{className:"input-group input-group-lg mb-3"},a.a.createElement("div",{className:"input-group-prepend"},a.a.createElement("span",{className:"input-group-text bg-info text-white"},"Quiz Name:")),a.a.createElement("input",{className:"form-control",name:"name",value:this.state.name,onChange:this.handleChange,type:"text",placeholder:"Name your quiz"})),a.a.createElement("div",null,e),this.state.error&&a.a.createElement("div",{className:"alert alert-danger",role:"alert"},this.state.error),a.a.createElement("div",{className:"btn-group d-flex justify-content-center"},a.a.createElement("button",{className:"btn btn-success btn-sm btn-block",onClick:this.props.addQuestion}," ","Add question"," ")),a.a.createElement("input",{className:"btn btn-primary btn-block",type:"submit",value:"Create Quiz",onClick:this.onSubmit}))}}]),t}(n.Component),x=Object(g.b)(function(e){var t=e.quizBuilder;return{name:t.name,questions:t.questions}},{addQuestion:b,submitQuiz:function(e){return function(){var t=Object(u.a)(c.a.mark(function t(r){var n,a,s;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(w.a)({},e),t.next=3,fetch("/quiz",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 3:return a=t.sent,t.next=6,a.json();case 6:return void 0!==(s=t.sent)&&r({type:"ADD_QUIZ",payload:s}),t.abrupt("return",s);case 9:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(O),j=r(26),S=Object(g.b)(null,{updateAnswer:function(e,t){return{type:"UPDATE_ANSWER",payload:{question_id:t,answer:e}}}})(function(e){var t=e.showCorrectAnswer,r=e.question,n=e.answers,s=e.correct_answer,i=e.img_src,o=e.id,c=e.userAnswer,u=function(e){return t?e===s?"list-group-item list-group-item-action text-white bg-success":e===c&&e!==s?"list-group-item list-group-item-action text-white bg-danger":"list-group-item list-group-item-action":"list-group-item list-group-item-action"+(c===e?" text-white bg-secondary":"")};return a.a.createElement("div",null,a.a.createElement("h3",{className:"text-center"},r),a.a.createElement("div",{className:"d-flex"},i?a.a.createElement("div",{className:"w-50 mb-3 mr-3"}," ",a.a.createElement("img",{className:"img-fluid",src:i,alt:"fluid"})," "):null,a.a.createElement("ul",{className:"list-group text-center"+(i?" w-50":" w-100")},n.map(function(t,r){return a.a.createElement("li",{onClick:function(t){return function(t){e.updateAnswer(t.target.innerHTML,o)}(t)},key:r,className:u(t)},t)}))))}),Q=function(e){function t(){var e,r;Object(m.a)(this,t);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(r=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={score:null,submitted:!1},r}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.setQuiz(this.props.match.params.id)}},{key:"setErrorMessage",value:function(e){var t=this;this.setState({error:e}),setTimeout(function(){t.setState({error:null})},3e3)}},{key:"onSubmit",value:function(){0===this.props.questions.filter(function(e){return!e.userAnswer}).length?(this.props.showAnswers(),this.setState({score:this.calculateScore(this.props.questions),submitted:!0})):this.setErrorMessage("Please answer all questions")}},{key:"calculateScore",value:function(e){return e.reduce(function(e,t){return t.correct_answer===t.userAnswer?++e:e},0)}},{key:"render",value:function(){var e=this,t=this.props.questions&&this.props.questions.length>0&&this.props.questions.map(function(e,t){return a.a.createElement(S,Object.assign({key:t},e))});return a.a.createElement(n.Fragment,null,a.a.createElement("div",null,a.a.createElement(j.a,{className:" p-3 ml-3 mt-1 btn btn-primary btn-floating",to:"/"}," ","Build Your Own Quiz"," ")),a.a.createElement("div",{className:"container"},a.a.createElement("h1",{className:"text-center"},this.props.name),t,this.state.error&&a.a.createElement("div",{className:"alert alert-danger mt-3",role:"alert"},this.state.error),this.state.submitted&&a.a.createElement("div",{className:"alert alert-success mt-3",role:"alert"},"You scored  ".concat(this.state.score," / ").concat(this.props.questions.length," questions")),a.a.createElement("div",{className:"d-flex"},a.a.createElement("div",null,a.a.createElement("div",{className:"input-group-prepend"},a.a.createElement("span",{className:"input-group-text"},"Enter your name:"),a.a.createElement("input",{className:"form-control",type:"text"}))),a.a.createElement("button",{disabled:this.state.submitted,onClick:function(){return e.onSubmit()},className:"btn btn-success mx-auto p-3 m-3 w-25"},"Submit"))))}}]),t}(a.a.Component),k=Object(g.b)(function(e){var t=e.answerQuiz;return{name:t.name,questions:t.questions,showAnswers:t.showAnswers}},{setQuiz:function(e){return function(){var t=Object(u.a)(c.a.mark(function t(r){var n,a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/getquiz/".concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,r({type:"SET_QUIZ",payload:a});case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},showAnswers:function(){return{type:"SHOW_ANSWERS"}}})(Q),C=r(8),A=r(11),T=r(34),z=r(35),D=r(20),U={name:"",questions:[]},M={name:"",questions:[],showAnswers:!1},I=Object(A.combineReducers)({quizBuilder:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){default:return e;case"ADD_QUIZ":return Object(w.a)({},e);case"ADD_QUESTION":if(0===e.questions.filter(function(e){return e.id===t.payload.id}).length){var r=[].concat(Object(D.a)(e.questions.filter(function(e){return e.id!==t.payload.id})),[t.payload]).sort(function(e,t){return e.created>t.created});return Object(w.a)({},e,{questions:r})}return e;case"UPDATE_QUESTION":var n=[].concat(Object(D.a)(e.questions.filter(function(e){return e.id!==t.payload.id})),[t.payload]).sort(function(e,t){return e.created-t.created});return Object(w.a)({},e,{questions:n});case"DELETE_QUESTION":var a=Object(D.a)(e.questions.filter(function(e){return e.id!==t.payload})).sort(function(e,t){return e.created-t.created});return Object(w.a)({},e,{questions:a})}},answerQuiz:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){default:return e;case"SHOW_ANSWERS":var r=e.questions.map(function(e){return Object(w.a)({},e,{showCorrectAnswer:!0})});return Object(w.a)({},e,{questions:r});case"SET_QUIZ":return Object(w.a)({},t.payload);case"UPDATE_ANSWER":var n=e.questions.filter(function(e){return e.id===t.payload.question_id})[0];n.userAnswer=t.payload.answer;var a=[].concat(Object(D.a)(e.questions.filter(function(e){return e.id!==t.payload.question_id})),[n]).sort(function(e,t){return e.index-t.index});return Object(w.a)({},e,{questions:a})}}}),F=[z.a],P=Object(A.createStore)(I,{},Object(T.composeWithDevTools)(A.applyMiddleware.apply(void 0,F))),W=r(2),B=Object(W.a)();function R(){return a.a.createElement("div",{className:"text-center container "},a.a.createElement("h1",{className:"text-center"},"Welcome to QuizBuilder"),a.a.createElement("h2",{className:"text-center"},"Build your own quiz and share with friends"),a.a.createElement(x,null))}var L=function(){return a.a.createElement(g.a,{store:P},a.a.createElement(C.b,{history:B},a.a.createElement(C.c,null,a.a.createElement(C.a,{path:"/",exact:!0,component:R}),a.a.createElement(C.a,{path:"/quiz/:id",component:k}))))};i.a.render(a.a.createElement(L,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.6d260516.chunk.js.map
(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{53:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),c=n(27),a=n.n(c),o=n(7),i=n.n(o),u=n(8),h=n(10),l=n(11),j=n(15),g=n(14),f=n(12),d=n.n(f),m=n(59),b=n(56),p=n(60),O=n(57),w=n(1),x=function(e){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("h1",{className:"text-muted",children:"Quick Quiz!"}),Object(w.jsxs)("h2",{children:["High Score: ",e.highScore]}),Object(w.jsx)(O.a,{className:"text-center",children:function(){if(e.categories)return e.categories.map((function(t){var n=t.name,r=t.id;return Object(w.jsx)(b.a,{lg:"4",className:"mt-3",children:Object(w.jsx)(p.a,{variant:"success",className:"w-75",onClick:function(){return e.onCategoryChosen(r)},children:n})},r)}))}()})]})},v=n(17),y=n(58),S=n(61),Q=d.a.create({baseURL:"https://opentdb.com/api.php?amount=10",params:{category:20}}),C=(n(53),n(28)),k=function(e){var t=Object(r.useState)(20),n=Object(C.a)(t,2),s=n[0],c=n[1];function a(){0===s?(e.onTimeOut(),c(20)):c((function(e){return e-1}))}return Object(r.useEffect)((function(){var e=setTimeout(a,1e3);return function(){clearTimeout(e)}})),Object(w.jsxs)("h1",{className:"text-muted",children:["Time: ",s]})},N=function(e){Object(j.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={answers:[],questions:[],correctAnswer:[],currentQuestion:0,showAnswers:!1,score:0,timerKey:0,userChoice:5},e.fetchQuestions=Object(u.a)(i.a.mark((function t(){var n,r,s,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Q.get("",{params:{category:e.props.category}});case 3:n=t.sent,r=Object(v.a)(n.data.results),s=[],c=[],r.forEach((function(t,n){var r=Math.floor(4*Math.random());s[n]=t.question,c[n]=t.incorrect_answers,c[n].splice(r,0,t.correct_answer),e.setState({correctAnswer:[].concat(Object(v.a)(e.state.correctAnswer),[c[n].indexOf(t.correct_answer)])})})),e.setState({questions:s,answers:c}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])}))),e.onAnswer=function(t){e.setState({showAnswers:!0,userChoice:Number(t.target.value)}),Number(t.target.value)===e.state.correctAnswer[e.state.currentQuestion]&&e.setState({score:e.state.score+10})},e.onTimeOut=function(){e.setState({showAnswers:!1,currentQuestion:e.state.currentQuestion+1})},e.onNext=function(){e.setState({showAnswers:!1,currentQuestion:e.state.currentQuestion+1,timerKey:e.state.timerKey+1})},e.renderAnswers=function(t){return e.state.answers[t].map((function(n,r){var s="w-50 mt-2 py-3 text-dark";return e.state.showAnswers&&(e.state.correctAnswer[t]===r&&(s+=" correct-answer"),e.state.userChoice===r&&(s+=" user-choice"),s+=" show-answers"),Object(w.jsx)(p.a,{value:r,variant:"info",className:s,dangerouslySetInnerHTML:{__html:n},onClick:e.onAnswer},n)}))},e.renderQuestions=function(){if(0===e.state.questions.length)return Object(w.jsx)("div",{children:Object(w.jsx)(y.a,{color:"primary",children:" "})});if(e.state.currentQuestion<e.state.questions.length){var t=100*e.state.currentQuestion/e.state.questions.length;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{className:"w-100 mt-3",children:Object(w.jsx)(S.a,{now:t,animated:!0,variant:"warning"})}),Object(w.jsxs)("h1",{children:["Score: ",e.state.score]}),Object(w.jsx)("h1",{className:"text-muted text-center",dangerouslySetInnerHTML:{__html:e.state.questions[e.state.currentQuestion]}}),e.renderAnswers(e.state.currentQuestion),Object(w.jsxs)(O.a,{className:"w-50 mt-3 text-center align-items-center",children:[Object(w.jsx)(b.a,{lg:"6",children:Object(w.jsx)(k,{onTimeOut:e.onTimeOut},e.state.timerKey)}),Object(w.jsx)(b.a,{lg:"6",children:Object(w.jsx)(p.a,{className:"px-5",onClick:e.onNext,children:"Next"})})]})]})}},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.fetchQuestions();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("h1",{children:["High Score: ",this.props.highScore]}),this.renderQuestions()]})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.currentQuestion>=t.questions.length&&0!==t.questions.length?(t.score>e.highScore&&e.onHigherScore(t.score),e.onEndOfQuestions(),{score:0}):null}}]),n}(s.a.Component),A=function(e){Object(j.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={showQuestions:!1,highScore:0,questionSet:0,categories:[],chosenCategory:0,congratulations:""},e.onCategoryChosen=function(t){e.setState({showQuestions:!0,chosenCategory:t,congratulations:""})},e.onEndOfQuestions=function(){e.setState({showQuestions:!1})},e.onHigherScore=function(t){t>e.state.highScore&&e.setState({highScore:t,congratulations:"You created a new high score!"})},e}return Object(l.a)(n,[{key:"renderQuestions",value:function(){var e=this;return this.state.showQuestions?Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(N,{category:this.state.chosenCategory,onEndOfQuestions:this.onEndOfQuestions,highScore:this.state.highScore,onHigherScore:function(t){return e.onHigherScore(t)}},this.state.questionSet)}):Object(w.jsx)(x,{onCategoryChosen:this.onCategoryChosen,categories:this.state.categories,highScore:this.state.highScore})}},{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://opentdb.com/api_category.php");case 2:t=e.sent,this.setState({categories:t.data.trivia_categories});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderCongrats",value:function(){return""===this.state.congratulations?"":Object(w.jsx)("h1",{className:"bg-info p-4 mb-2 text-white",style:{borderRadius:"50px"},children:this.state.congratulations})}},{key:"render",value:function(){return Object(w.jsxs)(m.a,{className:"align-items-center d-flex flex-column landing justify-content-center",style:{height:"100vh"},children:[this.renderCongrats(),this.renderQuestions()]})}}]),n}(s.a.Component);n(54);a.a.render(Object(w.jsx)(A,{}),document.querySelector("#root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.ec3329e7.chunk.js.map
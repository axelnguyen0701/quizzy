(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{50:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),a=n(25),c=n.n(a),o=n(7),i=n.n(o),u=n(8),h=n(9),l=n(10),g=n(13),j=n(12),d=n(11),f=n.n(d),p=n(56),w=n(53),b=n(57),m=n(54),x=n(1),O=function(e){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{className:"text-muted",children:"Quick Quiz!"}),Object(x.jsxs)("h2",{children:["High Score: ",e.highScore]}),Object(x.jsx)(m.a,{className:"text-center",children:function(){if(e.categories)return e.categories.map((function(t){var n=t.name,r=t.id;return Object(x.jsx)(w.a,{lg:"4",className:"mt-3",children:Object(x.jsx)(b.a,{variant:"success",className:"w-75",onClick:function(){return e.onCategoryChosen(r)},children:n})},r)}))}()})]})},v=n(15),y=n(55),S=n(58),Q=f.a.create({baseURL:"https://opentdb.com/api.php?amount=10",params:{category:20}}),C=(n(50),function(e){Object(g.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={answers:[],questions:[],correctAnswer:[],currentQuestion:0,showAnswers:!1,score:0},e.fetchQuestions=Object(u.a)(i.a.mark((function t(){var n,r,s,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Q.get("",{params:{category:e.props.category}});case 3:n=t.sent,r=Object(v.a)(n.data.results),s=[],a=[],r.forEach((function(t,n){var r=Math.floor(4*Math.random());s[n]=t.question,a[n]=t.incorrect_answers,a[n].splice(r,0,t.correct_answer),e.setState({correctAnswer:[].concat(Object(v.a)(e.state.correctAnswer),[a[n].indexOf(t.correct_answer)])})})),e.setState({questions:s,answers:a}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])}))),e.onAnswer=function(t){e.setState({showAnswers:!0}),Number(t.target.value)===e.state.correctAnswer[e.state.currentQuestion]&&e.setState({score:e.state.score+10})},e.onNext=function(){e.setState({showAnswers:!1,currentQuestion:e.state.currentQuestion+1})},e.renderAnswers=function(t){return e.state.answers[t].map((function(n,r){var s="w-50 mt-2 py-3 text-white\n      ".concat(e.state.showAnswers?"show-answers":"","\n      ").concat(e.state.correctAnswer[t]===r?"correct-answer":"");return Object(x.jsx)(b.a,{value:r,variant:"info",className:s,dangerouslySetInnerHTML:{__html:n},onClick:e.onAnswer},n)}))},e.renderQuestions=function(){if(0===e.state.questions.length)return Object(x.jsx)("div",{children:Object(x.jsx)(y.a,{color:"primary",children:" "})});if(e.state.currentQuestion<e.state.questions.length){var t=100*e.state.currentQuestion/e.state.questions.length;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"w-100 mt-3",children:Object(x.jsx)(S.a,{now:t,animated:!0,variant:"warning"})}),Object(x.jsxs)("h1",{children:["Score: ",e.state.score]}),Object(x.jsx)("h1",{className:"text-muted text-center",dangerouslySetInnerHTML:{__html:e.state.questions[e.state.currentQuestion]}}),e.renderAnswers(e.state.currentQuestion),Object(x.jsx)(b.a,{className:"mt-5 px-5",onClick:e.onNext,children:"Next"})]})}},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.fetchQuestions();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("h1",{children:["High Score: ",this.props.highScore]}),this.renderQuestions()]})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.currentQuestion>=t.questions.length&&0!==t.questions.length?(t.score>e.highScore&&e.onHigherScore(t.score),e.onEndOfQuestions(),{score:0}):null}}]),n}(s.a.Component)),k=function(e){Object(g.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={showQuestions:!1,highScore:0,questionSet:0,categories:[],chosenCategory:0,congratulations:""},e.onCategoryChosen=function(t){e.setState({showQuestions:!0,chosenCategory:t,congratulations:""})},e.onEndOfQuestions=function(){e.setState({showQuestions:!1})},e.onHigherScore=function(t){t>e.state.highScore&&e.setState({highScore:t,congratulations:"You created a new high score!"})},e}return Object(l.a)(n,[{key:"renderQuestions",value:function(){var e=this;return this.state.showQuestions?Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(C,{category:this.state.chosenCategory,onEndOfQuestions:this.onEndOfQuestions,highScore:this.state.highScore,onHigherScore:function(t){return e.onHigherScore(t)}},this.state.questionSet)}):Object(x.jsx)(O,{onCategoryChosen:this.onCategoryChosen,categories:this.state.categories,highScore:this.state.highScore})}},{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://opentdb.com/api_category.php");case 2:t=e.sent,this.setState({categories:t.data.trivia_categories});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderCongrats",value:function(){return""===this.state.congratulations?"":Object(x.jsx)("h1",{className:"bg-info p-4 mb-2 text-white",style:{borderRadius:"50px"},children:this.state.congratulations})}},{key:"render",value:function(){return Object(x.jsxs)(p.a,{className:"align-items-center d-flex flex-column landing justify-content-center",style:{height:"100vh"},children:[this.renderCongrats(),this.renderQuestions()]})}}]),n}(s.a.Component);n(51);c.a.render(Object(x.jsx)(k,{}),document.querySelector("#root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.db6efac6.chunk.js.map
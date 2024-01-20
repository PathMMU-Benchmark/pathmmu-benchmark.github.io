(function(){"use strict";var t={7060:function(t,e,a){var s=a(4720),i=a.n(s),n=a(144),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},l=[],r=a(1001),c={},d=(0,r.Z)(c,o,l,!1,null,null,null),u=d.exports,p=a(8345),v=function(){var t=this,e=t._self._c;return e("div",{staticClass:"HomePage h-full w-full text-lg"},[e("TopMenu",{ref:"TopMenu"}),e("HomePage"),e("ExperimentsPage"),e("ThirdPart"),e("FooterPart")],1)},h=[],f=function(){var t=this;t._self._c;return t._m(0)},m=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"TopMenu h-full text-center flex justify-center items-center pt-40 flex-col"},[e("div",{staticClass:"Title"},[t._v(" PathMMU: A Massive Multimodal Expert-Level Benchmark "),e("br"),e("div",{staticClass:"pt-2"}),t._v(" for Understanding and Reasoning in Pathology ")]),e("div",{staticClass:"pt-5"},[t._v(" A large-scale, high-quality, comprehensive and specialized database for pathology ")]),e("div",{staticClass:"author pt-5"},[t._v(" Yuxuan Sun,Hao Wu,Chenglu Zhu, "),e("br"),t._v(" Sunyi Zheng,Qizi Chen,Kai Zhang,Yunlong Zhang,XXXX,Mengyue Zheng, "),e("br"),t._v(" Jingxiong Li, Xinheng Lyu, Tao Lin,Lin Yang ")]),e("div",{staticClass:"author pt-10"},[t._v(" Westlake University, Macau University of Science and Technology, Jiangnan University,"),e("br"),t._v(" The Ohio State University, Zhejiang University, ")]),e("div",{staticClass:"pt-5"},[e("div",[t._v("*Core Contributors")]),e("div",[t._v(" †Corresponding to: "),e("a",{staticClass:"text-blue-400",attrs:{href:""}},[t._v("xiangyue.work@gmail.com")]),t._v(", "),e("a",{staticClass:"text-blue-400",attrs:{href:""}},[t._v("su.809@osu.edu, wenhuchen@uwaterloo.ca")])])]),e("div",{staticClass:"btn_list pt-5 flex items-center text-base pb-8"},[e("div",{staticClass:"rounded-3xl text-white pl-3 pr-3 pt-2 pb-2",staticStyle:{background:"#363636"}},[t._v(" arXiv ")]),e("div",{staticClass:"rounded-3xl text-white pl-3 pr-3 pt-2 pb-2",staticStyle:{background:"#363636"}},[t._v(" HF Paper ")]),e("div",{staticClass:"rounded-3xl text-white pl-3 pr-3 pt-2 pb-2",staticStyle:{background:"#363636"}},[t._v(" Dataset ")]),e("div",{staticClass:"rounded-3xl text-white pl-3 pr-3 pt-2 pb-2",staticStyle:{background:"#363636"}},[t._v(" Code ")]),e("div",{staticClass:"rounded-3xl text-white pl-3 pr-3 pt-2 pb-2",staticStyle:{background:"#363636"}},[t._v(" Leaderboard ")]),e("div",{staticClass:"rounded-3xl text-white pl-3 pr-3 pt-2 pb-2",staticStyle:{background:"#363636"}},[t._v(" EvalAI ")]),e("div",{staticClass:"rounded-3xl text-white pl-3 pr-3 pt-2 pb-2",staticStyle:{background:"#363636"}},[t._v(" Twitter ")]),e("div",{staticClass:"rounded-3xl text-white pl-3 pr-3 pt-2 pb-2",staticStyle:{background:"#363636"}},[t._v(" Examples ")])]),e("div",{staticClass:"overall w-7/12 pt-5"},[e("img",{attrs:{src:"resources/img/figures/overall.png",alt:""}}),e("div",{staticClass:"pt-10 pb-3 text-justify"},[t._v(" The emergence of large multimodal models has unlocked remarkable potential in AI, particularly in pathology. However, the lack of specialized, high-quality benchmark impeded their development and precise evaluation. To address this, we introduce PathMMU, the largest and highest-quality expert-validated pathology benchmark for LMMs. It comprises 33,573 multimodal multi-choice questions and 21,599 images from various sources, and an explanation for the correct answer accompanies each question. The construction of PathMMU capitalizes on the robust capabilities of GPT-4V, utilizing approximately 30,000 gathered image-caption pairs to generate Q&As. Significantly, to maximize PathMMU's authority, we invite six pathologists to scrutinize each question under strict standards in PathMMU's validation and test sets, while simultaneously setting an expert-level performance benchmark for PathMMU. We conduct extensive evaluations, including zero-shot assessments of 14 open-sourced and 3 closed-sourced LMMs and their robustness to image corruption. We also fine-tune representative LMMs to assess their adaptability to PathMMU. The empirical findings indicate that advanced LMMs struggle with the challenging PathMMU benchmark, with the top-performing LMM, GPT-4V, achieving only a 51.7% zero-shot performance, significantly lower than the 71.4% demonstrated by human pathologists. After fine-tuning, even open-sourced LMMs can surpass GPT-4V with a performance of over 60%, but still fall short of the expertise shown by pathologists. ")])]),e("div",{staticClass:"Intro pt-10 w-7/12"},[e("div",{staticClass:"head font-bold pb-5"},[t._v("Introduction")]),e("div",{staticClass:"content text-justify pb-10"},[t._v(" The Pathology Multimodal Multitask Unsupervised Benchmark (MMMU) dataset is a large-scale, multimodal, multitask dataset for understanding and reasoning in pathology. The dataset is designed to be comprehensive, diverse, and challenging, and is intended to serve as a benchmark for research in multimodal pathology understanding and reasoning. ")])])])}],b={data(){return{publicUrl:"./public/",topMenu:[{content:"HOME",id:0},{content:"ABOUT",id:2},{content:"CONCACT",id:3}]}}},g=b,w=(0,r.Z)(g,f,m,!1,null,"256e8e8f",null),_=w.exports,C=function(){var t=this;t._self._c;return t._m(0)},x=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"HomePage w-full h-full"},[e("div",{staticClass:"bg w-full h-20 flex justify-center items-center font-bold text-4xl"},[t._v(" PATHMMU BENCHMARK ")]),e("div",{staticClass:"PageContent flex justify-center items-center flex-col"},[e("div",{staticClass:"headtitle text-3xl font-bold p-5"},[t._v("Overview")]),e("div",{staticClass:"overview_content w-7/12"},[e("div",{staticClass:"text-justify"},[t._v(" We introduce the Massive Multi-discipline Multimodal Understanding and Reasoning (MMMU) benchmark, a novel benchmark meticulously curated to assess the expert-level multimodal understanding capability of foundation models across a broad scope of tasks. Covering subjects across disciplines, including Art, Business, Health & Medicine, Science, Humanities & Social Science, and Tech & Engineering, and over subfields. The detailed subject coverage and statistics are detailed in the figure. The questions in our benchmark were manually collected by a team of college students (including coauthors) from various disciplines and subjects, drawing from online sources, textbooks, and lecture materials. ")]),e("img",{staticClass:"pt-10 pb-10",attrs:{src:"resources/img/figures/overall.png",alt:""}}),e("div")])]),e("div",{staticClass:"w-7/12 pt-10 pb-5",staticStyle:{margin:"0 auto"}},[e("div",{staticClass:"FeatureTitle"},[t._v("Key Features")]),e("div",{staticClass:"FeatureContent grid grid-cols-3 gap-3"},[e("div",[e("div",{staticClass:"SubTitle"},[t._v("Large-Scale")]),e("div",{staticClass:"subContent text-left"},[t._v(" The dataset contains more than 10,000 video segments of real-world moving objects and over 1.5 million manually labeled bounding boxes ")])]),e("div",[e("div",{staticClass:"SubTitle"},[t._v("Large-Scale")]),e("div",{staticClass:"subContent text-left"},[t._v(" The dataset contains more than 10,000 video segments of real-world moving objects and over 1.5 million manually labeled bounding boxes ")])]),e("div",[e("div",{staticClass:"SubTitle"},[t._v("Large-Scale")]),e("div",{staticClass:"subContent text-left"},[t._v(" The dataset contains more than 10,000 video segments of real-world moving objects and over 1.5 million manually labeled bounding boxes ")])]),e("div",[e("div",{staticClass:"SubTitle"},[t._v("Large-Scale")]),e("div",{staticClass:"subContent text-left"},[t._v(" The dataset contains more than 10,000 video segments of real-world moving objects and over 1.5 million manually labeled bounding boxes ")])]),e("div",[e("div",{staticClass:"SubTitle"},[t._v("Large-Scale")]),e("div",{staticClass:"subContent text-left"},[t._v(" The dataset contains more than 10,000 video segments of real-world moving objects and over 1.5 million manually labeled bounding boxes ")])]),e("div",[e("div",{staticClass:"SubTitle"},[t._v("Large-Scale")]),e("div",{staticClass:"subContent text-left"},[t._v(" The dataset contains more than 10,000 video segments of real-world moving objects and over 1.5 million manually labeled bounding boxes ")])])])]),e("div",{staticClass:"w-7/12 pt-10 pb-5",staticStyle:{margin:"0 auto"}},[e("div",{staticClass:"font-bold text-red-500 text-2xl pb-3"},[t._v("Latest News")]),e("ul",[e("li",[t._v(" [2023.09.12] The SOTVerse paper has been accepted by International Journal of Computer Vision (IJCV)! ")]),e("li",[t._v(" [2022.04.18] We have released SOTVerse, a user-defined task space of single object tracking, and the related paper has been released on arXiv. ")]),e("li",[t._v(' [2022.03.29] The IEEE TPAMI paper is selected as "ESI Hot Papers"! ')]),e("li",[t._v(' [2021.09.14] The IEEE TPAMI paper is selected as "ESI Highly Cited Papers"! ')])])]),e("div",{staticClass:"w-7/12 pt-10 pb-5",staticStyle:{margin:"0 auto"}},[e("div",{staticClass:"text-2xl pb-3"},[t._v("Publications")]),e("div",{staticClass:"flex items-center"},[e("img",{attrs:{src:"resources/img/figures/publication.png",alt:""}}),e("div",{staticClass:"pl-5"},[e("div",{staticClass:"intro"},[t._v(" GOT-10k: A Large High-Diversity Benchmark for Generic Object Tracking in the Wild. L. Huang*, X. Zhao*, and K. Huang. ( *Equal contribution) IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI). ")]),e("div",{staticClass:"link"},[e("a",{staticClass:"text-blue-600",attrs:{href:""}},[t._v("[PDF] ")]),e("a",{staticClass:"text-blue-600",attrs:{href:""}},[t._v("[ArXiv]")]),e("a",{staticClass:"text-blue-600",attrs:{href:""}},[t._v("[BibTex]")])])])]),e("div",{staticClass:"text-gray-500 pt-5"},[e("i",[t._v("Please cite this paper if GOT-10k helps your research.")])])]),e("div",{staticClass:"PageContent flex justify-center items-center flex-col"},[e("div",{staticClass:"headtitle text-3xl font-bold p-5"},[t._v(" Comparisons with Existing Benchmarks ")]),e("div",{staticClass:"overview_content w-7/12"},[e("div",{staticClass:"text-justify"},[t._v(" We introduce the Massive Multi-discipline Multimodal Understanding and Reasoning (MMMU) benchmark, a novel benchmark meticulously curated to assess the expert-level multimodal understanding capability of foundation models across a broad scope of tasks. Covering subjects across disciplines, including Art, Business, Health & Medicine, Science, Humanities & Social Science, and Tech & Engineering, and over subfields. The detailed subject coverage and statistics are detailed in the figure. The questions in our benchmark were manually collected by a team of college students (including coauthors) from various disciplines and subjects, drawing from online sources, textbooks, and lecture materials. ")]),e("img",{staticClass:"pt-10 pb-2",attrs:{src:"resources/img/figures/data_comparison.png",alt:""}}),e("div",{staticClass:"pb-10 pt-5"},[t._v(" Sampled MMMU examples from each discipline. The questions and images need expert-level knowledge to understand and reason. ")])])])])}],y={},M=y,k=(0,r.Z)(M,C,x,!1,null,"93a843d4",null),T=k.exports,P=function(){var t=this,e=t._self._c;return e("div",{staticClass:"Experiments w-full h-full"},[e("div",{staticClass:"bg w-full h-20 flex justify-center items-center font-bold text-4xl"},[t._v(" Experiment Results ")]),t._m(0),e("div",{staticClass:"w-full h-full flex justify-center items-center"},[e("div",{staticClass:"main",staticStyle:{width:"95rem"}},[e("div",{staticClass:"table"},[e("ul",{staticStyle:{"padding-top":"20px"}},[e("li",{staticClass:"one"}),t._l(t.titles,(function(a,s){return e("li",{key:s,staticClass:"two"},[0==s?e("div",[e("P",[t._v("Validation")]),e("P",[t._v("Overall")])],1):e("div",[e("p",[t._v(t._s(a))])])])}))],2),e("ul",{staticStyle:{"padding-bottom":"10px"}},[e("li",{staticClass:"one"}),t._l(t.titles,(function(a,s){return e("li",{key:s,staticClass:"two"},[e("div",0==s?[t._m(1,!0)]:[e("div",{staticClass:"name"},[e("div",{staticClass:"details"},[e("p",[t._v("Tiny")]),e("p",{staticClass:"text-xs",staticStyle:{"padding-top":"5px"}},[t._v(" ( "+t._s(t.details[s].t1)+" ) ")])]),e("div",{staticClass:"details"},[e("p",[t._v("All")]),e("p",{staticClass:"text-xs",staticStyle:{"padding-top":"5px"}},[t._v(" ( "+t._s(t.details[s].t2)+" ) ")])])])])])}))],2),e("div",{staticClass:"table-2"},t._l(t.table1,(function(a){return e("ul",{key:a.prop,staticClass:"row-1"},[e("li",{staticClass:"one"},[e("a",{attrs:{href:a.link,target:"_blank"}},[t._v(t._s(a.prop))])]),t._l(a.data,(function(s,i){return e("li",{key:i,staticClass:"two"},[e("div",0==i?[e("div",{staticClass:"details"},[e("p",[t._v(t._s(a.sorce))])])]:[e("div",{staticClass:"name"},[e("div",{staticClass:"details"},[e("p",[t._v(t._s(a.data[i].t1))])]),e("div",{staticClass:"details"},[e("p",[t._v(t._s(a.data[i].t2))])])])])])}))],2)})),0),e("div",{staticClass:"title-2"},[t._v(" Large Multimodal Models (LMMs): Text + Image as Input ")]),e("div",{staticClass:"table-2"},t._l(t.table2,(function(a){return e("ul",{key:a.prop,staticClass:"row-1"},[e("li",{staticClass:"one"},[e("a",{attrs:{href:a.link,target:"_blank"}},[t._v(t._s(a.prop))])]),t._l(a.data,(function(s,i){return e("li",{key:i,staticClass:"two"},[e("div",0==i?[e("div",{staticClass:"details"},[e("p",[t._v(t._s(a.sorce))])])]:[e("div",{staticClass:"name"},[e("div",{staticClass:"details"},[e("p",[t._v(t._s(a.data[i].t1))])]),e("div",{staticClass:"details"},[e("p",[t._v(t._s(a.data[i].t2))])])])])])}))],2)})),0),e("div",{staticClass:"title-2"},[t._v(" Large Language Models (LLMs): Only Text as Input ")]),e("div",{staticClass:"table-2"},t._l(t.table3,(function(a){return e("ul",{key:a.prop,staticClass:"row-1"},[e("li",{staticClass:"one"},[e("a",{attrs:{href:a.link,target:"_blank"}},[t._v(t._s(a.prop))])]),t._l(a.data,(function(s,i){return e("li",{key:i,staticClass:"two"},[e("div",0==i?[e("div",{staticClass:"details"},[e("p",[t._v(t._s(a.sorce))])])]:[e("div",{staticClass:"name"},[e("div",{staticClass:"details"},[e("p",[t._v(t._s(a.data[i].t1))])]),e("div",{staticClass:"details"},[e("p",[t._v(t._s(a.data[i].t2))])])])])])}))],2)})),0)])])])])},S=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-center items-center flex-col"},[e("div",{staticClass:"ExTitle text-3xl font-bold p-5 pt-10"},[t._v("Leaderboard")]),e("div",{staticClass:"leadContent w-7/12 pb-10 text-justify"},[t._v(" We evaluate various models including LLMs and LMMs. In each type, we consider both closed- and open-source models. Our evaluation is conducted under a zero-shot setting to assess the capability of models to generate accurate answers without fine-tuning or few-shot demonstrations on our benchmark. For all models, we use the default prompt provided by each model for multi-choice or open QA, if available. If models do not provide prompts for task types in MMMU, we conduct prompt engineering on the validation set and use the most effective prompt for the later zero-shot experiment. ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"details"},[e("p",[t._v("-")]),e("p",{staticClass:"text-xs",staticStyle:{"padding-top":"5px"}},[t._v("( 666 )")])])}],L={data(){return{headers:["Validation Overall","Test Overall","WebPathology","Twitter","Youtube","Book"],tableData:[["Random Choice",25.1,25.8,25.2,24.7,25.9,25.5],["Frequent Choice",29.1,27.5,25.8,27.7,30.2,28.4]],titles:["Validation","Test Overall","WebPathology","Twitter","Youtube","Book"],details:[{t1:3445,t2:4667},{t1:3445,t2:4667},{t1:3445,t2:4667},{t1:3445,t2:4667},{t1:3445,t2:4667},{t1:3445,t2:4667}],table1:[{prop:"Random Choice",sorce:"34.1",link:"https://www.baidu.com/",data:[{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4}]},{prop:"Frequent Choice",sorce:"34.1",link:"https://www.baidu.com/",data:[{t1:25.1,t2:29.4},{t1:22.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4}]},{prop:"Expert performance",link:"https://www.baidu.com/",sorce:"34.1",data:[{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:23.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4}]}],table2:[{prop:"OpenFlamingo2-9B",link:"https://www.baidu.com/",sorce:"34.1",data:[{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4}]},{prop:"Kosmos2",link:"https://www.baidu.com/",sorce:"34.1",data:[{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4}]},{prop:"Fuyu-8B",link:"https://www.baidu.com/",sorce:"34.1",data:[{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4}]},{prop:"MiniGPT4-Vicuna-13B",link:"https://www.baidu.com/",sorce:"34.1",data:[{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4}]},{prop:"LLaMA-Adapter2-7B",link:"https://www.baidu.com/",sorce:"34.1",data:[{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4}]},{prop:"Otter",sorce:"34.1",link:"https://www.baidu.com/",data:[{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4}]},{prop:"CogVLM",sorce:"34.1",link:"https://www.baidu.com/",data:[{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4}]},{prop:"BLIP-2 FLAN-T5-XL",sorce:"34.1",link:"https://www.baidu.com/",data:[{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4}]},{prop:"BLIP-2 FLAN-T5-XXL",sorce:"34.1",link:"https://www.baidu.com/",data:[{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4}]},{prop:"Owen-VL-7B",sorce:"34.1",link:"https://www.baidu.com/",data:[{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4}]},{prop:"LLaVA-1.5-7B",sorce:"34.1",link:"https://www.baidu.com/",data:[{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4}]},{prop:"LLaVA-1.5-13B",sorce:"34.1",link:"https://www.baidu.com/",data:[{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4}]},{prop:"InstructBLIP-T5-XL",sorce:"34.1",link:"https://www.baidu.com/",data:[{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4}]},{prop:"InstructBLIP-TS-XXL",sorce:"34.1",link:"https://www.baidu.com/",data:[{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4}]},{prop:"Qwen-VL-PLUS",sorce:"34.1",link:"https://www.baidu.com/",data:[{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4}]},{prop:"Gemini Pro Vision",sorce:"34.1",link:"https://www.baidu.com/",data:[{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4}]},{prop:"GPT-4V",sorce:"34.1",link:"https://www.baidu.com/",data:[{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4}]}],table3:[{prop:" Vicuna-v1.5-13B",sorce:"34.1",link:"https://www.baidu.com/",data:[{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4}]},{prop:"GPT-4 Turbo",sorce:"34.1",link:"https://www.baidu.com/",data:[{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4}]},{prop:"GPT-3.5 Turbo",sorce:"34.1",link:"https://www.baidu.com/",data:[{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4}]},{prop:"Gemini Pro",sorce:"34.1",link:"https://www.baidu.com/",data:[{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4}]},{prop:"ERNIE-Bot 4.0",sorce:"34.1",link:"https://www.baidu.com/",data:[{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4},{t1:25.1,t2:29.4}]}]}}},j=L,I=(0,r.Z)(j,P,S,!1,null,"2976c640",null),E=I.exports,O=function(){var t=this;t._self._c;return t._m(0)},A=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full h-full pt-5"},[e("div",{staticClass:"PageContent flex justify-center items-center flex-col"},[e("div",{staticClass:"headtitle text-3xl font-bold p-5"},[t._v(" Robustness Evaluation of LMMs towards Image Corruption ")]),e("div",{staticClass:"overview_content w-7/12 text-justify"},[e("div",[t._v(" In the realm of practical pathology, the interpretation of mod404 els significantly influences the subsequent medical decisions and treatment strategies doctors determine. Therefore, the ro406 bustness of these models is crucial for clinical applications. Given that during staining, scanning, or image generation of pathological slides, several factors often affect image quality, including JPEG compression, pixelation, blur(encompasses bubble blur, defocus blur, motion blur), and color variations (such as brightness, saturation, and hue). Inspired by the analysis of encoder-based models’ robustness against pathol413 ogy image corruption [Zheng et al., 2024; Sun et al., 2023a; Zhang et al., 2022], we incorporate these corruptions to ex415 plore the robustness of LMMs against these corruptions on PathMMU dataset. ")]),e("img",{staticClass:"pt-10 pb-2",attrs:{src:"resources/img/figures/corruption_illustration.png",alt:""}}),e("img",{staticClass:"pt-10 pb-2",attrs:{src:"resources/img/figures/attribute.png",alt:""}}),e("div",{staticClass:"pb-10"},[t._v(" Figure 5: Illustration of the model’s performance towards different levels of color-related (brightness, hue, saturation) and image quality-related (pixelation, JPEG compression, bubble effect, motion blur, defocus) corruptions on the PathMMU test-tiny set, where level 0 represents the model’s performance without any corruption. ")])])]),e("div",{staticClass:"PageContent flex justify-center items-center flex-col"},[e("div",{staticClass:"headtitle text-3xl font-bold p-5"},[t._v("Attributes all")]),e("div",{staticClass:"overview_content w-7/12"},[e("img",{staticClass:"pt-10 pb-2",attrs:{src:"resources/img/figures/attribute_all.png",alt:""}}),e("img",{staticClass:"pt-10 pb-2",attrs:{src:"resources/img/figures/attribute_half.png",alt:""}}),e("div",{staticClass:"pb-10"},[t._v(" Figure 5: Illustration of the model’s performance towards different levels of color-related (brightness, hue, saturation) and image quality-related (pixelation, JPEG compression, bubble effect, motion blur, defocus) corruptions on the PathMMU test-tiny set, where level 0 represents the model’s performance without any corruption. ")])])])])}],U={},B=U,V=(0,r.Z)(B,O,A,!1,null,"8310e544",null),H=V.exports,F=function(){var t=this;t._self._c;return t._m(0)},Z=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"FooterPart w-full h-56 flex justify-center items-center text-base",staticStyle:{"background-color":"#fafafa"}},[e("p",[t._v(" This website is website adapted from "),e("a",{attrs:{href:"https://nerfies.github.io/"}},[t._v("Nerfies")]),t._v(" and "),e("a",{attrs:{href:"https://mathvista.github.io/"}},[t._v("MathVista")]),t._v(", licensed under a "),e("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by-sa/4.0/"}},[t._v("Creative Commons Attribution-ShareAlike 4.0 International License")]),t._v(". ")])])}],q={},G=q,X=(0,r.Z)(G,F,Z,!1,null,null,null),z=X.exports,W={name:"HomeView",components:{TopMenu:_,HomePage:T,ExperimentsPage:E,ThirdPart:H,FooterPart:z},data(){return{}},mounted(){},methods:{}},R=W,J=(0,r.Z)(R,v,h,!1,null,null,null),N=J.exports;n["default"].use(p.ZP);const K=[{path:"/",name:"home",component:N}],Y=new p.ZP({mode:"hash",base:"",routes:K});var D=Y;n["default"].use(i()),n["default"].config.productionTip=!1,new n["default"]({router:D,render:function(t){return t(u)}}).$mount("#app")}},e={};function a(s){var i=e[s];if(void 0!==i)return i.exports;var n=e[s]={id:s,loaded:!1,exports:{}};return t[s](n,n.exports,a),n.loaded=!0,n.exports}a.m=t,function(){a.amdO={}}(),function(){var t=[];a.O=function(e,s,i,n){if(!s){var o=1/0;for(d=0;d<t.length;d++){s=t[d][0],i=t[d][1],n=t[d][2];for(var l=!0,r=0;r<s.length;r++)(!1&n||o>=n)&&Object.keys(a.O).every((function(t){return a.O[t](s[r])}))?s.splice(r--,1):(l=!1,n<o&&(o=n));if(l){t.splice(d--,1);var c=i();void 0!==c&&(e=c)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[s,i,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,n,o=s[0],l=s[1],r=s[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(i in l)a.o(l,i)&&(a.m[i]=l[i]);if(r)var d=r(a)}for(e&&e(s);c<o.length;c++)n=o[c],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(d)},s=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(7060)}));s=a.O(s)})();
//# sourceMappingURL=app.eb6ae504.js.map
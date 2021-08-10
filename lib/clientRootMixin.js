import 'viewerjs/dist/viewer.css';
import Viewer from 'viewerjs';
let viewer = null
export default {
  updated() {
    // 等待dom加载完成之后执行
    this.$nextTick(() => {
      this.update();
    });
  },
  methods: {
    update() {
      if(viewer) {
        viewer.destroy()
        viewer = null
      }
      const dom = Array.from(document.querySelectorAll(selector));
      // 绑定事件
      dom.forEach((item)=>{
        item.addEventListener("click",this.initViewer);
      })
    },
    initViewer(e){
      let img = document.createElement('div')
      const dom = Array.from(document.querySelectorAll(selector));
      let clickUrl = e.srcElement.src
      let curIndex = 0;
      dom.forEach((el,index) => {
        if(el.src == clickUrl){
          curIndex = index
        }
        let pic = document.createElement('img')
        pic.src = el.src
        img.appendChild(pic)
      });
      viewer = new Viewer(img,{
        initialViewIndex:curIndex
      })
      setTimeout(()=> {
        viewer.show()
      },20)
    }
  }
};
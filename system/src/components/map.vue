<template>
  <div class="map-container">
    <div class="map-map" id="container"></div>
    <div class="map-input-container">
      <input class="map-input" type="text" placeholder="查找业务对象名称" />
      <img class="map-input-bottom" src="../assets/imgs/bottom.png" />
      <div class="map-input-query">
        <img class="map-input-query-icon" src="../assets/imgs/query.png" />
      </div>
    </div>
    <div class="map-sidebar">
      <img class="sidebar-coll" src="../assets/imgs/sidebar-coll.png" />
      <div class="sidebar-list">
        <div class="sidebar-item" v-for="(item, index) in sideBarArrs" :key="item">
          <img class="sidebar-item-icon" :src="require(`../assets/imgs/sidebar${index + 1}.png`)" />
          <p>{{item}}</p>
        </div>
      </div>
    </div>
    <img class="map-mini" src="../assets/imgs/map-mini.png" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare let AMap: any;
const tHeader = () => {
  return `<div class="map-table-header">
        <p>LX-151已开发井</p>
        <p class="map-table-detail">详细信息></p>
      </div>`;
};
const tRow = (item: any) => {
  return `<div class="map-table-body" :key="${item.id}"><div class="map-t-col map-t-col-label">${item.label1}</div>
        <div class="map-t-col">${item.value1}</div>
        <div class="map-t-col map-t-col-label">${item.label2}</div>
        <div class="map-t-col">${item.value2}</div></div>`;
};

@Component({})

export default class MapCom extends Vue {
  sideBarArrs = ['区块', '项目', '井', '集气站', '管线'];

  tableContent = [
    {
      id: 0,
      label1: '井型',
      value1: '直井',
      label2: '投产时间',
      value2: '2017.08',
    },
    {
      id: 1,
      label1: '累产气',
      value1: '2135',
      label2: '试气产能',
      value2: '67',
    },
    {
      id: 2,
      label1: '试气预测',
      value1: '45',
      label2: '测井预测',
      value2: '56',
    },
  ]

  private map: any = {}

  private infoWindow: any = {}

  mounted() {
    this.initMap();
  }

  public infoTriggerHandle() {
    this.$emit('infoTriggerHandle');
  }

  initMap() {
    this.map = new AMap.Map('container', {
      resizeEnable: true,
      center: [116.473188, 39.993253],
      zoom: 13,
    });
    const info: any = [];
    let str: string = '';
    this.tableContent.forEach((item) => {
      return str += tRow(item);
    });
    info.push(`<div class="map-table">${tHeader()}${str}</div>`);
    this.map.on('click', (e: any) => {
      this.map.remove(this.infoWindow);
      this.infoWindow = new AMap.InfoWindow({
        content: info,
        position: e.lnglat,
      });
      this.map.add(this.infoWindow);
      this.$nextTick(() => {
        const dom: any = document.querySelector('.map-table-detail') || window;
        dom.onclick = () => {
          this.infoTriggerHandle();
        };
      });
    });
  }
}
</script>

<style lang="scss">
.map-container {
  background-size: cover;
  position: relative;
  .map-mini {
    width: 1.61rem;
    position: absolute;
    bottom: 0.15rem;
    right: 0.15rem;
  }
  .map-sidebar {
    position: absolute;
    left: 0;
    top: 0.8rem;
    width: 0.7rem;
    .sidebar-coll {
      width: 0.7rem;
      vertical-align: bottom;
      cursor: pointer;
    }
    .sidebar-list {
      width: 0.5rem;
      background-color: #fff;
      margin-left: 0.05rem;
      border-radius: 0 0 5px 5px;
      .sidebar-item {
        height: 0.54rem;
        padding: 0 0.05rem;
        border-bottom: 2px solid #ebf1f6;
        font-size: 13px;
        color: #0f456d;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .sidebar-item-icon {
          width: 0.14rem;
          height: 0.14rem;
          margin-bottom: 5px;
        }
      }
      .sidebar-item:last-of-type {
        border-bottom: none;
        border-radius: 0 0 5px 5px;
      }
    }
  }
  .map-input-container {
    width: 3.6rem;
    height: 0.36rem;
    border-radius: 0.18rem;
    background-color: #fff;
    position: absolute;
    left: 0.15rem;
    top: 0.15rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .map-input {
      font-size: 13px;
      color: #666;
      width: 2.8rem;
      height: 0.34rem;
      outline: none;
      border: none;
      line-height: 0.34rem;
      text-indent: 0.15rem;
      border-radius: 0.18rem;
    }
    .map-input-bottom {
      width: 0.11rem;
      height: 0.06rem;
    }
    .map-input-query {
      width: 0.5rem;
      height: 0.36rem;
      border-radius: 0.18rem;
      background-color: #ffa700;
      position: absolute;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      .map-input-query-icon {
        width: 0.18rem;
        height: 0.18rem;
      }
    }
  }
  .map-table {
    width: 2.25rem;
    height: 1.32rem;
    .map-table-header {
      width: 1.97rem;
      height: 0.26rem;
      margin: 0.2rem 0 0 0.08rem;
      background-image: linear-gradient(to right, #2486ff, #00c0ff);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      color: #fff;
      padding: 0 0.1rem;
      .map-table-detail {
        cursor: pointer;
      }
    }
    .map-table-body {
      width: 2.17rem;
      height: 0.35rem;
      margin-left: 0.08rem;
      border-bottom: 1px solid #e5ecf0;
      border-left: 1px solid #e5ecf0;
      border-right: 1px solid #e5ecf0;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      background-color: #fff;
      .map-t-col {
        width: 25%;
        height: 0.35rem;
        line-height: 0.35rem;
        border-right: 1px solid #e5ecf0;
        font-size: 11px;
        color: #50606b;
        text-align: center;
      }
      .map-t-col-label {
        font-weight: bold;
      }
      .map-t-col:last-of-type {
        border-right: none;
      }
    }
    .map-table-triangle {
      width: 0;
      height: 0;
      border-top: 8px solid transparent;
      border-right: 10px solid #fff;
      border-bottom: 8px solid transparent;
      position: absolute;
      left: 1px;
      top: 0.26rem;
    }
  }
  .map-map {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .amap-copyright {
    display: none !important;
  }
}
</style>

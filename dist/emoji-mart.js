(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["EmojiMart"] = factory();
	else
		root["EmojiMart"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Emoji.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Emoji.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils_shared_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/shared-props */ "./src/utils/shared-props.js");
/* harmony import */ var _utils_emoji_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/emoji-data */ "./src/utils/emoji-data.js");

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }


/* harmony default export */ __webpack_exports__["default"] = ({
  props: _objectSpread(_objectSpread({}, _utils_shared_props__WEBPACK_IMPORTED_MODULE_1__.EmojiProps), {}, {
    data: {
      type: Object,
      required: true
    }
  }),
  emits: ["click", "mouseenter", "mouseleave"],
  computed: {
    view: function view() {
      return new _utils_emoji_data__WEBPACK_IMPORTED_MODULE_2__.EmojiView(this.emojiObject, this.skin, this.set, this.native, this.fallback, this.tooltip, this.size);
    },
    sanitizedData: function sanitizedData() {
      return this.emojiObject._sanitized;
    },
    title: function title() {
      return this.tooltip ? this.emojiObject.short_name : null;
    },
    emojiObject: function emojiObject() {
      if (typeof this.emoji == 'string') {
        return this.data.findEmoji(this.emoji);
      } else {
        return this.emoji;
      }
    }
  },
  created: function created() {},
  methods: {
    onClick: function onClick() {
      this.$emit('click', this.emojiObject);
    },
    onMouseEnter: function onMouseEnter() {
      this.$emit('mouseenter', this.emojiObject);
    },
    onMouseLeave: function onMouseLeave() {
      this.$emit('mouseleave', this.emojiObject);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Picker.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Picker.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _vendor_raf_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vendor/raf-polyfill */ "./src/vendor/raf-polyfill.js");
/* harmony import */ var _vendor_raf_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_raf_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/store */ "./src/utils/store.js");
/* harmony import */ var _utils_frequently__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/frequently */ "./src/utils/frequently.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* harmony import */ var _utils_shared_props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/shared-props */ "./src/utils/shared-props.js");
/* harmony import */ var _utils_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/picker */ "./src/utils/picker.js");
/* harmony import */ var _anchors_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./anchors.vue */ "./src/components/anchors.vue");
/* harmony import */ var _category_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./category.vue */ "./src/components/category.vue");
/* harmony import */ var _preview_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./preview.vue */ "./src/components/preview.vue");
/* harmony import */ var _search_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search.vue */ "./src/components/search.vue");

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }










var I18N = {
  search: 'Search',
  notfound: 'No Emoji Found',
  categories: {
    search: 'Search Results',
    recent: 'Frequently Used',
    smileys: 'Smileys & Emotion',
    people: 'People & Body',
    nature: 'Animals & Nature',
    foods: 'Food & Drink',
    activity: 'Activity',
    places: 'Travel & Places',
    objects: 'Objects',
    symbols: 'Symbols',
    flags: 'Flags',
    custom: 'Custom'
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  props: _objectSpread(_objectSpread({}, _utils_shared_props__WEBPACK_IMPORTED_MODULE_5__.PickerProps), {}, {
    data: {
      type: Object,
      required: true
    }
  }),
  emits: ['select', 'skin-change'],
  data: function data() {
    return {
      activeSkin: this.skin || _utils_store__WEBPACK_IMPORTED_MODULE_2__["default"].get('skin') || this.defaultSkin,
      view: new _utils_picker__WEBPACK_IMPORTED_MODULE_6__.PickerView(this)
    };
  },
  computed: {
    customStyles: function customStyles() {
      return _objectSpread({
        width: this.calculateWidth + 'px'
      }, this.pickerStyles);
    },
    emojiProps: function emojiProps() {
      return {
        native: this.native,
        skin: this.activeSkin,
        set: this.set,
        emojiTooltip: this.emojiTooltip,
        emojiSize: this.emojiSize,
        selectedEmoji: this.view.previewEmoji,
        selectedEmojiCategory: this.view.previewEmojiCategory,
        onEnter: this.onEmojiEnter.bind(this),
        onLeave: this.onEmojiLeave.bind(this),
        onClick: this.onEmojiClick.bind(this)
      };
    },
    skinProps: function skinProps() {
      return {
        skin: this.activeSkin
      };
    },
    calculateWidth: function calculateWidth() {
      return this.perLine * (this.emojiSize + 12) + 12 + 2 + (0,_utils__WEBPACK_IMPORTED_MODULE_4__.measureScrollbar)();
    },
    // emojisPerRow() {
    //   const listEl = this.$refs.scrollContent
    //   const emojiEl = listEl.querySelector('.emoji-mart-emoji')
    //   return Math.floor(listEl.offsetWidth / emojiEl.offsetWidth)
    // },
    filteredCategories: function filteredCategories() {
      return this.view.filteredCategories;
    },
    mergedI18n: function mergedI18n() {
      return Object.freeze((0,_utils__WEBPACK_IMPORTED_MODULE_4__.deepMerge)(I18N, this.i18n));
    },
    idleEmoji: function idleEmoji() {
      try {
        return this.data.emoji(this.emoji);
      } catch (e) {
        console.error('Default preview emoji `' + this.emoji + '` is not available, check the Picker `emoji` property');
        console.error(e);
        return this.data.firstEmoji();
      }
    },
    isSearching: function isSearching() {
      return this.view.searchEmojis != null;
    }
  },
  watch: {
    skin: function skin() {
      this.onSkinChange(this.skin);
    }
  },
  methods: {
    onScroll: function onScroll() {
      if (this.infiniteScroll && !this.waitingForPaint) {
        this.waitingForPaint = true;
        window.requestAnimationFrame(this.onScrollPaint.bind(this));
      }
    },
    onScrollPaint: function onScrollPaint() {
      this.waitingForPaint = false;
      this.view.onScroll();
    },
    onAnchorClick: function onAnchorClick(category) {
      this.view.onAnchorClick(category);
    },
    onSearch: function onSearch(value) {
      this.view.onSearch(value);
    },
    onEmojiEnter: function onEmojiEnter(emoji) {
      this.view.onEmojiEnter(emoji);
    },
    onEmojiLeave: function onEmojiLeave(emoji) {
      this.view.onEmojiLeave(emoji);
    },
    onArrowLeft: function onArrowLeft($event) {
      var oldIdx = this.view.previewEmojiIdx;
      this.view.onArrowLeft();
      if ($event && this.view.previewEmojiIdx !== oldIdx) {
        // Prevent cursor movement inside the input
        $event.preventDefault();
      }
    },
    onArrowRight: function onArrowRight() {
      this.view.onArrowRight();
    },
    onArrowDown: function onArrowDown() {
      this.view.onArrowDown();
    },
    onArrowUp: function onArrowUp($event) {
      this.view.onArrowUp();
      // Prevent cursor movement inside the input
      $event.preventDefault();
    },
    onEnter: function onEnter() {
      if (!this.view.previewEmoji) {
        // We may press "Enter" when nothing is selected,
        // for example, if we search for "asdf".
        return;
      }
      this.$emit('select', this.view.previewEmoji);
      _utils_frequently__WEBPACK_IMPORTED_MODULE_3__["default"].add(this.view.previewEmoji);
    },
    onEmojiClick: function onEmojiClick(emoji) {
      this.$emit('select', emoji);
      _utils_frequently__WEBPACK_IMPORTED_MODULE_3__["default"].add(emoji);
      this.data.updateRecentCategory();
    },
    onTextSelect: function onTextSelect($event) {
      // Prevent default text select event.
      // In Vue 3 it goes through the component and triggers the `select`
      // event that is supposed to be emmited only with emoji.
      // (there is no such problem in Vue 2).
      $event.stopPropagation();
    },
    onSkinChange: function onSkinChange(skin) {
      this.activeSkin = skin;
      _utils_store__WEBPACK_IMPORTED_MODULE_2__["default"].update({
        skin: skin
      });
      this.$emit('skin-change', skin);
    },
    getCategoryComponent: function getCategoryComponent(index) {
      var component = this.$refs['categories_' + index];
      if (component && '0' in component) {
        // Vue 2 has $refs under v-for as an array.
        return component['0'];
      }
      // Vue 3 does not support $refs as array.
      return component;
    }
  },
  components: {
    Anchors: _anchors_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    Category: _category_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    Preview: _preview_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    Search: _search_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/anchors.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/anchors.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _svgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../svgs */ "./src/svgs/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    i18n: {
      type: Object,
      required: true
    },
    color: {
      type: String
    },
    categories: {
      type: Array,
      required: true
    },
    activeCategory: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  emits: ['click'],
  created: function created() {
    this.svgs = _svgs__WEBPACK_IMPORTED_MODULE_0__["default"];
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/category.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/category.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_emoji_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/emoji-data */ "./src/utils/emoji-data.js");
/* harmony import */ var _Emoji_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Emoji.vue */ "./src/components/Emoji.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      type: Object,
      required: true
    },
    i18n: {
      type: Object,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    emojis: {
      type: Array
    },
    emojiProps: {
      type: Object,
      required: true
    }
  },
  methods: {
    activeClass: function activeClass(emojiObject) {
      if (!this.emojiProps.selectedEmoji) {
        return '';
      }
      if (!this.emojiProps.selectedEmojiCategory) {
        return '';
      }
      if (this.emojiProps.selectedEmoji.id == emojiObject.id && this.emojiProps.selectedEmojiCategory.id == this.id) {
        return 'emoji-mart-emoji-selected';
      }
      return '';
    }
  },
  computed: {
    isVisible: function isVisible() {
      return !!this.emojis;
    },
    isSearch: function isSearch() {
      return this.name == 'Search';
    },
    hasResults: function hasResults() {
      return this.emojis.length > 0;
    },
    emojiObjects: function emojiObjects() {
      var _this = this;
      return this.emojis.map(function (emoji) {
        var emojiObject = emoji;
        var emojiView = new _utils_emoji_data__WEBPACK_IMPORTED_MODULE_0__.EmojiView(emoji, _this.emojiProps.skin, _this.emojiProps.set, _this.emojiProps.native, _this.emojiProps.fallback, _this.emojiProps.emojiTooltip, _this.emojiProps.emojiSize);
        return {
          emojiObject: emojiObject,
          emojiView: emojiView
        };
      });
    }
  },
  components: {
    Emoji: _Emoji_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/preview.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/preview.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Emoji_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Emoji.vue */ "./src/components/Emoji.vue");
/* harmony import */ var _skins_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skins.vue */ "./src/components/skins.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    emoji: {
      type: [String, Object]
    },
    idleEmoji: {
      type: [String, Object],
      required: true
    },
    showSkinTones: {
      type: Boolean,
      default: true
    },
    emojiProps: {
      type: Object,
      required: true
    },
    skinProps: {
      type: Object,
      required: true
    },
    onSkinChange: {
      type: Function,
      required: true
    }
  },
  computed: {
    emojiData: function emojiData() {
      if (this.emoji) {
        return this.emoji;
      } else {
        return {};
      }
    },
    emojiShortNames: function emojiShortNames() {
      return this.emojiData.short_names;
    },
    emojiEmoticons: function emojiEmoticons() {
      return this.emojiData.emoticons;
    }
  },
  components: {
    Emoji: _Emoji_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Skins: _skins_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/search.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/search.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      type: Object,
      required: true
    },
    i18n: {
      type: Object,
      required: true
    },
    autoFocus: {
      type: Boolean,
      default: false
    },
    onSearch: {
      type: Function,
      required: true
    },
    onArrowLeft: {
      type: Function,
      required: false
    },
    onArrowRight: {
      type: Function,
      required: false
    },
    onArrowDown: {
      type: Function,
      required: false
    },
    onArrowUp: {
      type: Function,
      required: false
    },
    onEnter: {
      type: Function,
      required: false
    }
  },
  emits: ['search', 'enter', 'arrowUp', 'arrowDown', 'arrowRight', 'arrowLeft'],
  data: function data() {
    return {
      value: ''
    };
  },
  computed: {
    emojiIndex: function emojiIndex() {
      return this.data;
    }
  },
  watch: {
    value: function value() {
      this.$emit('search', this.value);
    }
  },
  methods: {
    clear: function clear() {
      this.value = '';
    }
  },
  mounted: function mounted() {
    var $input = this.$el.querySelector('input');
    if (this.autoFocus) {
      $input.focus();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/skins.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/skins.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    skin: {
      type: Number,
      required: true
    }
  },
  emits: ['change'],
  data: function data() {
    return {
      opened: false
    };
  },
  methods: {
    onClick: function onClick(skinTone) {
      if (this.opened) {
        if (skinTone != this.skin) {
          this.$emit('change', skinTone);
        }
      }
      this.opened = !this.opened;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Emoji.vue?vue&type=template&id=534ad946":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Emoji.vue?vue&type=template&id=534ad946 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.view.canRender ? _c(_vm.tag, {
    tag: "component",
    staticClass: "emoji-mart-emoji",
    attrs: {
      title: _vm.view.title,
      "aria-label": _vm.view.ariaLabel,
      "data-title": _vm.title
    },
    on: {
      mouseenter: _vm.onMouseEnter,
      mouseleave: _vm.onMouseLeave,
      click: _vm.onClick
    }
  }, [_c("span", {
    class: _vm.view.cssClass,
    style: _vm.view.cssStyle
  }, [_vm._v(_vm._s(_vm.view.content))])]) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Picker.vue?vue&type=template&id=d16e9084":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Picker.vue?vue&type=template&id=d16e9084 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "emoji-mart emoji-mart-static",
    style: _vm.customStyles
  }, [_vm.showCategories ? _c("div", {
    staticClass: "emoji-mart-bar emoji-mart-bar-anchors"
  }, [_c("anchors", {
    attrs: {
      data: _vm.data,
      i18n: _vm.mergedI18n,
      color: _vm.color,
      categories: _vm.view.allCategories,
      "active-category": _vm.view.activeCategory
    },
    on: {
      click: _vm.onAnchorClick
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm._t("searchTemplate", function () {
    return [_vm.showSearch ? _c("search", {
      ref: "search",
      attrs: {
        data: _vm.data,
        i18n: _vm.mergedI18n,
        "auto-focus": _vm.autoFocus,
        "on-search": _vm.onSearch
      },
      on: {
        search: _vm.onSearch,
        arrowLeft: _vm.onArrowLeft,
        arrowRight: _vm.onArrowRight,
        arrowDown: _vm.onArrowDown,
        arrowUp: _vm.onArrowUp,
        enter: _vm.onEnter,
        select: _vm.onTextSelect
      }
    }) : _vm._e()];
  }, {
    data: _vm.data,
    i18n: _vm.i18n,
    autoFocus: _vm.autoFocus,
    onSearch: _vm.onSearch
  }), _vm._v(" "), _c("div", {
    ref: "scroll",
    staticClass: "emoji-mart-scroll",
    attrs: {
      role: "tabpanel"
    },
    on: {
      scroll: _vm.onScroll
    }
  }, [_c("div", {
    ref: "scrollContent",
    attrs: {
      id: "emoji-mart-list",
      role: "listbox",
      "aria-expanded": "true"
    }
  }, [_vm._t("customCategory"), _vm._v(" "), _vm._l(_vm.view.filteredCategories, function (category, idx) {
    return _c("category", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.infiniteScroll || category == _vm.view.activeCategory || _vm.isSearching,
        expression: "infiniteScroll || category == view.activeCategory || isSearching"
      }],
      key: category.id,
      ref: "categories_" + idx,
      refInFor: true,
      attrs: {
        data: _vm.data,
        i18n: _vm.mergedI18n,
        id: category.id,
        name: category.name,
        emojis: category.emojis,
        "emoji-props": _vm.emojiProps
      }
    });
  })], 2)]), _vm._v(" "), _vm._t("previewTemplate", function () {
    return [_vm.showPreview ? _c("div", {
      staticClass: "emoji-mart-bar emoji-mart-bar-preview"
    }, [_c("preview", {
      attrs: {
        data: _vm.data,
        title: _vm.title,
        emoji: _vm.view.previewEmoji,
        "idle-emoji": _vm.idleEmoji,
        "show-skin-tones": _vm.showSkinTones,
        "emoji-props": _vm.emojiProps,
        "skin-props": _vm.skinProps,
        "on-skin-change": _vm.onSkinChange
      }
    })], 1) : _vm._e()];
  }, {
    data: _vm.data,
    title: _vm.title,
    emoji: _vm.view.previewEmoji,
    idleEmoji: _vm.idleEmoji,
    showSkinTones: _vm.showSkinTones,
    emojiProps: _vm.emojiProps,
    skinProps: _vm.skinProps,
    onSkinChange: _vm.onSkinChange
  })], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/anchors.vue?vue&type=template&id=51188104":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/anchors.vue?vue&type=template&id=51188104 ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "emoji-mart-anchors",
    attrs: {
      role: "tablist"
    }
  }, _vm._l(_vm.categories, function (category) {
    return _c("button", {
      key: category.id,
      class: {
        "emoji-mart-anchor": true,
        "emoji-mart-anchor-selected": category.id == _vm.activeCategory.id
      },
      style: {
        color: category.id == _vm.activeCategory.id ? _vm.color : ""
      },
      attrs: {
        role: "tab",
        type: "button",
        "aria-label": category.name,
        "aria-selected": category.id == _vm.activeCategory.id,
        "data-title": _vm.i18n.categories[category.id]
      },
      on: {
        click: function click($event) {
          return _vm.$emit("click", category);
        }
      }
    }, [_c("div", {
      attrs: {
        "aria-hidden": "true"
      },
      domProps: {
        innerHTML: _vm._s(_vm.svgs[category.id])
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "emoji-mart-anchor-bar",
      style: {
        backgroundColor: _vm.color
      },
      attrs: {
        "aria-hidden": "true"
      }
    })]);
  }), 0);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/category.vue?vue&type=template&id=376cda0e":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/category.vue?vue&type=template&id=376cda0e ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.isVisible && (_vm.isSearch || _vm.hasResults) ? _c("section", {
    class: {
      "emoji-mart-category": true,
      "emoji-mart-no-results": !_vm.hasResults
    },
    attrs: {
      "aria-label": _vm.i18n.categories[_vm.id]
    }
  }, [_c("div", {
    staticClass: "emoji-mart-category-label"
  }, [_c("h3", {
    staticClass: "emoji-mart-category-label"
  }, [_vm._v(_vm._s(_vm.i18n.categories[_vm.id]))])]), _vm._v(" "), _vm._l(_vm.emojiObjects, function (_ref) {
    var emojiObject = _ref.emojiObject,
      emojiView = _ref.emojiView;
    return [emojiView.canRender ? _c("button", {
      key: emojiObject.id,
      staticClass: "emoji-mart-emoji",
      class: _vm.activeClass(emojiObject),
      attrs: {
        "aria-label": emojiView.ariaLabel,
        role: "option",
        "aria-selected": "false",
        "aria-posinset": "1",
        "aria-setsize": "1812",
        type: "button",
        "data-title": emojiObject.short_name,
        title: emojiView.title
      },
      on: {
        mouseenter: function mouseenter($event) {
          _vm.emojiProps.onEnter(emojiView.getEmoji());
        },
        mouseleave: function mouseleave($event) {
          _vm.emojiProps.onLeave(emojiView.getEmoji());
        },
        click: function click($event) {
          _vm.emojiProps.onClick(emojiView.getEmoji());
        }
      }
    }, [_c("span", {
      class: emojiView.cssClass,
      style: emojiView.cssStyle
    }, [_vm._v(_vm._s(emojiView.content))])]) : _vm._e()];
  }), _vm._v(" "), !_vm.hasResults ? _c("div", [_c("emoji", {
    attrs: {
      data: _vm.data,
      emoji: "sleuth_or_spy",
      native: _vm.emojiProps.native,
      skin: _vm.emojiProps.skin,
      set: _vm.emojiProps.set
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "emoji-mart-no-results-label"
  }, [_vm._v(_vm._s(_vm.i18n.notfound))])], 1) : _vm._e()], 2) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/preview.vue?vue&type=template&id=35056c30":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/preview.vue?vue&type=template&id=35056c30 ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "emoji-mart-preview"
  }, [_vm.emoji ? [_c("div", {
    staticClass: "emoji-mart-preview-emoji"
  }, [_c("emoji", {
    attrs: {
      data: _vm.data,
      emoji: _vm.emoji,
      native: _vm.emojiProps.native,
      skin: _vm.emojiProps.skin,
      set: _vm.emojiProps.set
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "emoji-mart-preview-data"
  }, [_c("div", {
    staticClass: "emoji-mart-preview-name"
  }, [_vm._v(_vm._s(_vm.emoji.name))]), _vm._v(" "), _c("div", {
    staticClass: "emoji-mart-preview-shortnames"
  }, _vm._l(_vm.emojiShortNames, function (shortName) {
    return _c("span", {
      key: shortName,
      staticClass: "emoji-mart-preview-shortname"
    }, [_vm._v(":" + _vm._s(shortName) + ":")]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "emoji-mart-preview-emoticons"
  }, _vm._l(_vm.emojiEmoticons, function (emoticon) {
    return _c("span", {
      key: emoticon,
      staticClass: "emoji-mart-preview-emoticon"
    }, [_vm._v(_vm._s(emoticon))]);
  }), 0)])] : [_c("div", {
    staticClass: "emoji-mart-preview-emoji"
  }, [_c("emoji", {
    attrs: {
      data: _vm.data,
      emoji: _vm.idleEmoji,
      native: _vm.emojiProps.native,
      skin: _vm.emojiProps.skin,
      set: _vm.emojiProps.set
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "emoji-mart-preview-data"
  }, [_c("span", {
    staticClass: "emoji-mart-title-label"
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _vm.showSkinTones ? _c("div", {
    staticClass: "emoji-mart-preview-skins"
  }, [_c("skins", {
    attrs: {
      skin: _vm.skinProps.skin
    },
    on: {
      change: function change($event) {
        return _vm.onSkinChange($event);
      }
    }
  })], 1) : _vm._e()]], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/search.vue?vue&type=template&id=4ad41bb8":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/search.vue?vue&type=template&id=4ad41bb8 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "emoji-mart-search"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.value,
      expression: "value"
    }],
    attrs: {
      type: "text",
      placeholder: _vm.i18n.search,
      role: "textbox",
      "aria-autocomplete": "list",
      "aria-owns": "emoji-mart-list",
      "aria-label": "Search for an emoji",
      "aria-describedby": "emoji-mart-search-description"
    },
    domProps: {
      value: _vm.value
    },
    on: {
      keydown: [function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "left", 37, $event.key, ["Left", "ArrowLeft"])) return null;
        if ("button" in $event && $event.button !== 0) return null;
        return function ($event) {
          return _vm.$emit("arrowLeft", $event);
        }.apply(null, arguments);
      }, function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "right", 39, $event.key, ["Right", "ArrowRight"])) return null;
        if ("button" in $event && $event.button !== 2) return null;
        return function () {
          return _vm.$emit("arrowRight");
        }.apply(null, arguments);
      }, function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) return null;
        return function () {
          return _vm.$emit("arrowDown");
        }.apply(null, arguments);
      }, function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])) return null;
        return function ($event) {
          return _vm.$emit("arrowUp", $event);
        }.apply(null, arguments);
      }, function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return function () {
          return _vm.$emit("enter");
        }.apply(null, arguments);
      }],
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.value = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "hidden",
    attrs: {
      id: "emoji-picker-search-description"
    }
  }, [_vm._v("Use the left, right, up and down arrow keys to navigate the emoji search\n    results.")])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/skins.vue?vue&type=template&id=1c614894":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/skins.vue?vue&type=template&id=1c614894 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    class: {
      "emoji-mart-skin-swatches": true,
      "emoji-mart-skin-swatches-opened": _vm.opened
    }
  }, _vm._l(6, function (skinTone) {
    return _c("span", {
      key: skinTone,
      class: {
        "emoji-mart-skin-swatch": true,
        "emoji-mart-skin-swatch-selected": _vm.skin == skinTone
      }
    }, [_c("span", {
      class: "emoji-mart-skin emoji-mart-skin-tone-" + skinTone,
      on: {
        click: function click($event) {
          return _vm.onClick(skinTone);
        }
      }
    })]);
  }), 0);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Anchors: function() { return /* reexport safe */ _anchors_vue__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   Category: function() { return /* reexport safe */ _category_vue__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   Emoji: function() { return /* reexport safe */ _Emoji_vue__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   Picker: function() { return /* reexport safe */ _Picker_vue__WEBPACK_IMPORTED_MODULE_6__["default"]; },
/* harmony export */   Preview: function() { return /* reexport safe */ _preview_vue__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   Search: function() { return /* reexport safe */ _search_vue__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   Skins: function() { return /* reexport safe */ _skins_vue__WEBPACK_IMPORTED_MODULE_4__["default"]; }
/* harmony export */ });
/* harmony import */ var _anchors_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anchors.vue */ "./src/components/anchors.vue");
/* harmony import */ var _category_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.vue */ "./src/components/category.vue");
/* harmony import */ var _preview_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preview.vue */ "./src/components/preview.vue");
/* harmony import */ var _search_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.vue */ "./src/components/search.vue");
/* harmony import */ var _skins_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skins.vue */ "./src/components/skins.vue");
/* harmony import */ var _Emoji_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Emoji.vue */ "./src/components/Emoji.vue");
/* harmony import */ var _Picker_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Picker.vue */ "./src/components/Picker.vue");








/***/ }),

/***/ "./src/polyfills/stringFromCodePoint.js":
/*!**********************************************!*\
  !*** ./src/polyfills/stringFromCodePoint.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _String = String;
/* harmony default export */ __webpack_exports__["default"] = (_String.fromCodePoint || function stringFromCodePoint() {
  var MAX_SIZE = 0x4000;
  var codeUnits = [];
  var highSurrogate;
  var lowSurrogate;
  var index = -1;
  var length = arguments.length;
  if (!length) {
    return '';
  }
  var result = '';
  while (++index < length) {
    var codePoint = Number(arguments[index]);
    if (!isFinite(codePoint) ||
    // `NaN`, `+Infinity`, or `-Infinity`
    codePoint < 0 ||
    // not a valid Unicode code point
    codePoint > 0x10ffff ||
    // not a valid Unicode code point
    Math.floor(codePoint) != codePoint // not an integer
    ) {
      throw RangeError('Invalid code point: ' + codePoint);
    }
    if (codePoint <= 0xffff) {
      // BMP code point
      codeUnits.push(codePoint);
    } else {
      // Astral code point; split in surrogate halves
      // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      codePoint -= 0x10000;
      highSurrogate = (codePoint >> 10) + 0xd800;
      lowSurrogate = codePoint % 0x400 + 0xdc00;
      codeUnits.push(highSurrogate, lowSurrogate);
    }
    if (index + 1 === length || codeUnits.length > MAX_SIZE) {
      result += String.fromCharCode.apply(null, codeUnits);
      codeUnits.length = 0;
    }
  }
  return result;
});

/***/ }),

/***/ "./src/svgs/index.js":
/*!***************************!*\
  !*** ./src/svgs/index.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var SVGs = {
  activity: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113\"/></svg>",
  custom: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><g transform=\"translate(2.000000, 1.000000)\"><rect id=\"Rectangle\" x=\"8\" y=\"0\" width=\"3\" height=\"21\" rx=\"1.5\"></rect><rect id=\"Rectangle\" transform=\"translate(9.843, 10.549) rotate(60) translate(-9.843, -10.549) \" x=\"8.343\" y=\"0.049\" width=\"3\" height=\"21\" rx=\"1.5\"></rect><rect id=\"Rectangle\" transform=\"translate(9.843, 10.549) rotate(-60) translate(-9.843, -10.549) \" x=\"8.343\" y=\"0.049\" width=\"3\" height=\"21\" rx=\"1.5\"></rect></g></svg>",
  flags: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z\"/></svg>",
  foods: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9\"/></svg>",
  nature: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8\"/><path d=\"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235\"/></svg>",
  objects: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z\"/><path d=\"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789\"/></svg>",
  smileys: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10\"/><path d=\"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0\"/></svg>",
  people: "<svg xmlns:svg=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\" viewBox=\"0 0 24 24\"> <path id=\"path3814\" d=\"m 3.3591089,21.17726 c 0.172036,0.09385 4.265994,2.29837 8.8144451,2.29837 4.927767,0 8.670894,-2.211883 8.82782,-2.306019 0.113079,-0.06785 0.182268,-0.190051 0.182267,-0.321923 0,-3.03119 -0.929494,-5.804936 -2.617196,-7.810712 -1.180603,-1.403134 -2.661918,-2.359516 -4.295699,-2.799791 4.699118,-2.236258 3.102306,-9.28617162 -2.097191,-9.28617162 -5.1994978,0 -6.7963103,7.04991362 -2.097192,9.28617162 -1.6337821,0.440275 -3.1150971,1.396798 -4.2956991,2.799791 -1.687703,2.005776 -2.617196,4.779522 -2.617196,7.810712 1.2e-6,0.137378 0.075039,0.263785 0.195641,0.329572 z M 8.0439319,5.8308783 C 8.0439309,2.151521 12.492107,0.30955811 15.093491,2.9109411 17.694874,5.5123241 15.852911,9.9605006 12.173554,9.9605 9.8938991,9.9579135 8.0465186,8.1105332 8.0439319,5.8308783 Z m -1.688782,7.6894977 c 1.524535,-1.811449 3.5906601,-2.809035 5.8184041,-2.809035 2.227744,0 4.293869,0.997586 5.818404,2.809035 1.533639,1.822571 2.395932,4.339858 2.439152,7.108301 -0.803352,0.434877 -4.141636,2.096112 -8.257556,2.096112 -3.8062921,0 -7.3910861,-1.671043 -8.2573681,-2.104981 0.04505,-2.765017 0.906968,-5.278785 2.438964,-7.099432 z\" /> <path id=\"path3816\" d=\"M 12.173828 0.38867188 C 9.3198513 0.38867187 7.3770988 2.3672285 6.8652344 4.6308594 C 6.4218608 6.5916015 7.1153562 8.7676117 8.9648438 10.126953 C 7.6141249 10.677376 6.3550511 11.480944 5.3496094 12.675781 C 3.5629317 14.799185 2.6015625 17.701475 2.6015625 20.847656 C 2.6015654 21.189861 2.7894276 21.508002 3.0898438 21.671875 C 3.3044068 21.788925 7.4436239 24.039062 12.173828 24.039062 C 17.269918 24.039062 21.083568 21.776786 21.291016 21.652344 C 21.57281 21.483266 21.746097 21.176282 21.746094 20.847656 C 21.746094 17.701475 20.78277 14.799185 18.996094 12.675781 C 17.990455 11.480591 16.733818 10.675362 15.382812 10.125 C 17.231132 8.7655552 17.925675 6.5910701 17.482422 4.6308594 C 16.970557 2.3672285 15.027805 0.38867188 12.173828 0.38867188 z M 12.792969 2.3007812 C 13.466253 2.4161792 14.125113 2.7383941 14.695312 3.3085938 C 15.835712 4.4489931 15.985604 5.9473549 15.46875 7.1953125 C 14.951896 8.4432701 13.786828 9.3984378 12.173828 9.3984375 C 10.197719 9.3961954 8.607711 7.806187 8.6054688 5.8300781 C 8.6054683 4.2170785 9.5606362 3.0520102 10.808594 2.5351562 C 11.432573 2.2767293 12.119685 2.1853833 12.792969 2.3007812 z M 12.173828 11.273438 C 14.233647 11.273438 16.133674 12.185084 17.5625 13.882812 C 18.93069 15.508765 19.698347 17.776969 19.808594 20.283203 C 18.807395 20.800235 15.886157 22.162109 12.173828 22.162109 C 8.7614632 22.162109 5.6245754 20.787069 4.5390625 20.265625 C 4.6525896 17.766717 5.4203315 15.504791 6.7851562 13.882812 C 8.2139827 12.185084 10.11401 11.273438 12.173828 11.273438 z \" /> </svg>",
  places: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5\"/><path d=\"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z\"/></svg>",
  recent: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z\"/><path d=\"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10\"/></svg>",
  symbols: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76\"/></svg>"
};
/* harmony default export */ __webpack_exports__["default"] = (SVGs);

/***/ }),

/***/ "./src/utils/data.js":
/*!***************************!*\
  !*** ./src/utils/data.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildSearch: function() { return /* binding */ buildSearch; },
/* harmony export */   uncompress: function() { return /* binding */ uncompress; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var mapping = {
  name: 'a',
  unified: 'b',
  non_qualified: 'c',
  has_img_apple: 'd',
  has_img_google: 'e',
  has_img_twitter: 'f',
  has_img_facebook: 'h',
  keywords: 'j',
  sheet: 'k',
  emoticons: 'l',
  text: 'm',
  short_names: 'n',
  added_in: 'o'
};
var buildSearch = function buildSearch(emoji) {
  var search = [];
  var addToSearch = function addToSearch(strings, split) {
    if (!strings) {
      return;
    }
    ;
    (Array.isArray(strings) ? strings : [strings]).forEach(function (string) {
      ;
      (split ? string.split(/[-|_|\s]+/) : [string]).forEach(function (s) {
        s = s.toLowerCase();
        if (search.indexOf(s) == -1) {
          search.push(s);
        }
      });
    });
  };
  addToSearch(emoji.short_names, true);
  addToSearch(emoji.name, true);
  addToSearch(emoji.keywords, false);
  addToSearch(emoji.emoticons, false);
  return search.join(',');
};
function deepFreeze(object) {
  // Retrieve the property names defined on object
  var propNames = Object.getOwnPropertyNames(object);

  // Freeze properties before freezing self
  var _iterator = _createForOfIteratorHelper(propNames),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var name = _step.value;
      var value = object[name];
      object[name] = value && (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'object' ? deepFreeze(value) : value;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return Object.freeze(object);
}
var uncompress = function uncompress(data) {
  if (!data.compressed) {
    return data;
  }
  data.compressed = false;
  for (var id in data.emojis) {
    var emoji = data.emojis[id];
    for (var key in mapping) {
      emoji[key] = emoji[mapping[key]];
      delete emoji[mapping[key]];
    }
    if (!emoji.short_names) emoji.short_names = [];
    emoji.short_names.unshift(id);
    emoji.sheet_x = emoji.sheet[0];
    emoji.sheet_y = emoji.sheet[1];
    delete emoji.sheet;
    if (!emoji.text) emoji.text = '';
    if (!emoji.added_in) emoji.added_in = 6;
    emoji.added_in = emoji.added_in.toFixed(1);
    emoji.search = buildSearch(emoji);
  }
  data = deepFreeze(data);
  return data;
};


/***/ }),

/***/ "./src/utils/emoji-data.js":
/*!*********************************!*\
  !*** ./src/utils/emoji-data.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmojiData: function() { return /* binding */ EmojiData; },
/* harmony export */   EmojiIndex: function() { return /* binding */ EmojiIndex; },
/* harmony export */   EmojiView: function() { return /* binding */ EmojiView; },
/* harmony export */   sanitize: function() { return /* binding */ sanitize; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/utils/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./src/utils/data.js");
/* harmony import */ var _frequently__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./frequently */ "./src/utils/frequently.js");


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



var SHEET_COLUMNS = 61;
var COLONS_REGEX = /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;
// Skin tones
var SKINS = ['1F3FA', '1F3FB', '1F3FC', '1F3FD', '1F3FE', '1F3FF'];

/**
 * Emoji data structure:
 * {
 *    "compressed": false,
 *    "aliases": {
 *      collision: "boom"
 *      cooking: "fried_egg"
 *      envelope: "email"
 *      face_with_finger_covering_closed_lips: "shushing_face"
 *      ...
 *    },
 *    "categories": [ {
 *      id: "people",
 *      name: "Smileys & Emotion",
 *      emojis: [ "grinning", "grin", "joy", ... ]
 *    }, {
 *      id: "nature",
 *      name: "Animals & Nature",
 *      emojis: [ "monkey_face", "money", "gorilla", ... ]
 *    },
 *    ...
 *    ],
 *    "emojis": [
 *      smiley: {
 *        added_in: "6.0",
 *        emoticons: ["=)", "=-)"],
 *        has_img_apple: true,
 *        has_img_facebook: true,
 *        has_img_google: true,
 *        has_img_twitter: true,
 *        keywords: ["face", "happy", "joy", "haha", ":D", ":)", "smile", "funny"],
 *        name: "Smiling Face with Open Mouth",
 *        non_qualified: undefined,
 *        search: "smiley,smiling,face,with,open,mouth,happy,joy,haha,:d,:),smile,funny,=),=-)",
 *        sheet_x: 30,
 *        sheet_y: 27,
 *        short_names: ["smiley"],
 *        text: ":)",
 *        unified: "1F603",
 *      }, {
 *      +1: {    // emoji with skin_variations
 *          ..., // all the regular fields are present
 *          name: "Thumbs Up Sign",
 *          short_names: (2) ["+1", "thumbsup"],
 *          skin_variations: {
 *            1F3FB:             // each variation has additional set of fields:
 *              added_in: "8.0",
 *              has_img_apple: true,
 *              has_img_facebook: true,
 *              has_img_google: true,
 *              has_img_twitter: true,
 *              image: "1f44d-1f3fb.png",
 *              non_qualified: null,
 *              sheet_x: 14,
 *              sheet_y: 50,
 *              unified: "1F44D-1F3FB",
 *            1F3FB: {…},
 *            1F3FC: {…},
 *            1F3FD: {…},
 *            1F3FE: {…},
 *            1F3FF: {…}
 *            },
 *          ...
 *      },
 *      a: {  // emoji with non_qualified field set
 *        added_in: "6.0",
 *        emoticons: undefined,
 *        has_img_apple: true,
 *        ...
 *        non_qualified: "1F170",
 *        unified: "1F170-FE0F",
 *     },
 *     ...
 *   ]
 * }
 */

/**
 * Wraps raw jason emoji data, serves as data source for
 * emoji picker components.
 *
 * Usage:
 *
 *   import data from '../data/all.json'
 *   let index = new EmojiIndex(data)
 *
 */
var EmojiIndex = /*#__PURE__*/function () {
  /**
   * Constructor.
   *
   * @param {object} data - Raw json data, see the structure above.
   * @param {object} options - additional options, as an object:
   * @param {Function} emojisToShowFilter - optional, function to filter out
   *   some emojis, function(emoji) { return true|false }
   *   where `emoji` is an raw emoji object, see data.emojis above.
   * @param {Array} include - optional, a list of category ids to include.
   * @param {Array} exclude - optional, a list of category ids to exclude.
   * @param {Array} custom - optional, a list custom emojis, each emoji is
   *   an object, see data.emojis above for examples.
   */
  function EmojiIndex(data) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      emojisToShowFilter = _ref.emojisToShowFilter,
      include = _ref.include,
      exclude = _ref.exclude,
      custom = _ref.custom,
      recent = _ref.recent,
      _ref$recentLength = _ref.recentLength,
      recentLength = _ref$recentLength === void 0 ? 20 : _ref$recentLength;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EmojiIndex);
    this._data = (0,_data__WEBPACK_IMPORTED_MODULE_3__.uncompress)(data);
    // Callback to exclude specific emojis
    this._emojisFilter = emojisToShowFilter || null;
    // Categories to include / exclude
    this._include = include || null;
    this._exclude = exclude || null;
    // Custom emojis
    this._custom = custom || [];
    this.recent = recent;
    this.recentLength = recentLength;
    this._emojis = {};
    this._nativeEmojis = {};
    this._emoticons = {};
    this._categories = [];
    this._recentCategory = {
      id: 'recent',
      name: 'Recent',
      emojis: []
    };
    this._customCategory = {
      id: 'custom',
      name: 'Custom',
      emojis: []
    };
    this._searchIndex = {};
    this.buildIndex();
    Object.freeze(this);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EmojiIndex, [{
    key: "buildIndex",
    value: function buildIndex() {
      var _this = this;
      var allCategories = this._data.categories;
      if (this._include) {
        // Remove categories that are not in the include list.
        allCategories = allCategories.filter(function (item) {
          return _this._include.includes(item.id);
        });
        // Sort categories according to the include list.
        allCategories = allCategories.sort(function (a, b) {
          var indexA = _this._include.indexOf(a.id);
          var indexB = _this._include.indexOf(b.id);
          if (indexA < indexB) {
            return -1;
          }
          if (indexA > indexB) {
            return 1;
          }
          return 0;
        });
      }
      allCategories.forEach(function (categoryData) {
        if (!_this.isCategoryNeeded(categoryData.id)) {
          return;
        }
        var category = {
          id: categoryData.id,
          name: categoryData.name,
          emojis: []
        };
        categoryData.emojis.forEach(function (emojiId) {
          var emoji = _this.addEmoji(emojiId);
          if (emoji) {
            category.emojis.push(emoji);
          }
        });
        if (category.emojis.length) {
          _this._categories.push(category);
        }
      });
      if (this.isCategoryNeeded('custom')) {
        if (this._custom.length > 0) {
          var _iterator = _createForOfIteratorHelper(this._custom),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var customEmoji = _step.value;
              this.addCustomEmoji(customEmoji);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        if (this._customCategory.emojis.length) {
          this._categories.push(this._customCategory);
        }
      }
      this.updateRecentCategory();
    }

    /**
     * Find the emoji from the string
     */
  }, {
    key: "findEmoji",
    value: function findEmoji(emoji, skin) {
      // 1. Parse as :emoji_name:skin-tone-xx:
      var matches = emoji.match(COLONS_REGEX);
      if (matches) {
        emoji = matches[1];
        if (matches[2]) {
          skin = parseInt(matches[2], 10);
        }
      }

      // 2. Check if the specified emoji is an alias
      if (this._data.aliases.hasOwnProperty(emoji)) {
        emoji = this._data.aliases[emoji];
      }

      // 3. Check if we have the specified emoji
      if (this._emojis.hasOwnProperty(emoji)) {
        var emojiObject = this._emojis[emoji];
        if (skin) {
          return emojiObject.getSkin(skin);
        }
        return emojiObject;
      }

      // 4. Check if we have the specified native emoji
      if (this._nativeEmojis.hasOwnProperty(emoji)) {
        return this._nativeEmojis[emoji];
      }
      return null;
    }
  }, {
    key: "categories",
    value: function categories() {
      return this._categories;
    }
  }, {
    key: "emoji",
    value: function emoji(emojiId) {
      if (this._data.aliases.hasOwnProperty(emojiId)) {
        emojiId = this._data.aliases[emojiId];
      }
      var emoji = this._emojis[emojiId];
      if (!emoji) {
        throw new Error('Can not find emoji by id: ' + emojiId);
      }
      return emoji;
    }
  }, {
    key: "firstEmoji",
    value: function firstEmoji() {
      var emoji = this._emojis[Object.keys(this._emojis)[0]];
      if (!emoji) {
        throw new Error('Can not get first emoji');
      }
      return emoji;
    }
  }, {
    key: "hasEmoji",
    value: function hasEmoji(emojiId) {
      if (this._data.aliases.hasOwnProperty(emojiId)) {
        emojiId = this._data.aliases[emojiId];
      }
      if (this._emojis[emojiId]) {
        return true;
      }
      return false;
    }
  }, {
    key: "nativeEmoji",
    value: function nativeEmoji(unicodeEmoji) {
      if (this._nativeEmojis.hasOwnProperty(unicodeEmoji)) {
        return this._nativeEmojis[unicodeEmoji];
      }
      return null;
    }
  }, {
    key: "search",
    value: function search(value, maxResults) {
      var _this2 = this;
      maxResults || (maxResults = 75);
      if (!value.length) {
        return null;
      }
      if (value == '-' || value == '-1') {
        return [this.emoji('-1')];
      }
      var values = value.toLowerCase().split(/[\s|,|\-|_]+/);
      var allResults = [];
      if (values.length > 2) {
        values = [values[0], values[1]];
      }
      allResults = values.map(function (value) {
        // Start searchin in the global list of emojis
        var emojis = _this2._emojis;
        var currentIndex = _this2._searchIndex;
        var length = 0;
        var _loop = function _loop() {
          var char = value[charIndex];
          length++;
          currentIndex[char] || (currentIndex[char] = {});
          currentIndex = currentIndex[char];
          if (!currentIndex.results) {
            var scores = {};
            currentIndex.results = [];
            currentIndex.emojis = {};
            for (var emojiId in emojis) {
              var emoji = emojis[emojiId];
              // search is a comma-separated string with words, related
              // to the emoji, for example:
              // search: "smiley,smiling,face,joy,haha,:d,:),smile,funny,=),=-)",
              var search = emoji._data.search;
              var sub = value.substr(0, length);
              var subIndex = search.indexOf(sub);
              if (subIndex != -1) {
                var score = subIndex + 1;
                if (sub == emojiId) score = 0;
                currentIndex.results.push(emoji);
                currentIndex.emojis[emojiId] = emoji;
                scores[emojiId] = score;
              }
            }
            currentIndex.results.sort(function (a, b) {
              var aScore = scores[a.id],
                bScore = scores[b.id];
              return aScore - bScore;
            });
          }

          // continue search in the reduced set of emojis
          emojis = currentIndex.emojis;
        };
        for (var charIndex = 0; charIndex < value.length; charIndex++) {
          _loop();
        }
        return currentIndex.results;
        // The "filter" call removes undefined values from allResults
        // array, for example, if we have "test " (with trailing space),
        // we will get "[Array, undefined]" for allResults and after
        // the "filter" call it will turn into "[Array]"
      }).filter(function (a) {
        return a;
      });
      var results = null;
      if (allResults.length > 1) {
        results = _index__WEBPACK_IMPORTED_MODULE_2__.intersect.apply(null, allResults);
      } else if (allResults.length) {
        results = allResults[0];
      } else {
        results = [];
      }
      if (results && results.length > maxResults) {
        results = results.slice(0, maxResults);
      }
      return results;
    }
  }, {
    key: "addCustomEmoji",
    value: function addCustomEmoji(customEmoji) {
      var emojiData = Object.assign({}, customEmoji, {
        id: customEmoji.short_names[0],
        custom: true
      });
      if (!emojiData.search) {
        emojiData.search = (0,_data__WEBPACK_IMPORTED_MODULE_3__.buildSearch)(emojiData);
      }
      var emoji = new EmojiData(emojiData);
      this._emojis[emoji.id] = emoji;
      this._customCategory.emojis.push(emoji);
      return emoji;
    }
  }, {
    key: "addEmoji",
    value: function addEmoji(emojiId) {
      var _this3 = this;
      // We expect the correct emoji id that is present in the emojis data.
      var data = this._data.emojis[emojiId];
      if (!this.isEmojiNeeded(data)) {
        return false;
      }
      var emoji = new EmojiData(data);
      this._emojis[emojiId] = emoji;
      if (emoji.native) {
        this._nativeEmojis[emoji.native] = emoji;
      }
      if (emoji._skins) {
        for (var idx in emoji._skins) {
          var skin = emoji._skins[idx];
          if (skin.native) {
            this._nativeEmojis[skin.native] = skin;
          }
        }
      }
      if (emoji.emoticons) {
        emoji.emoticons.forEach(function (emoticon) {
          if (_this3._emoticons[emoticon]) {
            return;
          }
          _this3._emoticons[emoticon] = emojiId;
        });
      }
      return emoji;
    }

    /**
     * Check if we need to include given category.
     *
     * @param {string} category_id - The category id.
     * @return {boolean} - Whether to include the emoji.
     */
  }, {
    key: "isCategoryNeeded",
    value: function isCategoryNeeded(category_id) {
      var isIncluded = this._include && this._include.length ? this._include.indexOf(category_id) > -1 : true;
      var isExcluded = this._exclude && this._exclude.length ? this._exclude.indexOf(category_id) > -1 : false;
      if (!isIncluded || isExcluded) {
        return false;
      }
      return true;
    }

    /**
     * Check if we need to include given emoji.
     *
     * @param {object} emoji - The raw emoji object.
     * @return {boolean} - Whether to include the emoji.
     */
  }, {
    key: "isEmojiNeeded",
    value: function isEmojiNeeded(emoji) {
      if (this._emojisFilter) {
        return this._emojisFilter(emoji);
      }
      return true;
    }

    // Update the recent category
  }, {
    key: "updateRecentCategory",
    value: function updateRecentCategory() {
      var _this4 = this;
      if (this.isCategoryNeeded('recent')) {
        var recentEmojis = this.recent || _frequently__WEBPACK_IMPORTED_MODULE_4__["default"].get(this.recentLength, true);
        var newRecentEmojis = [];
        if (recentEmojis.length) {
          recentEmojis.map(function (id) {
            var _iterator2 = _createForOfIteratorHelper(_this4._customCategory.emojis),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var customEmoji = _step2.value;
                if (customEmoji.id === id) {
                  newRecentEmojis.push(customEmoji);
                  return;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            if (_this4.hasEmoji(id)) {
              newRecentEmojis.push(_this4.emoji(id));
            }
            return;
          });
        }
        // Add recent category to the top
        var isExistRecentCategory = this._categories.some(function (category) {
          return category.id === 'recent';
        });
        if (newRecentEmojis.length && !isExistRecentCategory) {
          this._categories.unshift(this._recentCategory);
        }
        this._recentCategory.emojis = newRecentEmojis;
      }
    }
  }]);
}();
var EmojiData = /*#__PURE__*/function () {
  function EmojiData(data) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EmojiData);
    this._data = Object.assign({}, data);
    this._skins = null;
    if (this._data.skin_variations) {
      this._skins = [];
      for (var skinIdx in SKINS) {
        var skinKey = SKINS[skinIdx];
        var variationData = this._data.skin_variations[skinKey];
        var skinData = Object.assign({}, data);
        for (var k in variationData) {
          skinData[k] = variationData[k];
        }
        delete skinData.skin_variations;
        skinData['skin_tone'] = parseInt(skinIdx) + 1;
        this._skins.push(new EmojiData(skinData));
      }
    }
    this._sanitized = sanitize(this._data);
    for (var key in this._sanitized) {
      this[key] = this._sanitized[key];
    }
    this.short_names = this._data.short_names;
    this.short_name = this._data.short_names[0];
    Object.freeze(this);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EmojiData, [{
    key: "getSkin",
    value: function getSkin(skinIdx) {
      if (skinIdx && skinIdx != 'native' && this._skins) {
        return this._skins[skinIdx - 1];
      }
      return this;
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      var adjustedColumns = SHEET_COLUMNS - 1,
        x = +(100 / adjustedColumns * this._data.sheet_x).toFixed(2),
        y = +(100 / adjustedColumns * this._data.sheet_y).toFixed(2);
      return "".concat(x, "% ").concat(y, "%");
    }
  }, {
    key: "ariaLabel",
    value: function ariaLabel() {
      return [this.native].concat(this.short_names).filter(Boolean).join(', ');
    }
  }]);
}();
var EmojiView = /*#__PURE__*/function () {
  /**
   * emoji - Emoji to display
   * set - string, emoji set name
   * native - boolean, whether to render native emoji
   * fallback - fallback function to render missing emoji, optional
   * emojiTooltip - wether we need to show the emoji tooltip, optional
   * emojiSize - emoji size in pixels, optional
   */
  function EmojiView(emoji, skin, set, native, fallback, emojiTooltip, emojiSize) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EmojiView);
    this._emoji = emoji;
    this._native = native;
    this._skin = skin;
    this._set = set;
    this._fallback = fallback;
    this.canRender = this._canRender();
    this.cssClass = this._cssClass();
    this.cssStyle = this._cssStyle(emojiSize);
    this.content = this._content();
    this.title = emojiTooltip === true ? emoji.short_name : null;
    this.ariaLabel = emoji.ariaLabel();
    Object.freeze(this);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EmojiView, [{
    key: "getEmoji",
    value: function getEmoji() {
      return this._emoji.getSkin(this._skin);
    }
  }, {
    key: "_canRender",
    value: function _canRender() {
      return this._isCustom() || this._isNative() || this._hasEmoji() || this._fallback;
    }
  }, {
    key: "_cssClass",
    value: function _cssClass() {
      return ['emoji-set-' + this._set, 'emoji-type-' + this._emojiType()];
    }
  }, {
    key: "_cssStyle",
    value: function _cssStyle(emojiSize) {
      var cssStyle = {};
      if (this._isCustom()) {
        cssStyle = {
          backgroundImage: 'url(' + this.getEmoji()._data.imageUrl + ')',
          backgroundSize: '100%',
          width: emojiSize + 'px',
          height: emojiSize + 'px'
        };
      } else if (this._hasEmoji() && !this._isNative()) {
        cssStyle = {
          backgroundPosition: this.getEmoji().getPosition()
        };
      }
      if (emojiSize) {
        if (this._isNative()) {
          // Set font-size for native emoji.
          cssStyle = Object.assign(cssStyle, {
            // font-size is used for native emoji which we need
            // to scale with 0.95 factor to have them look approximately
            // the same size as image-based emoji.
            fontSize: Math.round(emojiSize * 0.95 * 10) / 10 + 'px'
          });
        } else {
          // Set width/height for image emoji.
          cssStyle = Object.assign(cssStyle, {
            width: emojiSize + 'px',
            height: emojiSize + 'px'
          });
        }
      }
      return cssStyle;
    }
  }, {
    key: "_content",
    value: function _content() {
      if (this._isCustom()) {
        return '';
      }
      if (this._isNative()) {
        return this.getEmoji().native;
      }
      if (this._hasEmoji()) {
        return '';
      }
      return this._fallback ? this._fallback(this.getEmoji()) : null;
    }
  }, {
    key: "_isNative",
    value: function _isNative() {
      return this._native;
    }
  }, {
    key: "_isCustom",
    value: function _isCustom() {
      return this.getEmoji().custom;
    }
  }, {
    key: "_hasEmoji",
    value: function _hasEmoji() {
      if (!this.getEmoji()._data) {
        // Return false if we have no data.
        return false;
      }
      var hasImage = this.getEmoji()._data['has_img_' + this._set];
      if (hasImage === undefined) {
        // If there is no has_img_xxx in the data, we are working with
        // specific data file, like facebook.json, so we assume all
        // emojis are available (the :set setting for picker should
        // match the data file).
        return true;
      }
      // Otherwise, we are using all.json and can switch between different
      // sets - in this case the `has_img_{set_name}` is a boolean that
      // indicates if there is such image or not for a given set.
      return hasImage;
    }
  }, {
    key: "_emojiType",
    value: function _emojiType() {
      if (this._isCustom()) {
        return 'custom';
      }
      if (this._isNative()) {
        return 'native';
      }
      if (this._hasEmoji()) {
        return 'image';
      }
      return 'fallback';
    }
  }]);
}();
function sanitize(emoji) {
  var name = emoji.name,
    short_names = emoji.short_names,
    skin_tone = emoji.skin_tone,
    skin_variations = emoji.skin_variations,
    emoticons = emoji.emoticons,
    unified = emoji.unified,
    custom = emoji.custom,
    imageUrl = emoji.imageUrl,
    id = emoji.id || short_names[0],
    colons = ":".concat(id, ":");
  if (custom) {
    return {
      id: id,
      name: name,
      colons: colons,
      emoticons: emoticons,
      custom: custom,
      imageUrl: imageUrl
    };
  }
  if (skin_tone) {
    colons += ":skin-tone-".concat(skin_tone, ":");
  }
  return {
    id: id,
    name: name,
    colons: colons,
    emoticons: emoticons,
    unified: unified.toLowerCase(),
    skin: skin_tone || (skin_variations ? 1 : null),
    native: (0,_index__WEBPACK_IMPORTED_MODULE_2__.unifiedToNative)(unified)
  };
}

/***/ }),

/***/ "./src/utils/frequently.js":
/*!*********************************!*\
  !*** ./src/utils/frequently.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/utils/store.js");

var DEFAULTS = ['+1', 'grinning', 'kissing_heart', 'heart_eyes', 'laughing', 'stuck_out_tongue_winking_eye', 'sweat_smile', 'joy', 'scream', 'disappointed', 'unamused', 'weary', 'sob', 'sunglasses', 'heart', 'hankey'];
var frequently, initialized;
var defaults = {};
function init() {
  initialized = true;
  frequently = _store__WEBPACK_IMPORTED_MODULE_0__["default"].get('frequently');
}
function add(emoji) {
  if (!initialized) init();
  var id = emoji.id;
  frequently || (frequently = defaults);
  frequently[id] || (frequently[id] = 0);
  frequently[id] += 1;
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].set('last', id);
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].set('frequently', frequently);
}
function get(maxNumber) {
  var forceUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (forceUpdate) {
    frequently = undefined;
    initialized = false;
  }
  if (!initialized) init();
  if (!frequently) {
    defaults = {};
    var result = [];
    var defaultLength = Math.min(maxNumber, DEFAULTS.length);
    for (var i = 0; i < defaultLength; i++) {
      defaults[DEFAULTS[i]] = parseInt((defaultLength - i) / 4, 10) + 1;
      result.push(DEFAULTS[i]);
    }
    return result;
  }
  var quantity = maxNumber;
  var frequentlyKeys = [];
  for (var key in frequently) {
    if (frequently.hasOwnProperty(key)) {
      frequentlyKeys.push(key);
    }
  }
  var sorted = frequentlyKeys.sort(function (a, b) {
    return frequently[a] - frequently[b];
  }).reverse();
  var sliced = sorted.slice(0, quantity);
  var last = _store__WEBPACK_IMPORTED_MODULE_0__["default"].get('last');
  if (last && sliced.indexOf(last) == -1) {
    sliced.pop();
    sliced.push(last);
  }
  return sliced;
}
/* harmony default export */ __webpack_exports__["default"] = ({
  add: add,
  get: get
});

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deepMerge: function() { return /* binding */ deepMerge; },
/* harmony export */   intersect: function() { return /* binding */ intersect; },
/* harmony export */   measureScrollbar: function() { return /* binding */ measureScrollbar; },
/* harmony export */   unifiedToNative: function() { return /* binding */ unifiedToNative; },
/* harmony export */   uniq: function() { return /* binding */ uniq; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _polyfills_stringFromCodePoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/stringFromCodePoint */ "./src/polyfills/stringFromCodePoint.js");


function unifiedToNative(unified) {
  var unicodes = unified.split('-'),
    codePoints = unicodes.map(function (u) {
      return "0x".concat(u);
    });
  return _polyfills_stringFromCodePoint__WEBPACK_IMPORTED_MODULE_1__["default"].apply(null, codePoints);
}
function uniq(arr) {
  return arr.reduce(function (acc, item) {
    if (acc.indexOf(item) === -1) {
      acc.push(item);
    }
    return acc;
  }, []);
}
function intersect(a, b) {
  var uniqA = uniq(a);
  var uniqB = uniq(b);
  return uniqA.filter(function (item) {
    return uniqB.indexOf(item) >= 0;
  });
}
function deepMerge(a, b) {
  var o = {};
  for (var key in a) {
    var originalValue = a[key],
      value = originalValue;
    if (Object.prototype.hasOwnProperty.call(b, key)) {
      value = b[key];
    }
    if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'object') {
      value = deepMerge(originalValue, value);
    }
    o[key] = value;
  }
  return o;
}

// https://github.com/sonicdoe/measure-scrollbar
function measureScrollbar() {
  if (typeof document == 'undefined') return 0;
  var div = document.createElement('div');
  div.style.width = '100px';
  div.style.height = '100px';
  div.style.overflow = 'scroll';
  div.style.position = 'absolute';
  div.style.top = '-9999px';
  document.body.appendChild(div);
  var scrollbarWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);
  return scrollbarWidth;
}


/***/ }),

/***/ "./src/utils/picker.js":
/*!*****************************!*\
  !*** ./src/utils/picker.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PickerView: function() { return /* binding */ PickerView; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var PickerView = /*#__PURE__*/function () {
  function PickerView(pickerComponent) {
    var _this$_categories;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PickerView);
    this._vm = pickerComponent;
    this._data = pickerComponent.data;
    this._perLine = pickerComponent.perLine;
    this._categories = [];
    (_this$_categories = this._categories).push.apply(_this$_categories, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this._data.categories()));
    this._categories = this._categories.filter(function (category) {
      return category.emojis.length > 0;
    });
    this._categories[0].first = true;
    Object.freeze(this._categories);
    this.activeCategory = this._categories[0];
    this.searchEmojis = null;

    // Preview emoji, shown on mouse over or when we move
    // with arrow keys.
    this.previewEmoji = null;
    // Indexes are used to keep the position when moving
    // with arrows: current category and current emoji
    // inside the category.
    this.previewEmojiCategoryIdx = 0;
    this.previewEmojiIdx = -1;
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PickerView, [{
    key: "onScroll",
    value: function onScroll() {
      var scrollElement = this._vm.$refs.scroll;
      var scrollTop = scrollElement.scrollTop;
      var activeCategory = this.filteredCategories[0];
      for (var i = 0, l = this.filteredCategories.length; i < l; i++) {
        var category = this.filteredCategories[i];
        var component = this._vm.getCategoryComponent(i);
        // The `-50` offset switches active category (selected in the
        // anchors bar) a bit eariler, before it actually reaches the top.
        if (component && component.$el.offsetTop - 50 > scrollTop) {
          break;
        }
        activeCategory = category;
      }
      this.activeCategory = activeCategory;
    }
  }, {
    key: "allCategories",
    get: function get() {
      return this._categories;
    }
  }, {
    key: "filteredCategories",
    get: function get() {
      if (this.searchEmojis) {
        return [{
          id: 'search',
          name: 'Search',
          emojis: this.searchEmojis
        }];
      }
      return this._categories.filter(function (category) {
        var hasEmojis = category.emojis.length > 0;
        return hasEmojis;
      });
    }
  }, {
    key: "previewEmojiCategory",
    get: function get() {
      if (this.previewEmojiCategoryIdx >= 0) {
        return this.filteredCategories[this.previewEmojiCategoryIdx];
      }
      return null;
    }
  }, {
    key: "onAnchorClick",
    value: function onAnchorClick(category) {
      var _this = this;
      if (this.searchEmojis) {
        // No categories are shown when search is active.
        return;
      }
      var i = this.filteredCategories.indexOf(category);
      var component = this._vm.getCategoryComponent(i);
      var scrollToComponent = function scrollToComponent() {
        if (component) {
          var top = component.$el.offsetTop;
          if (category.first) {
            top = 0;
          }
          _this._vm.$refs.scroll.scrollTop = top;
        }
      };
      if (this._vm.infiniteScroll) {
        scrollToComponent();
      } else {
        this.activeCategory = this.filteredCategories[i];
      }
    }
  }, {
    key: "onSearch",
    value: function onSearch(value) {
      var emojis = this._data.search(value, this.maxSearchResults);
      this.searchEmojis = emojis;
      this.previewEmojiCategoryIdx = 0;
      this.previewEmojiIdx = 0;
      this.updatePreviewEmoji();
    }
  }, {
    key: "onEmojiEnter",
    value: function onEmojiEnter(emoji) {
      this.previewEmoji = emoji;
      this.previewEmojiIdx = -1;
      this.previewEmojiCategoryIdx = -1;
    }
  }, {
    key: "onEmojiLeave",
    value: function onEmojiLeave(emoji) {
      this.previewEmoji = null;
    }
  }, {
    key: "onArrowLeft",
    value: function onArrowLeft() {
      // Moving left, decrease emoji index.
      if (this.previewEmojiIdx > 0) {
        this.previewEmojiIdx -= 1;
      } else {
        // If emoji index is zero, go to the previous category.
        this.previewEmojiCategoryIdx -= 1;
        if (this.previewEmojiCategoryIdx < 0) {
          // If we reached first category, keep it.
          this.previewEmojiCategoryIdx = 0;
        } else {
          // Update emoji index - we moved to the previous category,
          // get the last emoji in it.
          this.previewEmojiIdx = this.filteredCategories[this.previewEmojiCategoryIdx].emojis.length - 1;
        }
      }
      this.updatePreviewEmoji();
    }
  }, {
    key: "onArrowRight",
    value: function onArrowRight() {
      if (this.previewEmojiIdx < this.emojisLength(this.previewEmojiCategoryIdx) - 1) {
        // Moving right within category, increase emoji index.
        this.previewEmojiIdx += 1;
      } else {
        // Go to the next category.
        this.previewEmojiCategoryIdx += 1;
        if (this.previewEmojiCategoryIdx >= this.filteredCategories.length) {
          // If we reached the last category - keep it.
          this.previewEmojiCategoryIdx = this.filteredCategories.length - 1;
        } else {
          // If we moved to the next category, update emoji index to the
          // first emoji in the new category.
          this.previewEmojiIdx = 0;
        }
      }
      this.updatePreviewEmoji();
    }
  }, {
    key: "onArrowDown",
    value: function onArrowDown() {
      // If we are out of the emoji control (index is -1), select the first
      // emoji in the first category by calling `onArrowRight`.
      if (this.previewEmojiIdx == -1) {
        return this.onArrowRight();
      }
      var categoryLength = this.filteredCategories[this.previewEmojiCategoryIdx].emojis.length;

      // When moving down, we can move `_perLine` icons right to
      // jump to the same position in the next row.
      var diff = this._perLine;

      // TODO: previewCategory should match activeCategory
      // (so it would be both highlighted in UI and used
      // when we start moving with arrows after clicking
      // the category).

      // Note: probably we can alwasy take current row length
      // as a `diff` - it will fit both case of any row and
      // special case of the last row.
      // Note: it can be also easier to update indexes
      // directly here instead of calling onArrowRight.
      // Same is true for `onArrowUp`.

      // Unless if we are on the last row of the category and
      // there are less then `_perLine` emojis in it.
      // In this case we use the last row length as diff
      // so we go straight down, for example:
      //
      //   1 2 3 4 5 6
      //   7 8 9
      //   A B C D E F
      //
      // If we go down from `8`, we need to move 3 emojis right
      // to lend at `B` (and 3 is the length of the last row of
      // this category).
      // And if we used 6 instead (row length, `_perLine`), we would
      // lend up at `E`.
      if (this.previewEmojiIdx + diff > categoryLength) {
        // Calculate the last row length.
        diff = categoryLength % this._perLine;
      }
      for (var i = 0; i < diff; i++) {
        this.onArrowRight();
      }
      this.updatePreviewEmoji();
    }
  }, {
    key: "onArrowUp",
    value: function onArrowUp() {
      // Similar to `onArrowDown`, to move up we can move left
      // by `_perLine` number of emojis.
      var diff = this._perLine;
      if (this.previewEmojiIdx - diff < 0) {
        if (this.previewEmojiCategoryIdx > 0) {
          // Unless if we are on the first line of the category and
          // the last line in the previous category is shorter than
          // `_perLine`.
          // In this case we use the last row length as diff, so
          // we go straight up, for example:
          //
          //   1 2 3 4 5
          //   6 7 8
          //   9 A B C D
          //
          // If we go up from `A`, we need to move 3 emojis left to get
          // to `7` (and 3 is the length of the last row of the previous
          // category).
          var prevCategoryLastRowLength = this.filteredCategories[this.previewEmojiCategoryIdx - 1].emojis.length % this._perLine;
          // diff = this.previewEmojiIdx + prevCategoryLastRowLength
          diff = prevCategoryLastRowLength;
        } else {
          diff = 0;
        }
      }
      for (var i = 0; i < diff; i++) {
        this.onArrowLeft();
      }
      this.updatePreviewEmoji();
    }
  }, {
    key: "updatePreviewEmoji",
    value: function updatePreviewEmoji() {
      var _this2 = this;
      this.previewEmoji = this.filteredCategories[this.previewEmojiCategoryIdx].emojis[this.previewEmojiIdx];
      this._vm.$nextTick(function () {
        // Scroll the view if the `previewEmoji` goes out of the visible area.
        var scrollEl = _this2._vm.$refs.scroll;

        // Note: it would be more Vue-ish to mark all emojis with `ref`s
        // and then do something similar here to what we do in the
        // `getCategories` instead of using `querySelector` directly,
        // but I am not sure if having many refs would affect the performance
        // (it might, so I use `querySelector` for now).
        var emojiEl = scrollEl.querySelector('.emoji-mart-emoji-selected');
        var scrollHeight = scrollEl.offsetTop - scrollEl.offsetHeight;
        if (emojiEl && emojiEl.offsetTop + emojiEl.offsetHeight > scrollHeight + scrollEl.scrollTop) {
          scrollEl.scrollTop += emojiEl.offsetHeight;
        }
        if (emojiEl && emojiEl.offsetTop < scrollEl.scrollTop) {
          scrollEl.scrollTop -= emojiEl.offsetHeight;
        }
      });
    }
  }, {
    key: "emojisLength",
    value: function emojisLength(categoryIdx) {
      if (categoryIdx == -1) {
        return 0;
      }
      return this.filteredCategories[categoryIdx].emojis.length;
    }
  }]);
}();

/***/ }),

/***/ "./src/utils/shared-props.js":
/*!***********************************!*\
  !*** ./src/utils/shared-props.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmojiProps: function() { return /* binding */ EmojiProps; },
/* harmony export */   PickerProps: function() { return /* binding */ PickerProps; }
/* harmony export */ });
var EmojiProps = {
  native: {
    type: Boolean,
    default: false
  },
  tooltip: {
    type: Boolean,
    default: false
  },
  fallback: {
    type: Function
  },
  skin: {
    type: Number,
    default: 1
  },
  set: {
    type: String,
    default: 'apple'
  },
  emoji: {
    type: [String, Object],
    required: true
  },
  size: {
    type: Number,
    default: null
  },
  tag: {
    type: String,
    default: 'span'
  }
};
var PickerProps = {
  perLine: {
    type: Number,
    default: 9
  },
  maxSearchResults: {
    type: Number,
    default: 75
  },
  emojiSize: {
    type: Number,
    default: 24
  },
  title: {
    type: String,
    default: 'Emoji Mart™'
  },
  emoji: {
    type: String,
    default: 'department_store'
  },
  color: {
    type: String,
    default: '#ae65c5'
  },
  set: {
    type: String,
    default: 'apple'
  },
  skin: {
    type: Number,
    default: null
  },
  defaultSkin: {
    type: Number,
    default: 1
  },
  native: {
    type: Boolean,
    default: false
  },
  emojiTooltip: {
    type: Boolean,
    default: false
  },
  autoFocus: {
    type: Boolean,
    default: false
  },
  i18n: {
    type: Object,
    default: function _default() {
      return {};
    }
  },
  showPreview: {
    type: Boolean,
    default: true
  },
  showSearch: {
    type: Boolean,
    default: true
  },
  showCategories: {
    type: Boolean,
    default: true
  },
  showSkinTones: {
    type: Boolean,
    default: true
  },
  infiniteScroll: {
    type: Boolean,
    default: true
  },
  pickerStyles: {
    type: Object,
    default: function _default() {
      return {};
    }
  }
};


/***/ }),

/***/ "./src/utils/store.js":
/*!****************************!*\
  !*** ./src/utils/store.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var NAMESPACE = 'emoji-mart';
var _JSON = JSON;
var isLocalStorageSupported = typeof window !== 'undefined' && 'localStorage' in window;
var getter;
var setter;
function setHandlers(handlers) {
  handlers || (handlers = {});
  getter = handlers.getter;
  setter = handlers.setter;
}
function setNamespace(namespace) {
  NAMESPACE = namespace;
}
function update(state) {
  for (var key in state) {
    var value = state[key];
    set(key, value);
  }
}
function set(key, value) {
  if (setter) {
    setter(key, value);
  } else {
    if (!isLocalStorageSupported) return;
    try {
      window.localStorage["".concat(NAMESPACE, ".").concat(key)] = _JSON.stringify(value);
    } catch (e) {}
  }
}
function get(key) {
  if (getter) {
    return getter(key);
  } else {
    if (!isLocalStorageSupported) return;
    try {
      var value = window.localStorage["".concat(NAMESPACE, ".").concat(key)];
    } catch (e) {
      return;
    }
    if (value) {
      return JSON.parse(value);
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = ({
  update: update,
  set: set,
  get: get,
  setNamespace: setNamespace,
  setHandlers: setHandlers
});

/***/ }),

/***/ "./src/vendor/raf-polyfill.js":
/*!************************************!*\
  !*** ./src/vendor/raf-polyfill.js ***!
  \************************************/
/***/ (function() {

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

// MIT license

var isWindowAvailable = typeof window !== 'undefined';
isWindowAvailable && function () {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }
  if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = window.setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
  if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
    clearTimeout(id);
  };
}();

/***/ }),

/***/ "./src/components/Emoji.vue":
/*!**********************************!*\
  !*** ./src/components/Emoji.vue ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Emoji_vue_vue_type_template_id_534ad946__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Emoji.vue?vue&type=template&id=534ad946 */ "./src/components/Emoji.vue?vue&type=template&id=534ad946");
/* harmony import */ var _Emoji_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Emoji.vue?vue&type=script&lang=js */ "./src/components/Emoji.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Emoji_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Emoji_vue_vue_type_template_id_534ad946__WEBPACK_IMPORTED_MODULE_0__.render,
  _Emoji_vue_vue_type_template_id_534ad946__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Emoji.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Picker.vue":
/*!***********************************!*\
  !*** ./src/components/Picker.vue ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Picker_vue_vue_type_template_id_d16e9084__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Picker.vue?vue&type=template&id=d16e9084 */ "./src/components/Picker.vue?vue&type=template&id=d16e9084");
/* harmony import */ var _Picker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Picker.vue?vue&type=script&lang=js */ "./src/components/Picker.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Picker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Picker_vue_vue_type_template_id_d16e9084__WEBPACK_IMPORTED_MODULE_0__.render,
  _Picker_vue_vue_type_template_id_d16e9084__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Picker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/anchors.vue":
/*!************************************!*\
  !*** ./src/components/anchors.vue ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _anchors_vue_vue_type_template_id_51188104__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anchors.vue?vue&type=template&id=51188104 */ "./src/components/anchors.vue?vue&type=template&id=51188104");
/* harmony import */ var _anchors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anchors.vue?vue&type=script&lang=js */ "./src/components/anchors.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _anchors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _anchors_vue_vue_type_template_id_51188104__WEBPACK_IMPORTED_MODULE_0__.render,
  _anchors_vue_vue_type_template_id_51188104__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/anchors.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/category.vue":
/*!*************************************!*\
  !*** ./src/components/category.vue ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category_vue_vue_type_template_id_376cda0e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.vue?vue&type=template&id=376cda0e */ "./src/components/category.vue?vue&type=template&id=376cda0e");
/* harmony import */ var _category_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.vue?vue&type=script&lang=js */ "./src/components/category.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _category_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _category_vue_vue_type_template_id_376cda0e__WEBPACK_IMPORTED_MODULE_0__.render,
  _category_vue_vue_type_template_id_376cda0e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/preview.vue":
/*!************************************!*\
  !*** ./src/components/preview.vue ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _preview_vue_vue_type_template_id_35056c30__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preview.vue?vue&type=template&id=35056c30 */ "./src/components/preview.vue?vue&type=template&id=35056c30");
/* harmony import */ var _preview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preview.vue?vue&type=script&lang=js */ "./src/components/preview.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _preview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _preview_vue_vue_type_template_id_35056c30__WEBPACK_IMPORTED_MODULE_0__.render,
  _preview_vue_vue_type_template_id_35056c30__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/preview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/search.vue":
/*!***********************************!*\
  !*** ./src/components/search.vue ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_vue_vue_type_template_id_4ad41bb8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.vue?vue&type=template&id=4ad41bb8 */ "./src/components/search.vue?vue&type=template&id=4ad41bb8");
/* harmony import */ var _search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.vue?vue&type=script&lang=js */ "./src/components/search.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _search_vue_vue_type_template_id_4ad41bb8__WEBPACK_IMPORTED_MODULE_0__.render,
  _search_vue_vue_type_template_id_4ad41bb8__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/skins.vue":
/*!**********************************!*\
  !*** ./src/components/skins.vue ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _skins_vue_vue_type_template_id_1c614894__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skins.vue?vue&type=template&id=1c614894 */ "./src/components/skins.vue?vue&type=template&id=1c614894");
/* harmony import */ var _skins_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skins.vue?vue&type=script&lang=js */ "./src/components/skins.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _skins_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _skins_vue_vue_type_template_id_1c614894__WEBPACK_IMPORTED_MODULE_0__.render,
  _skins_vue_vue_type_template_id_1c614894__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/skins.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Emoji.vue?vue&type=script&lang=js":
/*!**********************************************************!*\
  !*** ./src/components/Emoji.vue?vue&type=script&lang=js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_Emoji_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Emoji.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Emoji.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_Emoji_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Picker.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./src/components/Picker.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Picker.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Picker.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/anchors.vue?vue&type=script&lang=js":
/*!************************************************************!*\
  !*** ./src/components/anchors.vue?vue&type=script&lang=js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_anchors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./anchors.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/anchors.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_anchors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/category.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./src/components/category.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./category.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/category.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/preview.vue?vue&type=script&lang=js":
/*!************************************************************!*\
  !*** ./src/components/preview.vue?vue&type=script&lang=js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./preview.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/preview.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/search.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./src/components/search.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./search.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/search.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/skins.vue?vue&type=script&lang=js":
/*!**********************************************************!*\
  !*** ./src/components/skins.vue?vue&type=script&lang=js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_skins_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./skins.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/skins.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_skins_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Emoji.vue?vue&type=template&id=534ad946":
/*!****************************************************************!*\
  !*** ./src/components/Emoji.vue?vue&type=template&id=534ad946 ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Emoji_vue_vue_type_template_id_534ad946__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Emoji_vue_vue_type_template_id_534ad946__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Emoji_vue_vue_type_template_id_534ad946__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Emoji.vue?vue&type=template&id=534ad946 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Emoji.vue?vue&type=template&id=534ad946");


/***/ }),

/***/ "./src/components/Picker.vue?vue&type=template&id=d16e9084":
/*!*****************************************************************!*\
  !*** ./src/components/Picker.vue?vue&type=template&id=d16e9084 ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_template_id_d16e9084__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_template_id_d16e9084__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_template_id_d16e9084__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Picker.vue?vue&type=template&id=d16e9084 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Picker.vue?vue&type=template&id=d16e9084");


/***/ }),

/***/ "./src/components/anchors.vue?vue&type=template&id=51188104":
/*!******************************************************************!*\
  !*** ./src/components/anchors.vue?vue&type=template&id=51188104 ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_anchors_vue_vue_type_template_id_51188104__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_anchors_vue_vue_type_template_id_51188104__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_anchors_vue_vue_type_template_id_51188104__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./anchors.vue?vue&type=template&id=51188104 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/anchors.vue?vue&type=template&id=51188104");


/***/ }),

/***/ "./src/components/category.vue?vue&type=template&id=376cda0e":
/*!*******************************************************************!*\
  !*** ./src/components/category.vue?vue&type=template&id=376cda0e ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_376cda0e__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_376cda0e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_376cda0e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./category.vue?vue&type=template&id=376cda0e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/category.vue?vue&type=template&id=376cda0e");


/***/ }),

/***/ "./src/components/preview.vue?vue&type=template&id=35056c30":
/*!******************************************************************!*\
  !*** ./src/components/preview.vue?vue&type=template&id=35056c30 ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_template_id_35056c30__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_template_id_35056c30__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_template_id_35056c30__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./preview.vue?vue&type=template&id=35056c30 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/preview.vue?vue&type=template&id=35056c30");


/***/ }),

/***/ "./src/components/search.vue?vue&type=template&id=4ad41bb8":
/*!*****************************************************************!*\
  !*** ./src/components/search.vue?vue&type=template&id=4ad41bb8 ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_4ad41bb8__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_4ad41bb8__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_4ad41bb8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./search.vue?vue&type=template&id=4ad41bb8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/search.vue?vue&type=template&id=4ad41bb8");


/***/ }),

/***/ "./src/components/skins.vue?vue&type=template&id=1c614894":
/*!****************************************************************!*\
  !*** ./src/components/skins.vue?vue&type=template&id=1c614894 ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_skins_vue_vue_type_template_id_1c614894__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_skins_vue_vue_type_template_id_1c614894__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_skins_vue_vue_type_template_id_1c614894__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./skins.vue?vue&type=template&id=1c614894 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/skins.vue?vue&type=template&id=1c614894");


/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ normalizeComponent; }
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithoutHoles; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createClass; }
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(obj, key, value) {
  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableSpread; }
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toConsumableArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ toPrimitive; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ toPropertyKey; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : i + "";
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Anchors: function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Anchors; },
/* harmony export */   Category: function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Category; },
/* harmony export */   Emoji: function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Emoji; },
/* harmony export */   EmojiData: function() { return /* reexport safe */ _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__.EmojiData; },
/* harmony export */   EmojiIndex: function() { return /* reexport safe */ _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__.EmojiIndex; },
/* harmony export */   EmojiView: function() { return /* reexport safe */ _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__.EmojiView; },
/* harmony export */   Picker: function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Picker; },
/* harmony export */   Preview: function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Preview; },
/* harmony export */   Search: function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Search; },
/* harmony export */   Skins: function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Skins; },
/* harmony export */   frequently: function() { return /* reexport safe */ _utils_frequently__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   sanitize: function() { return /* reexport safe */ _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__.sanitize; },
/* harmony export */   store: function() { return /* reexport safe */ _utils_store__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   uncompress: function() { return /* reexport safe */ _utils_data__WEBPACK_IMPORTED_MODULE_1__.uncompress; }
/* harmony export */ });
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/store */ "./src/utils/store.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/data */ "./src/utils/data.js");
/* harmony import */ var _utils_frequently__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/frequently */ "./src/utils/frequently.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/components/index.js");
/* harmony import */ var _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/emoji-data */ "./src/utils/emoji-data.js");






}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlFQUFpQjtBQUMvRzs7Ozs7Ozs7Ozs7Ozs7OztBQ05rQztBQUNuQjtBQUNmLGtCQUFrQixzREFBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0RBQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVmtDO0FBQ1M7QUFDNUI7QUFDZixVQUFVLDJEQUFXO0FBQ3JCLHFCQUFxQixzREFBTztBQUM1Qjs7Ozs7Ozs7Ozs7Ozs7O0FDTGU7QUFDZjs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7O0FDUnFEO0FBQ3RDO0FBQ2Y7QUFDQSxvQ0FBb0MsZ0VBQWdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRixnRUFBZ0I7QUFDdEc7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDLGVBQWU7V0FDZixpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEEsOENBQThDOzs7OztXQ0E5QztXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05pQztBQUNRO0FBQ0U7QUFVdEI7QUFFMEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FbW9qaU1hcnQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0Vtb2ppTWFydC9zcmMvY29tcG9uZW50cy9FbW9qaS52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3NyYy9jb21wb25lbnRzL1BpY2tlci52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3NyYy9jb21wb25lbnRzL2FuY2hvcnMudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC9zcmMvY29tcG9uZW50cy9jYXRlZ29yeS52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3NyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC9zcmMvY29tcG9uZW50cy9zZWFyY2gudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC9zcmMvY29tcG9uZW50cy9za2lucy52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvRW1vamkudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL1BpY2tlci52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvYW5jaG9ycy52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnkudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2tpbnMudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9wb2x5ZmlsbHMvc3RyaW5nRnJvbUNvZGVQb2ludC5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvc3Zncy9pbmRleC5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvdXRpbHMvZGF0YS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvdXRpbHMvZW1vamktZGF0YS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvdXRpbHMvZnJlcXVlbnRseS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL3BpY2tlci5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvdXRpbHMvc2hhcmVkLXByb3BzLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy91dGlscy9zdG9yZS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvdmVuZG9yL3JhZi1wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9FbW9qaS52dWU/MWIzMyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9QaWNrZXIudnVlPzgyMTgiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvYW5jaG9ycy52dWU/NGI4YyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9jYXRlZ29yeS52dWU/NmM4YiIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9wcmV2aWV3LnZ1ZT8zZGFkIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC52dWU/MzdmNyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9za2lucy52dWU/OGFkYyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9FbW9qaS52dWU/NjBhOCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9QaWNrZXIudnVlPzI5MzIiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvYW5jaG9ycy52dWU/YzUyNyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9jYXRlZ29yeS52dWU/ZTQxNSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9wcmV2aWV3LnZ1ZT9jMDhlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC52dWU/OGNmNiIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9za2lucy52dWU/YzU1YSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9FbW9qaS52dWU/ZDE1MSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9QaWNrZXIudnVlPzUzOTQiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvYW5jaG9ycy52dWU/YzJlOSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9jYXRlZ29yeS52dWU/NTEzOCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9wcmV2aWV3LnZ1ZT9hNGUxIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC52dWU/NTc4OCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9za2lucy52dWU/OTkyOSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvUHJpbWl0aXZlLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1Byb3BlcnR5S2V5LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRW1vamlNYXJ0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkVtb2ppTWFydFwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCI8dGVtcGxhdGU+XG4gIDxjb21wb25lbnRcbiAgICA6aXM9XCJ0YWdcIlxuICAgIHYtaWY9XCJ2aWV3LmNhblJlbmRlclwiXG4gICAgOnRpdGxlPVwidmlldy50aXRsZVwiXG4gICAgOmFyaWEtbGFiZWw9XCJ2aWV3LmFyaWFMYWJlbFwiXG4gICAgOmRhdGEtdGl0bGU9XCJ0aXRsZVwiXG4gICAgY2xhc3M9XCJlbW9qaS1tYXJ0LWVtb2ppXCJcbiAgICBAbW91c2VlbnRlcj1cIm9uTW91c2VFbnRlclwiXG4gICAgQG1vdXNlbGVhdmU9XCJvbk1vdXNlTGVhdmVcIlxuICAgIEBjbGljaz1cIm9uQ2xpY2tcIlxuICA+XG4gICAgPHNwYW4gOmNsYXNzPVwidmlldy5jc3NDbGFzc1wiIDpzdHlsZT1cInZpZXcuY3NzU3R5bGVcIj57e1xuICAgICAgdmlldy5jb250ZW50XG4gICAgfX08L3NwYW4+XG4gIDwvY29tcG9uZW50PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IEVtb2ppUHJvcHMgfSBmcm9tICcuLi91dGlscy9zaGFyZWQtcHJvcHMnXG5pbXBvcnQgeyBFbW9qaVZpZXcgfSBmcm9tICcuLi91dGlscy9lbW9qaS1kYXRhJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgLi4uRW1vamlQcm9wcyxcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICBlbWl0czogW1wiY2xpY2tcIiwgXCJtb3VzZWVudGVyXCIsIFwibW91c2VsZWF2ZVwiXSxcbiAgY29tcHV0ZWQ6IHtcbiAgICB2aWV3KCkge1xuICAgICAgcmV0dXJuIG5ldyBFbW9qaVZpZXcoXG4gICAgICAgIHRoaXMuZW1vamlPYmplY3QsXG4gICAgICAgIHRoaXMuc2tpbixcbiAgICAgICAgdGhpcy5zZXQsXG4gICAgICAgIHRoaXMubmF0aXZlLFxuICAgICAgICB0aGlzLmZhbGxiYWNrLFxuICAgICAgICB0aGlzLnRvb2x0aXAsXG4gICAgICAgIHRoaXMuc2l6ZSxcbiAgICAgIClcbiAgICB9LFxuICAgIHNhbml0aXplZERhdGEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbW9qaU9iamVjdC5fc2FuaXRpemVkXG4gICAgfSxcbiAgICB0aXRsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvb2x0aXAgPyB0aGlzLmVtb2ppT2JqZWN0LnNob3J0X25hbWUgOiBudWxsXG4gICAgfSxcbiAgICBlbW9qaU9iamVjdCgpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5lbW9qaSA9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmZpbmRFbW9qaSh0aGlzLmVtb2ppKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1vamlcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICBjcmVhdGVkKCkge30sXG4gIG1ldGhvZHM6IHtcbiAgICBvbkNsaWNrKCkge1xuICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCB0aGlzLmVtb2ppT2JqZWN0KVxuICAgIH0sXG4gICAgb25Nb3VzZUVudGVyKCkge1xuICAgICAgdGhpcy4kZW1pdCgnbW91c2VlbnRlcicsIHRoaXMuZW1vamlPYmplY3QpXG4gICAgfSxcbiAgICBvbk1vdXNlTGVhdmUoKSB7XG4gICAgICB0aGlzLiRlbWl0KCdtb3VzZWxlYXZlJywgdGhpcy5lbW9qaU9iamVjdClcbiAgICB9LFxuICB9LFxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxzZWN0aW9uIGNsYXNzPVwiZW1vamktbWFydCBlbW9qaS1tYXJ0LXN0YXRpY1wiIDpzdHlsZT1cImN1c3RvbVN0eWxlc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LWJhciBlbW9qaS1tYXJ0LWJhci1hbmNob3JzXCIgdi1pZj1cInNob3dDYXRlZ29yaWVzXCI+XG4gICAgICA8YW5jaG9yc1xuICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICA6aTE4bj1cIm1lcmdlZEkxOG5cIlxuICAgICAgICA6Y29sb3I9XCJjb2xvclwiXG4gICAgICAgIDpjYXRlZ29yaWVzPVwidmlldy5hbGxDYXRlZ29yaWVzXCJcbiAgICAgICAgOmFjdGl2ZS1jYXRlZ29yeT1cInZpZXcuYWN0aXZlQ2F0ZWdvcnlcIlxuICAgICAgICBAY2xpY2s9XCJvbkFuY2hvckNsaWNrXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8c2xvdFxuICAgICAgbmFtZT1cInNlYXJjaFRlbXBsYXRlXCJcbiAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICA6aTE4bj1cImkxOG5cIlxuICAgICAgOmF1dG8tZm9jdXM9XCJhdXRvRm9jdXNcIlxuICAgICAgOm9uLXNlYXJjaD1cIm9uU2VhcmNoXCJcbiAgICA+XG4gICAgICA8c2VhcmNoXG4gICAgICAgIHYtaWY9XCJzaG93U2VhcmNoXCJcbiAgICAgICAgcmVmPVwic2VhcmNoXCJcbiAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgOmkxOG49XCJtZXJnZWRJMThuXCJcbiAgICAgICAgOmF1dG8tZm9jdXM9XCJhdXRvRm9jdXNcIlxuICAgICAgICA6b24tc2VhcmNoPVwib25TZWFyY2hcIlxuICAgICAgICBAc2VhcmNoPVwib25TZWFyY2hcIlxuICAgICAgICBAYXJyb3dMZWZ0PVwib25BcnJvd0xlZnRcIlxuICAgICAgICBAYXJyb3dSaWdodD1cIm9uQXJyb3dSaWdodFwiXG4gICAgICAgIEBhcnJvd0Rvd249XCJvbkFycm93RG93blwiXG4gICAgICAgIEBhcnJvd1VwPVwib25BcnJvd1VwXCJcbiAgICAgICAgQGVudGVyPVwib25FbnRlclwiXG4gICAgICAgIEBzZWxlY3Q9XCJvblRleHRTZWxlY3RcIlxuICAgICAgLz5cbiAgICA8L3Nsb3Q+XG5cbiAgICA8ZGl2XG4gICAgICByb2xlPVwidGFicGFuZWxcIlxuICAgICAgY2xhc3M9XCJlbW9qaS1tYXJ0LXNjcm9sbFwiXG4gICAgICByZWY9XCJzY3JvbGxcIlxuICAgICAgQHNjcm9sbD1cIm9uU2Nyb2xsXCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGlkPVwiZW1vamktbWFydC1saXN0XCJcbiAgICAgICAgcmVmPVwic2Nyb2xsQ29udGVudFwiXG4gICAgICAgIHJvbGU9XCJsaXN0Ym94XCJcbiAgICAgICAgYXJpYS1leHBhbmRlZD1cInRydWVcIlxuICAgICAgPlxuICAgICAgICA8c2xvdCBuYW1lPVwiY3VzdG9tQ2F0ZWdvcnlcIj4gPC9zbG90PlxuXG4gICAgICAgIDxjYXRlZ29yeVxuICAgICAgICAgIHYtZm9yPVwiKGNhdGVnb3J5LCBpZHgpIGluIHZpZXcuZmlsdGVyZWRDYXRlZ29yaWVzXCJcbiAgICAgICAgICB2LXNob3c9XCJpbmZpbml0ZVNjcm9sbCB8fCBjYXRlZ29yeSA9PSB2aWV3LmFjdGl2ZUNhdGVnb3J5IHx8IGlzU2VhcmNoaW5nXCJcbiAgICAgICAgICA6cmVmPVwiJ2NhdGVnb3JpZXNfJyArIGlkeFwiXG4gICAgICAgICAgOmtleT1cImNhdGVnb3J5LmlkXCJcbiAgICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICAgIDppMThuPVwibWVyZ2VkSTE4blwiXG4gICAgICAgICAgOmlkPVwiY2F0ZWdvcnkuaWRcIlxuICAgICAgICAgIDpuYW1lPVwiY2F0ZWdvcnkubmFtZVwiXG4gICAgICAgICAgOmVtb2ppcz1cImNhdGVnb3J5LmVtb2ppc1wiXG4gICAgICAgICAgOmVtb2ppLXByb3BzPVwiZW1vamlQcm9wc1wiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxzbG90XG4gICAgICBuYW1lPVwicHJldmlld1RlbXBsYXRlXCJcbiAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICA6dGl0bGU9XCJ0aXRsZVwiXG4gICAgICA6ZW1vamk9XCJ2aWV3LnByZXZpZXdFbW9qaVwiXG4gICAgICA6aWRsZS1lbW9qaT1cImlkbGVFbW9qaVwiXG4gICAgICA6c2hvdy1za2luLXRvbmVzPVwic2hvd1NraW5Ub25lc1wiXG4gICAgICA6ZW1vamktcHJvcHM9XCJlbW9qaVByb3BzXCJcbiAgICAgIDpza2luLXByb3BzPVwic2tpblByb3BzXCJcbiAgICAgIDpvbi1za2luLWNoYW5nZT1cIm9uU2tpbkNoYW5nZVwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtYmFyIGVtb2ppLW1hcnQtYmFyLXByZXZpZXdcIiB2LWlmPVwic2hvd1ByZXZpZXdcIj5cbiAgICAgICAgPHByZXZpZXdcbiAgICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICAgIDp0aXRsZT1cInRpdGxlXCJcbiAgICAgICAgICA6ZW1vamk9XCJ2aWV3LnByZXZpZXdFbW9qaVwiXG4gICAgICAgICAgOmlkbGUtZW1vamk9XCJpZGxlRW1vamlcIlxuICAgICAgICAgIDpzaG93LXNraW4tdG9uZXM9XCJzaG93U2tpblRvbmVzXCJcbiAgICAgICAgICA6ZW1vamktcHJvcHM9XCJlbW9qaVByb3BzXCJcbiAgICAgICAgICA6c2tpbi1wcm9wcz1cInNraW5Qcm9wc1wiXG4gICAgICAgICAgOm9uLXNraW4tY2hhbmdlPVwib25Ta2luQ2hhbmdlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2xvdD5cbiAgPC9zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCAnLi4vdmVuZG9yL3JhZi1wb2x5ZmlsbCdcbmltcG9ydCBzdG9yZSBmcm9tICcuLi91dGlscy9zdG9yZSdcbmltcG9ydCBmcmVxdWVudGx5IGZyb20gJy4uL3V0aWxzL2ZyZXF1ZW50bHknXG5pbXBvcnQgeyBkZWVwTWVyZ2UsIG1lYXN1cmVTY3JvbGxiYXIgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IFBpY2tlclByb3BzIH0gZnJvbSAnLi4vdXRpbHMvc2hhcmVkLXByb3BzJ1xuaW1wb3J0IHsgUGlja2VyVmlldyB9IGZyb20gJy4uL3V0aWxzL3BpY2tlcidcbmltcG9ydCBBbmNob3JzIGZyb20gJy4vYW5jaG9ycy52dWUnXG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSAnLi9jYXRlZ29yeS52dWUnXG5pbXBvcnQgUHJldmlldyBmcm9tICcuL3ByZXZpZXcudnVlJ1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL3NlYXJjaC52dWUnXG5cbmNvbnN0IEkxOE4gPSB7XG4gIHNlYXJjaDogJ1NlYXJjaCcsXG4gIG5vdGZvdW5kOiAnTm8gRW1vamkgRm91bmQnLFxuICBjYXRlZ29yaWVzOiB7XG4gICAgc2VhcmNoOiAnU2VhcmNoIFJlc3VsdHMnLFxuICAgIHJlY2VudDogJ0ZyZXF1ZW50bHkgVXNlZCcsXG4gICAgc21pbGV5czogJ1NtaWxleXMgJiBFbW90aW9uJyxcbiAgICBwZW9wbGU6ICdQZW9wbGUgJiBCb2R5JyxcbiAgICBuYXR1cmU6ICdBbmltYWxzICYgTmF0dXJlJyxcbiAgICBmb29kczogJ0Zvb2QgJiBEcmluaycsXG4gICAgYWN0aXZpdHk6ICdBY3Rpdml0eScsXG4gICAgcGxhY2VzOiAnVHJhdmVsICYgUGxhY2VzJyxcbiAgICBvYmplY3RzOiAnT2JqZWN0cycsXG4gICAgc3ltYm9sczogJ1N5bWJvbHMnLFxuICAgIGZsYWdzOiAnRmxhZ3MnLFxuICAgIGN1c3RvbTogJ0N1c3RvbScsXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICAuLi5QaWNrZXJQcm9wcyxcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICBlbWl0czogWydzZWxlY3QnLCAnc2tpbi1jaGFuZ2UnXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWN0aXZlU2tpbjogdGhpcy5za2luIHx8IHN0b3JlLmdldCgnc2tpbicpIHx8IHRoaXMuZGVmYXVsdFNraW4sXG4gICAgICB2aWV3OiBuZXcgUGlja2VyVmlldyh0aGlzKSxcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgY3VzdG9tU3R5bGVzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IHRoaXMuY2FsY3VsYXRlV2lkdGggKyAncHgnLFxuICAgICAgICAuLi50aGlzLnBpY2tlclN0eWxlcyxcbiAgICAgIH1cbiAgICB9LFxuICAgIGVtb2ppUHJvcHMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYXRpdmU6IHRoaXMubmF0aXZlLFxuICAgICAgICBza2luOiB0aGlzLmFjdGl2ZVNraW4sXG4gICAgICAgIHNldDogdGhpcy5zZXQsXG4gICAgICAgIGVtb2ppVG9vbHRpcDogdGhpcy5lbW9qaVRvb2x0aXAsXG4gICAgICAgIGVtb2ppU2l6ZTogdGhpcy5lbW9qaVNpemUsXG4gICAgICAgIHNlbGVjdGVkRW1vamk6IHRoaXMudmlldy5wcmV2aWV3RW1vamksXG4gICAgICAgIHNlbGVjdGVkRW1vamlDYXRlZ29yeTogdGhpcy52aWV3LnByZXZpZXdFbW9qaUNhdGVnb3J5LFxuICAgICAgICBvbkVudGVyOiB0aGlzLm9uRW1vamlFbnRlci5iaW5kKHRoaXMpLFxuICAgICAgICBvbkxlYXZlOiB0aGlzLm9uRW1vamlMZWF2ZS5iaW5kKHRoaXMpLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLm9uRW1vamlDbGljay5iaW5kKHRoaXMpLFxuICAgICAgfVxuICAgIH0sXG4gICAgc2tpblByb3BzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2tpbjogdGhpcy5hY3RpdmVTa2luLFxuICAgICAgfVxuICAgIH0sXG4gICAgY2FsY3VsYXRlV2lkdGgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wZXJMaW5lICogKHRoaXMuZW1vamlTaXplICsgMTIpICsgMTIgKyAyICsgbWVhc3VyZVNjcm9sbGJhcigpXG4gICAgfSxcbiAgICAvLyBlbW9qaXNQZXJSb3coKSB7XG4gICAgLy8gICBjb25zdCBsaXN0RWwgPSB0aGlzLiRyZWZzLnNjcm9sbENvbnRlbnRcbiAgICAvLyAgIGNvbnN0IGVtb2ppRWwgPSBsaXN0RWwucXVlcnlTZWxlY3RvcignLmVtb2ppLW1hcnQtZW1vamknKVxuICAgIC8vICAgcmV0dXJuIE1hdGguZmxvb3IobGlzdEVsLm9mZnNldFdpZHRoIC8gZW1vamlFbC5vZmZzZXRXaWR0aClcbiAgICAvLyB9LFxuICAgIGZpbHRlcmVkQ2F0ZWdvcmllcygpIHtcbiAgICAgIHJldHVybiB0aGlzLnZpZXcuZmlsdGVyZWRDYXRlZ29yaWVzXG4gICAgfSxcbiAgICBtZXJnZWRJMThuKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5mcmVlemUoZGVlcE1lcmdlKEkxOE4sIHRoaXMuaTE4bikpXG4gICAgfSxcbiAgICBpZGxlRW1vamkoKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmVtb2ppKHRoaXMuZW1vamkpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgJ0RlZmF1bHQgcHJldmlldyBlbW9qaSBgJyArXG4gICAgICAgICAgICB0aGlzLmVtb2ppICtcbiAgICAgICAgICAgICdgIGlzIG5vdCBhdmFpbGFibGUsIGNoZWNrIHRoZSBQaWNrZXIgYGVtb2ppYCBwcm9wZXJ0eScsXG4gICAgICAgIClcbiAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmZpcnN0RW1vamkoKVxuICAgICAgfVxuICAgIH0sXG4gICAgaXNTZWFyY2hpbmcoKSB7XG4gICAgICByZXR1cm4gdGhpcy52aWV3LnNlYXJjaEVtb2ppcyAhPSBudWxsO1xuICAgIH0sXG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgc2tpbigpIHtcbiAgICAgIHRoaXMub25Ta2luQ2hhbmdlKHRoaXMuc2tpbilcbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25TY3JvbGwoKSB7XG4gICAgICBpZiAodGhpcy5pbmZpbml0ZVNjcm9sbCAmJiAhdGhpcy53YWl0aW5nRm9yUGFpbnQpIHtcbiAgICAgICAgdGhpcy53YWl0aW5nRm9yUGFpbnQgPSB0cnVlXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5vblNjcm9sbFBhaW50LmJpbmQodGhpcykpXG4gICAgICB9XG4gICAgfSxcbiAgICBvblNjcm9sbFBhaW50KCkge1xuICAgICAgdGhpcy53YWl0aW5nRm9yUGFpbnQgPSBmYWxzZVxuICAgICAgdGhpcy52aWV3Lm9uU2Nyb2xsKClcbiAgICB9LFxuICAgIG9uQW5jaG9yQ2xpY2soY2F0ZWdvcnkpIHtcbiAgICAgIHRoaXMudmlldy5vbkFuY2hvckNsaWNrKGNhdGVnb3J5KVxuICAgIH0sXG4gICAgb25TZWFyY2godmFsdWUpIHtcbiAgICAgIHRoaXMudmlldy5vblNlYXJjaCh2YWx1ZSlcbiAgICB9LFxuICAgIG9uRW1vamlFbnRlcihlbW9qaSkge1xuICAgICAgdGhpcy52aWV3Lm9uRW1vamlFbnRlcihlbW9qaSlcbiAgICB9LFxuICAgIG9uRW1vamlMZWF2ZShlbW9qaSkge1xuICAgICAgdGhpcy52aWV3Lm9uRW1vamlMZWF2ZShlbW9qaSlcbiAgICB9LFxuICAgIG9uQXJyb3dMZWZ0KCRldmVudCkge1xuICAgICAgY29uc3Qgb2xkSWR4ID0gdGhpcy52aWV3LnByZXZpZXdFbW9qaUlkeFxuICAgICAgdGhpcy52aWV3Lm9uQXJyb3dMZWZ0KClcbiAgICAgIGlmICgkZXZlbnQgJiYgdGhpcy52aWV3LnByZXZpZXdFbW9qaUlkeCAhPT0gb2xkSWR4KSB7XG4gICAgICAgIC8vIFByZXZlbnQgY3Vyc29yIG1vdmVtZW50IGluc2lkZSB0aGUgaW5wdXRcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQXJyb3dSaWdodCgpIHtcbiAgICAgIHRoaXMudmlldy5vbkFycm93UmlnaHQoKVxuICAgIH0sXG4gICAgb25BcnJvd0Rvd24oKSB7XG4gICAgICB0aGlzLnZpZXcub25BcnJvd0Rvd24oKVxuICAgIH0sXG4gICAgb25BcnJvd1VwKCRldmVudCkge1xuICAgICAgdGhpcy52aWV3Lm9uQXJyb3dVcCgpXG4gICAgICAvLyBQcmV2ZW50IGN1cnNvciBtb3ZlbWVudCBpbnNpZGUgdGhlIGlucHV0XG4gICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH0sXG4gICAgb25FbnRlcigpIHtcbiAgICAgIGlmICghdGhpcy52aWV3LnByZXZpZXdFbW9qaSkge1xuICAgICAgICAvLyBXZSBtYXkgcHJlc3MgXCJFbnRlclwiIHdoZW4gbm90aGluZyBpcyBzZWxlY3RlZCxcbiAgICAgICAgLy8gZm9yIGV4YW1wbGUsIGlmIHdlIHNlYXJjaCBmb3IgXCJhc2RmXCIuXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdGhpcy4kZW1pdCgnc2VsZWN0JywgdGhpcy52aWV3LnByZXZpZXdFbW9qaSlcbiAgICAgIGZyZXF1ZW50bHkuYWRkKHRoaXMudmlldy5wcmV2aWV3RW1vamkpXG4gICAgfSxcbiAgICBvbkVtb2ppQ2xpY2soZW1vamkpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ3NlbGVjdCcsIGVtb2ppKVxuICAgICAgZnJlcXVlbnRseS5hZGQoZW1vamkpXG4gICAgICB0aGlzLmRhdGEudXBkYXRlUmVjZW50Q2F0ZWdvcnkoKVxuICAgIH0sXG4gICAgb25UZXh0U2VsZWN0KCRldmVudCkge1xuICAgICAgLy8gUHJldmVudCBkZWZhdWx0IHRleHQgc2VsZWN0IGV2ZW50LlxuICAgICAgLy8gSW4gVnVlIDMgaXQgZ29lcyB0aHJvdWdoIHRoZSBjb21wb25lbnQgYW5kIHRyaWdnZXJzIHRoZSBgc2VsZWN0YFxuICAgICAgLy8gZXZlbnQgdGhhdCBpcyBzdXBwb3NlZCB0byBiZSBlbW1pdGVkIG9ubHkgd2l0aCBlbW9qaS5cbiAgICAgIC8vICh0aGVyZSBpcyBubyBzdWNoIHByb2JsZW0gaW4gVnVlIDIpLlxuICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgfSxcbiAgICBvblNraW5DaGFuZ2Uoc2tpbikge1xuICAgICAgdGhpcy5hY3RpdmVTa2luID0gc2tpblxuICAgICAgc3RvcmUudXBkYXRlKHsgc2tpbiB9KVxuXG4gICAgICB0aGlzLiRlbWl0KCdza2luLWNoYW5nZScsIHNraW4pXG4gICAgfSxcbiAgICBnZXRDYXRlZ29yeUNvbXBvbmVudChpbmRleCkge1xuICAgICAgbGV0IGNvbXBvbmVudCA9IHRoaXMuJHJlZnNbJ2NhdGVnb3JpZXNfJyArIGluZGV4XVxuICAgICAgaWYgKGNvbXBvbmVudCAmJiAnMCcgaW4gY29tcG9uZW50KSB7XG4gICAgICAgIC8vIFZ1ZSAyIGhhcyAkcmVmcyB1bmRlciB2LWZvciBhcyBhbiBhcnJheS5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFsnMCddXG4gICAgICB9XG4gICAgICAvLyBWdWUgMyBkb2VzIG5vdCBzdXBwb3J0ICRyZWZzIGFzIGFycmF5LlxuICAgICAgcmV0dXJuIGNvbXBvbmVudFxuICAgIH0sXG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBBbmNob3JzLFxuICAgIENhdGVnb3J5LFxuICAgIFByZXZpZXcsXG4gICAgU2VhcmNoLFxuICB9LFxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgcm9sZT1cInRhYmxpc3RcIiBjbGFzcz1cImVtb2ppLW1hcnQtYW5jaG9yc1wiPlxuICAgIDxidXR0b25cbiAgICAgIHYtZm9yPVwiY2F0ZWdvcnkgaW4gY2F0ZWdvcmllc1wiXG4gICAgICByb2xlPVwidGFiXCJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgOmFyaWEtbGFiZWw9XCJjYXRlZ29yeS5uYW1lXCJcbiAgICAgIDphcmlhLXNlbGVjdGVkPVwiY2F0ZWdvcnkuaWQgPT0gYWN0aXZlQ2F0ZWdvcnkuaWRcIlxuICAgICAgOmtleT1cImNhdGVnb3J5LmlkXCJcbiAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgJ2Vtb2ppLW1hcnQtYW5jaG9yJzogdHJ1ZSxcbiAgICAgICAgJ2Vtb2ppLW1hcnQtYW5jaG9yLXNlbGVjdGVkJzogY2F0ZWdvcnkuaWQgPT0gYWN0aXZlQ2F0ZWdvcnkuaWQsXG4gICAgICB9XCJcbiAgICAgIDpzdHlsZT1cInsgY29sb3I6IGNhdGVnb3J5LmlkID09IGFjdGl2ZUNhdGVnb3J5LmlkID8gY29sb3IgOiAnJyB9XCJcbiAgICAgIDpkYXRhLXRpdGxlPVwiaTE4bi5jYXRlZ29yaWVzW2NhdGVnb3J5LmlkXVwiXG4gICAgICBAY2xpY2s9XCIkZW1pdCgnY2xpY2snLCBjYXRlZ29yeSlcIlxuICAgID5cbiAgICAgIDxkaXYgYXJpYS1oaWRkZW49XCJ0cnVlXCIgdi1odG1sPVwic3Znc1tjYXRlZ29yeS5pZF1cIiAvPlxuICAgICAgPHNwYW5cbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgY2xhc3M9XCJlbW9qaS1tYXJ0LWFuY2hvci1iYXJcIlxuICAgICAgICA6c3R5bGU9XCJ7IGJhY2tncm91bmRDb2xvcjogY29sb3IgfVwiXG4gICAgICA+PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgc3ZncyBmcm9tICcuLi9zdmdzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgaTE4bjoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgIH0sXG4gICAgY2F0ZWdvcmllczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGFjdGl2ZUNhdGVnb3J5OiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0KCkge1xuICAgICAgICByZXR1cm4ge31cbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgZW1pdHM6IFsnY2xpY2snXSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLnN2Z3MgPSBzdmdzXG4gIH0sXG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHNlY3Rpb25cbiAgICA6Y2xhc3M9XCJ7XG4gICAgICAnZW1vamktbWFydC1jYXRlZ29yeSc6IHRydWUsXG4gICAgICAnZW1vamktbWFydC1uby1yZXN1bHRzJzogIWhhc1Jlc3VsdHMsXG4gICAgfVwiXG4gICAgOmFyaWEtbGFiZWw9XCJpMThuLmNhdGVnb3JpZXNbaWRdXCJcbiAgICB2LWlmPVwiaXNWaXNpYmxlICYmIChpc1NlYXJjaCB8fCBoYXNSZXN1bHRzKVwiXG4gID5cbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1jYXRlZ29yeS1sYWJlbFwiPlxuICAgICAgPGgzIGNsYXNzPVwiZW1vamktbWFydC1jYXRlZ29yeS1sYWJlbFwiPnt7IGkxOG4uY2F0ZWdvcmllc1tpZF0gfX08L2gzPlxuICAgIDwvZGl2PlxuXG4gICAgPHRlbXBsYXRlIHYtZm9yPVwieyBlbW9qaU9iamVjdCwgZW1vamlWaWV3IH0gaW4gZW1vamlPYmplY3RzXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHYtaWY9XCJlbW9qaVZpZXcuY2FuUmVuZGVyXCJcbiAgICAgICAgOmFyaWEtbGFiZWw9XCJlbW9qaVZpZXcuYXJpYUxhYmVsXCJcbiAgICAgICAgcm9sZT1cIm9wdGlvblwiXG4gICAgICAgIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiXG4gICAgICAgIGFyaWEtcG9zaW5zZXQ9XCIxXCJcbiAgICAgICAgYXJpYS1zZXRzaXplPVwiMTgxMlwiXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICA6ZGF0YS10aXRsZT1cImVtb2ppT2JqZWN0LnNob3J0X25hbWVcIlxuICAgICAgICA6a2V5PVwiZW1vamlPYmplY3QuaWRcIlxuICAgICAgICA6dGl0bGU9XCJlbW9qaVZpZXcudGl0bGVcIlxuICAgICAgICBjbGFzcz1cImVtb2ppLW1hcnQtZW1vamlcIlxuICAgICAgICA6Y2xhc3M9XCJhY3RpdmVDbGFzcyhlbW9qaU9iamVjdClcIlxuICAgICAgICBAbW91c2VlbnRlcj1cImVtb2ppUHJvcHMub25FbnRlcihlbW9qaVZpZXcuZ2V0RW1vamkoKSlcIlxuICAgICAgICBAbW91c2VsZWF2ZT1cImVtb2ppUHJvcHMub25MZWF2ZShlbW9qaVZpZXcuZ2V0RW1vamkoKSlcIlxuICAgICAgICBAY2xpY2s9XCJlbW9qaVByb3BzLm9uQ2xpY2soZW1vamlWaWV3LmdldEVtb2ppKCkpXCJcbiAgICAgID5cbiAgICAgICAgPHNwYW4gOmNsYXNzPVwiZW1vamlWaWV3LmNzc0NsYXNzXCIgOnN0eWxlPVwiZW1vamlWaWV3LmNzc1N0eWxlXCI+e3tcbiAgICAgICAgICBlbW9qaVZpZXcuY29udGVudFxuICAgICAgICB9fTwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvdGVtcGxhdGU+XG5cbiAgICA8ZGl2IHYtaWY9XCIhaGFzUmVzdWx0c1wiPlxuICAgICAgPGVtb2ppXG4gICAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICAgIGVtb2ppPVwic2xldXRoX29yX3NweVwiXG4gICAgICAgIDpuYXRpdmU9XCJlbW9qaVByb3BzLm5hdGl2ZVwiXG4gICAgICAgIDpza2luPVwiZW1vamlQcm9wcy5za2luXCJcbiAgICAgICAgOnNldD1cImVtb2ppUHJvcHMuc2V0XCJcbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1uby1yZXN1bHRzLWxhYmVsXCI+e3sgaTE4bi5ub3Rmb3VuZCB9fTwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgRW1vamlWaWV3IH0gZnJvbSAnLi4vdXRpbHMvZW1vamktZGF0YSdcbmltcG9ydCBFbW9qaSBmcm9tICcuL0Vtb2ppLnZ1ZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgaTE4bjoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBpZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBuYW1lOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGVtb2ppczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgfSxcbiAgICBlbW9qaVByb3BzOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYWN0aXZlQ2xhc3M6IGZ1bmN0aW9uKGVtb2ppT2JqZWN0KSB7XG4gICAgICBpZiAoIXRoaXMuZW1vamlQcm9wcy5zZWxlY3RlZEVtb2ppKSB7XG4gICAgICAgIHJldHVybiAnJ1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmVtb2ppUHJvcHMuc2VsZWN0ZWRFbW9qaUNhdGVnb3J5KSB7XG4gICAgICAgIHJldHVybiAnJ1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmVtb2ppUHJvcHMuc2VsZWN0ZWRFbW9qaS5pZCA9PSBlbW9qaU9iamVjdC5pZCAmJlxuICAgICAgICB0aGlzLmVtb2ppUHJvcHMuc2VsZWN0ZWRFbW9qaUNhdGVnb3J5LmlkID09IHRoaXMuaWRcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gJ2Vtb2ppLW1hcnQtZW1vamktc2VsZWN0ZWQnXG4gICAgICB9XG4gICAgICByZXR1cm4gJydcbiAgICB9LFxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGlzVmlzaWJsZSgpIHtcbiAgICAgIHJldHVybiAhIXRoaXMuZW1vamlzXG4gICAgfSxcbiAgICBpc1NlYXJjaCgpIHtcbiAgICAgIHJldHVybiB0aGlzLm5hbWUgPT0gJ1NlYXJjaCdcbiAgICB9LFxuICAgIGhhc1Jlc3VsdHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbW9qaXMubGVuZ3RoID4gMFxuICAgIH0sXG4gICAgZW1vamlPYmplY3RzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZW1vamlzLm1hcCgoZW1vamkpID0+IHtcbiAgICAgICAgbGV0IGVtb2ppT2JqZWN0ID0gZW1vamlcbiAgICAgICAgbGV0IGVtb2ppVmlldyA9IG5ldyBFbW9qaVZpZXcoXG4gICAgICAgICAgZW1vamksXG4gICAgICAgICAgdGhpcy5lbW9qaVByb3BzLnNraW4sXG4gICAgICAgICAgdGhpcy5lbW9qaVByb3BzLnNldCxcbiAgICAgICAgICB0aGlzLmVtb2ppUHJvcHMubmF0aXZlLFxuICAgICAgICAgIHRoaXMuZW1vamlQcm9wcy5mYWxsYmFjayxcbiAgICAgICAgICB0aGlzLmVtb2ppUHJvcHMuZW1vamlUb29sdGlwLFxuICAgICAgICAgIHRoaXMuZW1vamlQcm9wcy5lbW9qaVNpemUsXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIHsgZW1vamlPYmplY3QsIGVtb2ppVmlldyB9XG4gICAgICB9KVxuICAgIH0sXG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBFbW9qaSxcbiAgfSxcbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXG48ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3XCI+XG4gIDx0ZW1wbGF0ZSB2LWlmPVwiZW1vamlcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vamlcIj5cbiAgICAgICAgPGVtb2ppXG4gICAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgICA6ZW1vamk9XCJlbW9qaVwiXG4gICAgICAgICAgOm5hdGl2ZT1cImVtb2ppUHJvcHMubmF0aXZlXCJcbiAgICAgICAgICA6c2tpbj1cImVtb2ppUHJvcHMuc2tpblwiXG4gICAgICAgICAgOnNldD1cImVtb2ppUHJvcHMuc2V0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWRhdGFcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1uYW1lXCI+e3sgZW1vamkubmFtZSB9fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LXNob3J0bmFtZXNcIj5cbiAgICAgICAgICA8c3BhbiB2LWZvcj1cInNob3J0TmFtZSBpbiBlbW9qaVNob3J0TmFtZXNcIiA6a2V5PVwic2hvcnROYW1lXCIgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctc2hvcnRuYW1lXCI+Ont7IHNob3J0TmFtZSB9fTo8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWVtb3RpY29uc1wiPlxuICAgICAgICAgIDxzcGFuIHYtZm9yPVwiZW1vdGljb24gaW4gZW1vamlFbW90aWNvbnNcIiA6a2V5PVwiZW1vdGljb25cIiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1lbW90aWNvblwiPnt7IGVtb3RpY29uIH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICA8L3RlbXBsYXRlPlxuXG4gIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1lbW9qaVwiPlxuICAgICAgPGVtb2ppXG4gICAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICAgIDplbW9qaT1cImlkbGVFbW9qaVwiXG4gICAgICAgIDpuYXRpdmU9XCJlbW9qaVByb3BzLm5hdGl2ZVwiXG4gICAgICAgIDpza2luPVwiZW1vamlQcm9wcy5za2luXCJcbiAgICAgICAgOnNldD1cImVtb2ppUHJvcHMuc2V0XCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWRhdGFcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZW1vamktbWFydC10aXRsZS1sYWJlbFwiPnt7IHRpdGxlIH19PC9zcGFuPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiB2LWlmPVwic2hvd1NraW5Ub25lc1wiIGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LXNraW5zXCI+XG4gICAgICA8c2tpbnMgOnNraW49XCJza2luUHJvcHMuc2tpblwiIEBjaGFuZ2U9XCJvblNraW5DaGFuZ2UoJGV2ZW50KVwiIC8+XG4gICAgPC9kaXY+XG4gIDwvdGVtcGxhdGU+XG48L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IEVtb2ppIGZyb20gJy4vRW1vamkudnVlJ1xuaW1wb3J0IFNraW5zIGZyb20gJy4vc2tpbnMudnVlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgZGF0YToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgZW1vamk6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIE9iamVjdF1cbiAgICB9LFxuICAgIGlkbGVFbW9qaToge1xuICAgICAgdHlwZTogW1N0cmluZywgT2JqZWN0XSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBzaG93U2tpblRvbmVzOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH0sXG4gICAgZW1vamlQcm9wczoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHNraW5Qcm9wczoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIG9uU2tpbkNoYW5nZToge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBlbW9qaURhdGEoKSB7XG4gICAgICBpZiAodGhpcy5lbW9qaSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbW9qaVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgICB9XG4gICAgfSxcbiAgICBlbW9qaVNob3J0TmFtZXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbW9qaURhdGEuc2hvcnRfbmFtZXNcbiAgICB9LFxuICAgIGVtb2ppRW1vdGljb25zKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZW1vamlEYXRhLmVtb3RpY29uc1xuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIEVtb2ppLFxuICAgIFNraW5zXG4gIH1cbn1cblxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXNlYXJjaFwiPlxuICAgIDxpbnB1dFxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgOnBsYWNlaG9sZGVyPVwiaTE4bi5zZWFyY2hcIlxuICAgICAgcm9sZT1cInRleHRib3hcIlxuICAgICAgYXJpYS1hdXRvY29tcGxldGU9XCJsaXN0XCJcbiAgICAgIGFyaWEtb3ducz1cImVtb2ppLW1hcnQtbGlzdFwiXG4gICAgICBhcmlhLWxhYmVsPVwiU2VhcmNoIGZvciBhbiBlbW9qaVwiXG4gICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1vamktbWFydC1zZWFyY2gtZGVzY3JpcHRpb25cIlxuICAgICAgQGtleWRvd24ubGVmdD1cIigkZXZlbnQpID0+ICRlbWl0KCdhcnJvd0xlZnQnLCAkZXZlbnQpXCJcbiAgICAgIEBrZXlkb3duLnJpZ2h0PVwiKCkgPT4gJGVtaXQoJ2Fycm93UmlnaHQnKVwiXG4gICAgICBAa2V5ZG93bi5kb3duPVwiKCkgPT4gJGVtaXQoJ2Fycm93RG93bicpXCJcbiAgICAgIEBrZXlkb3duLnVwPVwiKCRldmVudCkgPT4gJGVtaXQoJ2Fycm93VXAnLCAkZXZlbnQpXCJcbiAgICAgIEBrZXlkb3duLmVudGVyPVwiKCkgPT4gJGVtaXQoJ2VudGVyJylcIlxuICAgICAgdi1tb2RlbD1cInZhbHVlXCJcbiAgICAvPlxuICAgIDxzcGFuIGNsYXNzPVwiaGlkZGVuXCIgaWQ9XCJlbW9qaS1waWNrZXItc2VhcmNoLWRlc2NyaXB0aW9uXCJcbiAgICAgID5Vc2UgdGhlIGxlZnQsIHJpZ2h0LCB1cCBhbmQgZG93biBhcnJvdyBrZXlzIHRvIG5hdmlnYXRlIHRoZSBlbW9qaSBzZWFyY2hcbiAgICAgIHJlc3VsdHMuPC9zcGFuXG4gICAgPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgZGF0YToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBpMThuOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGF1dG9Gb2N1czoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gICAgb25TZWFyY2g6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBvbkFycm93TGVmdDoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgfSxcbiAgICBvbkFycm93UmlnaHQ6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAgb25BcnJvd0Rvd246IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAgb25BcnJvd1VwOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB9LFxuICAgIG9uRW50ZXI6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIH0sXG4gIH0sXG4gIGVtaXRzOiBbJ3NlYXJjaCcsICdlbnRlcicsICdhcnJvd1VwJywgJ2Fycm93RG93bicsICdhcnJvd1JpZ2h0JywgJ2Fycm93TGVmdCddLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogJycsXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGVtb2ppSW5kZXgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhXG4gICAgfSxcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICB2YWx1ZSgpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ3NlYXJjaCcsIHRoaXMudmFsdWUpXG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGNsZWFyKCkge1xuICAgICAgdGhpcy52YWx1ZSA9ICcnXG4gICAgfSxcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICBsZXQgJGlucHV0ID0gdGhpcy4kZWwucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuXG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzKSB7XG4gICAgICAkaW5wdXQuZm9jdXMoKVxuICAgIH1cbiAgfSxcbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXG48ZGl2IDpjbGFzcz1cInsgJ2Vtb2ppLW1hcnQtc2tpbi1zd2F0Y2hlcyc6IHRydWUsICdlbW9qaS1tYXJ0LXNraW4tc3dhdGNoZXMtb3BlbmVkJzogb3BlbmVkIH1cIj5cbiAgPHNwYW4gdi1mb3I9XCJza2luVG9uZSBpbiA2XCIgOmtleT1cInNraW5Ub25lXCIgOmNsYXNzPVwieyAnZW1vamktbWFydC1za2luLXN3YXRjaCc6IHRydWUsICdlbW9qaS1tYXJ0LXNraW4tc3dhdGNoLXNlbGVjdGVkJzogc2tpbiA9PSBza2luVG9uZSB9XCI+XG4gICAgPHNwYW4gOmNsYXNzPVwiJ2Vtb2ppLW1hcnQtc2tpbiBlbW9qaS1tYXJ0LXNraW4tdG9uZS0nICsgc2tpblRvbmVcIiBAY2xpY2s9XCJvbkNsaWNrKHNraW5Ub25lKVwiPjwvc3Bhbj5cbiAgPC9zcGFuPlxuPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBza2luOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgZW1pdHM6IFsnY2hhbmdlJ10sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wZW5lZDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbkNsaWNrKHNraW5Ub25lKSB7XG4gICAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgICAgaWYgKHNraW5Ub25lICE9IHRoaXMuc2tpbikge1xuICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHNraW5Ub25lKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMub3BlbmVkID0gIXRoaXMub3BlbmVkXG4gICAgfVxuICB9XG59XG5cbjwvc2NyaXB0PlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF92bS52aWV3LmNhblJlbmRlclxuICAgID8gX2MoXG4gICAgICAgIF92bS50YWcsXG4gICAgICAgIHtcbiAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1lbW9qaVwiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0aXRsZTogX3ZtLnZpZXcudGl0bGUsXG4gICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogX3ZtLnZpZXcuYXJpYUxhYmVsLFxuICAgICAgICAgICAgXCJkYXRhLXRpdGxlXCI6IF92bS50aXRsZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBtb3VzZWVudGVyOiBfdm0ub25Nb3VzZUVudGVyLFxuICAgICAgICAgICAgbW91c2VsZWF2ZTogX3ZtLm9uTW91c2VMZWF2ZSxcbiAgICAgICAgICAgIGNsaWNrOiBfdm0ub25DbGljayxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgY2xhc3M6IF92bS52aWV3LmNzc0NsYXNzLCBzdHlsZTogX3ZtLnZpZXcuY3NzU3R5bGUgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udmlldy5jb250ZW50KSksXG4gICAgICAgICAgXSksXG4gICAgICAgIF1cbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwic2VjdGlvblwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydCBlbW9qaS1tYXJ0LXN0YXRpY1wiLCBzdHlsZTogX3ZtLmN1c3RvbVN0eWxlcyB9LFxuICAgIFtcbiAgICAgIF92bS5zaG93Q2F0ZWdvcmllc1xuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1iYXIgZW1vamktbWFydC1iYXItYW5jaG9yc1wiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiYW5jaG9yc1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgICAgICAgICAgaTE4bjogX3ZtLm1lcmdlZEkxOG4sXG4gICAgICAgICAgICAgICAgICBjb2xvcjogX3ZtLmNvbG9yLFxuICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogX3ZtLnZpZXcuYWxsQ2F0ZWdvcmllcyxcbiAgICAgICAgICAgICAgICAgIFwiYWN0aXZlLWNhdGVnb3J5XCI6IF92bS52aWV3LmFjdGl2ZUNhdGVnb3J5LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vbkFuY2hvckNsaWNrIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl90KFxuICAgICAgICBcInNlYXJjaFRlbXBsYXRlXCIsXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgX3ZtLnNob3dTZWFyY2hcbiAgICAgICAgICAgICAgPyBfYyhcInNlYXJjaFwiLCB7XG4gICAgICAgICAgICAgICAgICByZWY6IFwic2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgaTE4bjogX3ZtLm1lcmdlZEkxOG4sXG4gICAgICAgICAgICAgICAgICAgIFwiYXV0by1mb2N1c1wiOiBfdm0uYXV0b0ZvY3VzLFxuICAgICAgICAgICAgICAgICAgICBcIm9uLXNlYXJjaFwiOiBfdm0ub25TZWFyY2gsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoOiBfdm0ub25TZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgIGFycm93TGVmdDogX3ZtLm9uQXJyb3dMZWZ0LFxuICAgICAgICAgICAgICAgICAgICBhcnJvd1JpZ2h0OiBfdm0ub25BcnJvd1JpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBhcnJvd0Rvd246IF92bS5vbkFycm93RG93bixcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dVcDogX3ZtLm9uQXJyb3dVcCxcbiAgICAgICAgICAgICAgICAgICAgZW50ZXI6IF92bS5vbkVudGVyLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Q6IF92bS5vblRleHRTZWxlY3QsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgaTE4bjogX3ZtLmkxOG4sXG4gICAgICAgICAgYXV0b0ZvY3VzOiBfdm0uYXV0b0ZvY3VzLFxuICAgICAgICAgIG9uU2VhcmNoOiBfdm0ub25TZWFyY2gsXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IFwic2Nyb2xsXCIsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1zY3JvbGxcIixcbiAgICAgICAgICBhdHRyczogeyByb2xlOiBcInRhYnBhbmVsXCIgfSxcbiAgICAgICAgICBvbjogeyBzY3JvbGw6IF92bS5vblNjcm9sbCB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6IFwic2Nyb2xsQ29udGVudFwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGlkOiBcImVtb2ppLW1hcnQtbGlzdFwiLFxuICAgICAgICAgICAgICAgIHJvbGU6IFwibGlzdGJveFwiLFxuICAgICAgICAgICAgICAgIFwiYXJpYS1leHBhbmRlZFwiOiBcInRydWVcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdChcImN1c3RvbUNhdGVnb3J5XCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLnZpZXcuZmlsdGVyZWRDYXRlZ29yaWVzLCBmdW5jdGlvbiAoY2F0ZWdvcnksIGlkeCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImNhdGVnb3J5XCIsIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uaW5maW5pdGVTY3JvbGwgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5ID09IF92bS52aWV3LmFjdGl2ZUNhdGVnb3J5IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNTZWFyY2hpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5maW5pdGVTY3JvbGwgfHwgY2F0ZWdvcnkgPT0gdmlldy5hY3RpdmVDYXRlZ29yeSB8fCBpc1NlYXJjaGluZ1wiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIGtleTogY2F0ZWdvcnkuaWQsXG4gICAgICAgICAgICAgICAgICByZWY6IFwiY2F0ZWdvcmllc19cIiArIGlkeCxcbiAgICAgICAgICAgICAgICAgIHJlZkluRm9yOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGkxOG46IF92bS5tZXJnZWRJMThuLFxuICAgICAgICAgICAgICAgICAgICBpZDogY2F0ZWdvcnkuaWQsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGNhdGVnb3J5Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGVtb2ppczogY2F0ZWdvcnkuZW1vamlzLFxuICAgICAgICAgICAgICAgICAgICBcImVtb2ppLXByb3BzXCI6IF92bS5lbW9qaVByb3BzLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX3QoXG4gICAgICAgIFwicHJldmlld1RlbXBsYXRlXCIsXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgX3ZtLnNob3dQcmV2aWV3XG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LWJhciBlbW9qaS1tYXJ0LWJhci1wcmV2aWV3XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwcmV2aWV3XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX3ZtLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW1vamk6IF92bS52aWV3LnByZXZpZXdFbW9qaSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRsZS1lbW9qaVwiOiBfdm0uaWRsZUVtb2ppLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93LXNraW4tdG9uZXNcIjogX3ZtLnNob3dTa2luVG9uZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVtb2ppLXByb3BzXCI6IF92bS5lbW9qaVByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJza2luLXByb3BzXCI6IF92bS5za2luUHJvcHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9uLXNraW4tY2hhbmdlXCI6IF92bS5vblNraW5DaGFuZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICB0aXRsZTogX3ZtLnRpdGxlLFxuICAgICAgICAgIGVtb2ppOiBfdm0udmlldy5wcmV2aWV3RW1vamksXG4gICAgICAgICAgaWRsZUVtb2ppOiBfdm0uaWRsZUVtb2ppLFxuICAgICAgICAgIHNob3dTa2luVG9uZXM6IF92bS5zaG93U2tpblRvbmVzLFxuICAgICAgICAgIGVtb2ppUHJvcHM6IF92bS5lbW9qaVByb3BzLFxuICAgICAgICAgIHNraW5Qcm9wczogX3ZtLnNraW5Qcm9wcyxcbiAgICAgICAgICBvblNraW5DaGFuZ2U6IF92bS5vblNraW5DaGFuZ2UsXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtYW5jaG9yc1wiLCBhdHRyczogeyByb2xlOiBcInRhYmxpc3RcIiB9IH0sXG4gICAgX3ZtLl9sKF92bS5jYXRlZ29yaWVzLCBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcbiAgICAgIHJldHVybiBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIGtleTogY2F0ZWdvcnkuaWQsXG4gICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgIFwiZW1vamktbWFydC1hbmNob3JcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZW1vamktbWFydC1hbmNob3Itc2VsZWN0ZWRcIjogY2F0ZWdvcnkuaWQgPT0gX3ZtLmFjdGl2ZUNhdGVnb3J5LmlkLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIGNvbG9yOiBjYXRlZ29yeS5pZCA9PSBfdm0uYWN0aXZlQ2F0ZWdvcnkuaWQgPyBfdm0uY29sb3IgOiBcIlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHJvbGU6IFwidGFiXCIsXG4gICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IGNhdGVnb3J5Lm5hbWUsXG4gICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjogY2F0ZWdvcnkuaWQgPT0gX3ZtLmFjdGl2ZUNhdGVnb3J5LmlkLFxuICAgICAgICAgICAgXCJkYXRhLXRpdGxlXCI6IF92bS5pMThuLmNhdGVnb3JpZXNbY2F0ZWdvcnkuaWRdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJjbGlja1wiLCBjYXRlZ29yeSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5zdmdzW2NhdGVnb3J5LmlkXSkgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LWFuY2hvci1iYXJcIixcbiAgICAgICAgICAgIHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogX3ZtLmNvbG9yIH0sXG4gICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF1cbiAgICAgIClcbiAgICB9KSxcbiAgICAwXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX3ZtLmlzVmlzaWJsZSAmJiAoX3ZtLmlzU2VhcmNoIHx8IF92bS5oYXNSZXN1bHRzKVxuICAgID8gX2MoXG4gICAgICAgIFwic2VjdGlvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgIFwiZW1vamktbWFydC1jYXRlZ29yeVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJlbW9qaS1tYXJ0LW5vLXJlc3VsdHNcIjogIV92bS5oYXNSZXN1bHRzLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWxhYmVsXCI6IF92bS5pMThuLmNhdGVnb3JpZXNbX3ZtLmlkXSB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LWNhdGVnb3J5LWxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtY2F0ZWdvcnktbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmkxOG4uY2F0ZWdvcmllc1tfdm0uaWRdKSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5fbChfdm0uZW1vamlPYmplY3RzLCBmdW5jdGlvbiAoeyBlbW9qaU9iamVjdCwgZW1vamlWaWV3IH0pIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIGVtb2ppVmlldy5jYW5SZW5kZXJcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBlbW9qaU9iamVjdC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LWVtb2ppXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5hY3RpdmVDbGFzcyhlbW9qaU9iamVjdCksXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBlbW9qaVZpZXcuYXJpYUxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZTogXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtcG9zaW5zZXRcIjogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtc2V0c2l6ZVwiOiBcIjE4MTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdGl0bGVcIjogZW1vamlPYmplY3Quc2hvcnRfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBlbW9qaVZpZXcudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VlbnRlcjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW1vamlQcm9wcy5vbkVudGVyKGVtb2ppVmlldy5nZXRFbW9qaSgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlbGVhdmU6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVtb2ppUHJvcHMub25MZWF2ZShlbW9qaVZpZXcuZ2V0RW1vamkoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW1vamlQcm9wcy5vbkNsaWNrKGVtb2ppVmlldy5nZXRFbW9qaSgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IGVtb2ppVmlldy5jc3NDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IGVtb2ppVmlldy5jc3NTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhlbW9qaVZpZXcuY29udGVudCkpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgIV92bS5oYXNSZXN1bHRzXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJlbW9qaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgZW1vamk6IFwic2xldXRoX29yX3NweVwiLFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZTogX3ZtLmVtb2ppUHJvcHMubmF0aXZlLFxuICAgICAgICAgICAgICAgICAgICAgIHNraW46IF92bS5lbW9qaVByb3BzLnNraW4sXG4gICAgICAgICAgICAgICAgICAgICAgc2V0OiBfdm0uZW1vamlQcm9wcy5zZXQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtbm8tcmVzdWx0cy1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaTE4bi5ub3Rmb3VuZCkpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXdcIiB9LFxuICAgIFtcbiAgICAgIF92bS5lbW9qaVxuICAgICAgICA/IFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlldy1lbW9qaVwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImVtb2ppXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBlbW9qaTogX3ZtLmVtb2ppLFxuICAgICAgICAgICAgICAgICAgICBuYXRpdmU6IF92bS5lbW9qaVByb3BzLm5hdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgc2tpbjogX3ZtLmVtb2ppUHJvcHMuc2tpbixcbiAgICAgICAgICAgICAgICAgICAgc2V0OiBfdm0uZW1vamlQcm9wcy5zZXQsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LWRhdGFcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LW5hbWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZW1vamkubmFtZSkpLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlldy1zaG9ydG5hbWVzXCIgfSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmVtb2ppU2hvcnROYW1lcywgZnVuY3Rpb24gKHNob3J0TmFtZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogc2hvcnROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlldy1zaG9ydG5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIjpcIiArIF92bS5fcyhzaG9ydE5hbWUpICsgXCI6XCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlldy1lbW90aWNvbnNcIiB9LFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZW1vamlFbW90aWNvbnMsIGZ1bmN0aW9uIChlbW90aWNvbikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogZW1vdGljb24sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LWVtb3RpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGVtb3RpY29uKSldXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXVxuICAgICAgICA6IFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlldy1lbW9qaVwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImVtb2ppXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBlbW9qaTogX3ZtLmlkbGVFbW9qaSxcbiAgICAgICAgICAgICAgICAgICAgbmF0aXZlOiBfdm0uZW1vamlQcm9wcy5uYXRpdmUsXG4gICAgICAgICAgICAgICAgICAgIHNraW46IF92bS5lbW9qaVByb3BzLnNraW4sXG4gICAgICAgICAgICAgICAgICAgIHNldDogX3ZtLmVtb2ppUHJvcHMuc2V0LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlldy1kYXRhXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXRpdGxlLWxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLnNob3dTa2luVG9uZXNcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlldy1za2luc1wiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic2tpbnNcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNraW46IF92bS5za2luUHJvcHMuc2tpbiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vblNraW5DaGFuZ2UoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF0sXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXNlYXJjaFwiIH0sIFtcbiAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICB2YWx1ZTogX3ZtLnZhbHVlLFxuICAgICAgICAgIGV4cHJlc3Npb246IFwidmFsdWVcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgcGxhY2Vob2xkZXI6IF92bS5pMThuLnNlYXJjaCxcbiAgICAgICAgcm9sZTogXCJ0ZXh0Ym94XCIsXG4gICAgICAgIFwiYXJpYS1hdXRvY29tcGxldGVcIjogXCJsaXN0XCIsXG4gICAgICAgIFwiYXJpYS1vd25zXCI6IFwiZW1vamktbWFydC1saXN0XCIsXG4gICAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIlNlYXJjaCBmb3IgYW4gZW1vamlcIixcbiAgICAgICAgXCJhcmlhLWRlc2NyaWJlZGJ5XCI6IFwiZW1vamktbWFydC1zZWFyY2gtZGVzY3JpcHRpb25cIixcbiAgICAgIH0sXG4gICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnZhbHVlIH0sXG4gICAgICBvbjoge1xuICAgICAgICBrZXlkb3duOiBbXG4gICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwibGVmdFwiLCAzNywgJGV2ZW50LmtleSwgW1xuICAgICAgICAgICAgICAgIFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiQXJyb3dMZWZ0XCIsXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICBpZiAoXCJidXR0b25cIiBpbiAkZXZlbnQgJiYgJGV2ZW50LmJ1dHRvbiAhPT0gMCkgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIHJldHVybiAoKCRldmVudCkgPT4gX3ZtLiRlbWl0KFwiYXJyb3dMZWZ0XCIsICRldmVudCkpLmFwcGx5KFxuICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICBhcmd1bWVudHNcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgISRldmVudC50eXBlLmluZGV4T2YoXCJrZXlcIikgJiZcbiAgICAgICAgICAgICAgX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcInJpZ2h0XCIsIDM5LCAkZXZlbnQua2V5LCBbXG4gICAgICAgICAgICAgICAgXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiQXJyb3dSaWdodFwiLFxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgaWYgKFwiYnV0dG9uXCIgaW4gJGV2ZW50ICYmICRldmVudC5idXR0b24gIT09IDIpIHJldHVybiBudWxsXG4gICAgICAgICAgICByZXR1cm4gKCgpID0+IF92bS4kZW1pdChcImFycm93UmlnaHRcIikpLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgISRldmVudC50eXBlLmluZGV4T2YoXCJrZXlcIikgJiZcbiAgICAgICAgICAgICAgX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImRvd25cIiwgNDAsICRldmVudC5rZXksIFtcbiAgICAgICAgICAgICAgICBcIkRvd25cIixcbiAgICAgICAgICAgICAgICBcIkFycm93RG93blwiLFxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgcmV0dXJuICgoKSA9PiBfdm0uJGVtaXQoXCJhcnJvd0Rvd25cIikpLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgISRldmVudC50eXBlLmluZGV4T2YoXCJrZXlcIikgJiZcbiAgICAgICAgICAgICAgX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcInVwXCIsIDM4LCAkZXZlbnQua2V5LCBbXCJVcFwiLCBcIkFycm93VXBcIl0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICByZXR1cm4gKCgkZXZlbnQpID0+IF92bS4kZW1pdChcImFycm93VXBcIiwgJGV2ZW50KSkuYXBwbHkoXG4gICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgIGFyZ3VtZW50c1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZW50ZXJcIiwgMTMsICRldmVudC5rZXksIFwiRW50ZXJcIilcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIHJldHVybiAoKCkgPT4gX3ZtLiRlbWl0KFwiZW50ZXJcIikpLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgX3ZtLnZhbHVlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJzcGFuXCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImhpZGRlblwiLFxuICAgICAgICBhdHRyczogeyBpZDogXCJlbW9qaS1waWNrZXItc2VhcmNoLWRlc2NyaXB0aW9uXCIgfSxcbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF92bS5fdihcbiAgICAgICAgICBcIlVzZSB0aGUgbGVmdCwgcmlnaHQsIHVwIGFuZCBkb3duIGFycm93IGtleXMgdG8gbmF2aWdhdGUgdGhlIGVtb2ppIHNlYXJjaFxcbiAgICByZXN1bHRzLlwiXG4gICAgICAgICksXG4gICAgICBdXG4gICAgKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBjbGFzczoge1xuICAgICAgICBcImVtb2ppLW1hcnQtc2tpbi1zd2F0Y2hlc1wiOiB0cnVlLFxuICAgICAgICBcImVtb2ppLW1hcnQtc2tpbi1zd2F0Y2hlcy1vcGVuZWRcIjogX3ZtLm9wZW5lZCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdm0uX2woNiwgZnVuY3Rpb24gKHNraW5Ub25lKSB7XG4gICAgICByZXR1cm4gX2MoXG4gICAgICAgIFwic3BhblwiLFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBza2luVG9uZSxcbiAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgXCJlbW9qaS1tYXJ0LXNraW4tc3dhdGNoXCI6IHRydWUsXG4gICAgICAgICAgICBcImVtb2ppLW1hcnQtc2tpbi1zd2F0Y2gtc2VsZWN0ZWRcIjogX3ZtLnNraW4gPT0gc2tpblRvbmUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICBjbGFzczogXCJlbW9qaS1tYXJ0LXNraW4gZW1vamktbWFydC1za2luLXRvbmUtXCIgKyBza2luVG9uZSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkNsaWNrKHNraW5Ub25lKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXVxuICAgICAgKVxuICAgIH0pLFxuICAgIDBcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQW5jaG9ycyB9IGZyb20gJy4vYW5jaG9ycy52dWUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhdGVnb3J5IH0gZnJvbSAnLi9jYXRlZ29yeS52dWUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFByZXZpZXcgfSBmcm9tICcuL3ByZXZpZXcudnVlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2ggfSBmcm9tICcuL3NlYXJjaC52dWUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNraW5zIH0gZnJvbSAnLi9za2lucy52dWUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEVtb2ppIH0gZnJvbSAnLi9FbW9qaS52dWUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFBpY2tlciB9IGZyb20gJy4vUGlja2VyLnZ1ZSdcbiIsImNvbnN0IF9TdHJpbmcgPSBTdHJpbmdcblxuZXhwb3J0IGRlZmF1bHQgX1N0cmluZy5mcm9tQ29kZVBvaW50IHx8XG4gIGZ1bmN0aW9uIHN0cmluZ0Zyb21Db2RlUG9pbnQoKSB7XG4gICAgdmFyIE1BWF9TSVpFID0gMHg0MDAwXG4gICAgdmFyIGNvZGVVbml0cyA9IFtdXG4gICAgdmFyIGhpZ2hTdXJyb2dhdGVcbiAgICB2YXIgbG93U3Vycm9nYXRlXG4gICAgdmFyIGluZGV4ID0gLTFcbiAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aFxuICAgIGlmICghbGVuZ3RoKSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9ICcnXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIHZhciBjb2RlUG9pbnQgPSBOdW1iZXIoYXJndW1lbnRzW2luZGV4XSlcbiAgICAgIGlmIChcbiAgICAgICAgIWlzRmluaXRlKGNvZGVQb2ludCkgfHwgLy8gYE5hTmAsIGArSW5maW5pdHlgLCBvciBgLUluZmluaXR5YFxuICAgICAgICBjb2RlUG9pbnQgPCAwIHx8IC8vIG5vdCBhIHZhbGlkIFVuaWNvZGUgY29kZSBwb2ludFxuICAgICAgICBjb2RlUG9pbnQgPiAweDEwZmZmZiB8fCAvLyBub3QgYSB2YWxpZCBVbmljb2RlIGNvZGUgcG9pbnRcbiAgICAgICAgTWF0aC5mbG9vcihjb2RlUG9pbnQpICE9IGNvZGVQb2ludCAvLyBub3QgYW4gaW50ZWdlclxuICAgICAgKSB7XG4gICAgICAgIHRocm93IFJhbmdlRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludDogJyArIGNvZGVQb2ludClcbiAgICAgIH1cbiAgICAgIGlmIChjb2RlUG9pbnQgPD0gMHhmZmZmKSB7XG4gICAgICAgIC8vIEJNUCBjb2RlIHBvaW50XG4gICAgICAgIGNvZGVVbml0cy5wdXNoKGNvZGVQb2ludClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEFzdHJhbCBjb2RlIHBvaW50OyBzcGxpdCBpbiBzdXJyb2dhdGUgaGFsdmVzXG4gICAgICAgIC8vIGh0dHA6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtZW5jb2Rpbmcjc3Vycm9nYXRlLWZvcm11bGFlXG4gICAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwXG4gICAgICAgIGhpZ2hTdXJyb2dhdGUgPSAoY29kZVBvaW50ID4+IDEwKSArIDB4ZDgwMFxuICAgICAgICBsb3dTdXJyb2dhdGUgPSAoY29kZVBvaW50ICUgMHg0MDApICsgMHhkYzAwXG4gICAgICAgIGNvZGVVbml0cy5wdXNoKGhpZ2hTdXJyb2dhdGUsIGxvd1N1cnJvZ2F0ZSlcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleCArIDEgPT09IGxlbmd0aCB8fCBjb2RlVW5pdHMubGVuZ3RoID4gTUFYX1NJWkUpIHtcbiAgICAgICAgcmVzdWx0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgY29kZVVuaXRzKVxuICAgICAgICBjb2RlVW5pdHMubGVuZ3RoID0gMFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbiIsImNvbnN0IFNWR3MgPSB7XG4gIGFjdGl2aXR5OiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTIgMEM1LjM3MyAwIDAgNS4zNzIgMCAxMmMwIDYuNjI3IDUuMzczIDEyIDEyIDEyIDYuNjI4IDAgMTItNS4zNzMgMTItMTIgMC02LjYyOC01LjM3Mi0xMi0xMi0xMm05Ljk0OSAxMUgxNy4wNWMuMjI0LTIuNTI3IDEuMjMyLTQuNzczIDEuOTY4LTYuMTEzQTkuOTY2IDkuOTY2IDAgMCAxIDIxLjk0OSAxMU0xMyAxMVYyLjA1MWE5Ljk0NSA5Ljk0NSAwIDAgMSA0LjQzMiAxLjU2NGMtLjg1OCAxLjQ5MS0yLjE1NiA0LjIyLTIuMzkyIDcuMzg1SDEzem0tMiAwSDguOTYxYy0uMjM4LTMuMTY1LTEuNTM2LTUuODk0LTIuMzkzLTcuMzg1QTkuOTUgOS45NSAwIDAgMSAxMSAyLjA1MVYxMXptMCAydjguOTQ5YTkuOTM3IDkuOTM3IDAgMCAxLTQuNDMyLTEuNTY0Yy44NTctMS40OTIgMi4xNTUtNC4yMjEgMi4zOTMtNy4zODVIMTF6bTQuMDQgMGMuMjM2IDMuMTY0IDEuNTM0IDUuODkzIDIuMzkyIDcuMzg1QTkuOTIgOS45MiAwIDAgMSAxMyAyMS45NDlWMTNoMi4wNHpNNC45ODIgNC44ODdDNS43MTggNi4yMjcgNi43MjYgOC40NzMgNi45NTEgMTFoLTQuOWE5Ljk3NyA5Ljk3NyAwIDAgMSAyLjkzMS02LjExM00yLjA1MSAxM2g0LjljLS4yMjYgMi41MjctMS4yMzMgNC43NzEtMS45NjkgNi4xMTNBOS45NzIgOS45NzIgMCAwIDEgMi4wNTEgMTNtMTYuOTY3IDYuMTEzYy0uNzM1LTEuMzQyLTEuNzQ0LTMuNTg2LTEuOTY4LTYuMTEzaDQuODk5YTkuOTYxIDkuOTYxIDAgMCAxLTIuOTMxIDYuMTEzXCIvPjwvc3ZnPmAsXG5cbiAgY3VzdG9tOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyLjAwMDAwMCwgMS4wMDAwMDApXCI+PHJlY3QgaWQ9XCJSZWN0YW5nbGVcIiB4PVwiOFwiIHk9XCIwXCIgd2lkdGg9XCIzXCIgaGVpZ2h0PVwiMjFcIiByeD1cIjEuNVwiPjwvcmVjdD48cmVjdCBpZD1cIlJlY3RhbmdsZVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5Ljg0MywgMTAuNTQ5KSByb3RhdGUoNjApIHRyYW5zbGF0ZSgtOS44NDMsIC0xMC41NDkpIFwiIHg9XCI4LjM0M1wiIHk9XCIwLjA0OVwiIHdpZHRoPVwiM1wiIGhlaWdodD1cIjIxXCIgcng9XCIxLjVcIj48L3JlY3Q+PHJlY3QgaWQ9XCJSZWN0YW5nbGVcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOS44NDMsIDEwLjU0OSkgcm90YXRlKC02MCkgdHJhbnNsYXRlKC05Ljg0MywgLTEwLjU0OSkgXCIgeD1cIjguMzQzXCIgeT1cIjAuMDQ5XCIgd2lkdGg9XCIzXCIgaGVpZ2h0PVwiMjFcIiByeD1cIjEuNVwiPjwvcmVjdD48L2c+PC9zdmc+YCxcblxuICBmbGFnczogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTAgMGw2LjA4NCAyNEg4TDEuOTE2IDB6TTIxIDVoLTRsLTEtNEg0bDMgMTJoM2wxIDRoMTNMMjEgNXpNNi41NjMgM2g3Ljg3NWwyIDhIOC41NjNsLTItOHptOC44MzIgMTBsLTIuODU2IDEuOTA0TDEyLjA2MyAxM2gzLjMzMnpNMTkgMTNsLTEuNS02aDEuOTM4bDIgOEgxNmwzLTJ6XCIvPjwvc3ZnPmAsXG5cbiAgZm9vZHM6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0xNyA0Ljk3OGMtMS44MzggMC0yLjg3Ni4zOTYtMy42OC45MzQuNTEzLTEuMTcyIDEuNzY4LTIuOTM0IDQuNjgtMi45MzRhMSAxIDAgMCAwIDAtMmMtMi45MjEgMC00LjYyOSAxLjM2NS01LjU0NyAyLjUxMi0uMDY0LjA3OC0uMTE5LjE2Mi0uMTguMjQ0QzExLjczIDEuODM4IDEwLjc5OC4wMjMgOS4yMDcuMDIzIDguNTc5LjAyMiA3Ljg1LjMwNiA3IC45NzggNS4wMjcgMi41NCA1LjMyOSAzLjkwMiA2LjQ5MiA0Ljk5OSAzLjYwOSA1LjIyMiAwIDcuMzUyIDAgMTIuOTY5YzAgNC41ODIgNC45NjEgMTEuMDA5IDkgMTEuMDA5IDEuOTc1IDAgMi4zNzEtLjQ4NiAzLTEgLjYyOS41MTQgMS4wMjUgMSAzIDEgNC4wMzkgMCA5LTYuNDE4IDktMTEgMC01Ljk1My00LjA1NS04LTctOE04LjI0MiAyLjU0NmMuNjQxLS41MDguOTQzLS41MjMuOTY1LS41MjMuNDI2LjE2OS45NzUgMS40MDUgMS4zNTcgMy4wNTUtMS41MjctLjYyOS0yLjc0MS0xLjM1Mi0yLjk4LTEuODQ2LjA1OS0uMTEyLjI0MS0uMzU2LjY1OC0uNjg2TTE1IDIxLjk3OGMtMS4wOCAwLTEuMjEtLjEwOS0xLjU1OS0uNDAybC0uMTc2LS4xNDZjLS4zNjctLjMwMi0uODE2LS40NTItMS4yNjYtLjQ1MnMtLjg5OC4xNS0xLjI2Ni40NTJsLS4xNzYuMTQ2Yy0uMzQ3LjI5Mi0uNDc3LjQwMi0xLjU1Ny40MDItMi44MTMgMC03LTUuMzg5LTctOS4wMDkgMC01LjgyMyA0LjQ4OC01Ljk5MSA1LTUuOTkxIDEuOTM5IDAgMi40ODQuNDcxIDMuMzg3IDEuMjUxbC4zMjMuMjc2YTEuOTk1IDEuOTk1IDAgMCAwIDIuNTggMGwuMzIzLS4yNzZjLjkwMi0uNzggMS40NDctMS4yNTEgMy4zODctMS4yNTEuNTEyIDAgNSAuMTY4IDUgNiAwIDMuNjE3LTQuMTg3IDktNyA5XCIvPjwvc3ZnPmAsXG5cbiAgbmF0dXJlOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTUuNSA4YTEuNSAxLjUgMCAxIDAgLjAwMSAzLjAwMUExLjUgMS41IDAgMCAwIDE1LjUgOE04LjUgOGExLjUgMS41IDAgMSAwIC4wMDEgMy4wMDFBMS41IDEuNSAwIDAgMCA4LjUgOFwiLz48cGF0aCBkPVwiTTE4LjkzMyAwaC0uMDI3Yy0uOTcgMC0yLjEzOC43ODctMy4wMTggMS40OTctMS4yNzQtLjM3NC0yLjYxMi0uNTEtMy44ODctLjUxLTEuMjg1IDAtMi42MTYuMTMzLTMuODc0LjUxN0M3LjI0NS43OSA2LjA2OSAwIDUuMDkzIDBoLS4wMjdDMy4zNTIgMCAuMDcgMi42Ny4wMDIgNy4wMjZjLS4wMzkgMi40NzkuMjc2IDQuMjM4IDEuMDQgNS4wMTMuMjU0LjI1OC44ODIuNjc3IDEuMjk1Ljg4Mi4xOTEgMy4xNzcuOTIyIDUuMjM4IDIuNTM2IDYuMzguODk3LjYzNyAyLjE4Ny45NDkgMy4yIDEuMTAyQzguMDQgMjAuNiA4IDIwLjc5NSA4IDIxYzAgMS43NzMgMi4zNSAzIDQgMyAxLjY0OCAwIDQtMS4yMjcgNC0zIDAtLjIwMS0uMDM4LS4zOTMtLjA3Mi0uNTg2IDIuNTczLS4zODUgNS40MzUtMS44NzcgNS45MjUtNy41ODcuMzk2LS4yMi44ODctLjU2OCAxLjEwNC0uNzg4Ljc2My0uNzc0IDEuMDc5LTIuNTM0IDEuMDQtNS4wMTNDMjMuOTI5IDIuNjcgMjAuNjQ2IDAgMTguOTMzIDBNMy4yMjMgOS4xMzVjLS4yMzcuMjgxLS44MzcgMS4xNTUtLjg4NCAxLjIzOC0uMTUtLjQxLS4zNjgtMS4zNDktLjMzNy0zLjI5MS4wNTEtMy4yODEgMi40NzgtNC45NzIgMy4wOTEtNS4wMzEuMjU2LjAxNS43MzEuMjcgMS4yNjUuNjQ2LTEuMTEgMS4xNzEtMi4yNzUgMi45MTUtMi4zNTIgNS4xMjUtLjEzMy41NDYtLjM5OC44NTgtLjc4MyAxLjMxM00xMiAyMmMtLjkwMSAwLTEuOTU0LS42OTMtMi0xIDAtLjY1NC40NzUtMS4yMzYgMS0xLjYwMlYyMGExIDEgMCAxIDAgMiAwdi0uNjAyYy41MjQuMzY1IDEgLjk0NyAxIDEuNjAyLS4wNDYuMzA3LTEuMDk5IDEtMiAxbTMtMy40OHYuMDJhNC43NTIgNC43NTIgMCAwIDAtMS4yNjItMS4wMmMxLjA5Mi0uNTE2IDIuMjM5LTEuMzM0IDIuMjM5LTIuMjE3IDAtMS44NDItMS43ODEtMi4xOTUtMy45NzctMi4xOTUtMi4xOTYgMC0zLjk3OC4zNTQtMy45NzggMi4xOTUgMCAuODgzIDEuMTQ4IDEuNzAxIDIuMjM4IDIuMjE3QTQuOCA0LjggMCAwIDAgOSAxOC41Mzl2LS4wMjVjLTEtLjA3Ni0yLjE4Mi0uMjgxLTIuOTczLS44NDItMS4zMDEtLjkyLTEuODM4LTMuMDQ1LTEuODUzLTYuNDc4bC4wMjMtLjA0MWMuNDk2LS44MjYgMS40OS0xLjQ1IDEuODA0LTMuMTAyIDAtMi4wNDcgMS4zNTctMy42MzEgMi4zNjItNC41MjJDOS4zNyAzLjE3OCAxMC41NTUgMyAxMS45NDggM2MxLjQ0NyAwIDIuNjg1LjE5MiAzLjczMy41NyAxIC45IDIuMzE2IDIuNDY1IDIuMzE2IDQuNDguMzEzIDEuNjUxIDEuMzA3IDIuMjc1IDEuODAzIDMuMTAyLjAzNS4wNTguMDY4LjExNy4xMDIuMTc4LS4wNTkgNS45NjctMS45NDkgNy4wMS00LjkwMiA3LjE5bTYuNjI4LTguMjAyYy0uMDM3LS4wNjUtLjA3NC0uMTMtLjExMy0uMTk1YTcuNTg3IDcuNTg3IDAgMCAwLS43MzktLjk4N2MtLjM4NS0uNDU1LS42NDgtLjc2OC0uNzgyLTEuMzEzLS4wNzYtMi4yMDktMS4yNDEtMy45NTQtMi4zNTMtNS4xMjQuNTMxLS4zNzYgMS4wMDQtLjYzIDEuMjYxLS42NDcuNjM2LjA3MSAzLjA0NCAxLjc2NCAzLjA5NiA1LjAzMS4wMjcgMS44MS0uMzQ3IDMuMjE4LS4zNyAzLjIzNVwiLz48L3N2Zz5gLFxuXG4gIG9iamVjdHM6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0xMiAwYTkgOSAwIDAgMC01IDE2LjQ4MlYyMXMyLjAzNSAzIDUgMyA1LTMgNS0zdi00LjUxOEE5IDkgMCAwIDAgMTIgMHptMCAyYzMuODYgMCA3IDMuMTQxIDcgN3MtMy4xNCA3LTcgNy03LTMuMTQxLTctNyAzLjE0LTcgNy03ek05IDE3LjQ3N2MuOTQuMzMyIDEuOTQ2LjUyMyAzIC41MjNzMi4wNi0uMTkgMy0uNTIzdi44MzRjLS45MS40MzYtMS45MjUuNjg5LTMgLjY4OWE2LjkyNCA2LjkyNCAwIDAgMS0zLS42OXYtLjgzM3ptLjIzNiAzLjA3QTguODU0IDguODU0IDAgMCAwIDEyIDIxYy45NjUgMCAxLjg4OC0uMTY3IDIuNzU4LS40NTFDMTQuMTU1IDIxLjE3MyAxMy4xNTMgMjIgMTIgMjJjLTEuMTAyIDAtMi4xMTctLjc4OS0yLjc2NC0xLjQ1M3pcIi8+PHBhdGggZD1cIk0xNC43NDUgMTIuNDQ5aC0uMDA0Yy0uODUyLS4wMjQtMS4xODgtLjg1OC0xLjU3Ny0xLjgyNC0uNDIxLTEuMDYxLS43MDMtMS41NjEtMS4xODItMS41NjZoLS4wMDljLS40ODEgMC0uNzgzLjQ5Ny0xLjIzNSAxLjUzNy0uNDM2Ljk4Mi0uODAxIDEuODExLTEuNjM2IDEuNzkxbC0uMjc2LS4wNDNjLS41NjUtLjE3MS0uODUzLS42OTEtMS4yODQtMS43OTQtLjEyNS0uMzEzLS4yMDItLjYzMi0uMjctLjkxMy0uMDUxLS4yMTMtLjEyNy0uNTMtLjE5NS0uNjM0QzcuMDY3IDkuMDA0IDcuMDM5IDkgNi45OSA5QTEgMSAwIDAgMSA3IDdoLjAxYzEuNjYyLjAxNyAyLjAxNSAxLjM3MyAyLjE5OCAyLjEzNC40ODYtLjk4MSAxLjMwNC0yLjA1OCAyLjc5Ny0yLjA3NSAxLjUzMS4wMTggMi4yOCAxLjE1MyAyLjczMSAyLjE0MWwuMDAyLS4wMDhDMTQuOTQ0IDguNDI0IDE1LjMyNyA3IDE2Ljk3OSA3aC4wMzJBMSAxIDAgMSAxIDE3IDloLS4wMTFjLS4xNDkuMDc2LS4yNTYuNDc0LS4zMTkuNzA5YTYuNDg0IDYuNDg0IDAgMCAxLS4zMTEuOTUxYy0uNDI5Ljk3My0uNzkgMS43ODktMS42MTQgMS43ODlcIi8+PC9zdmc+YCxcblxuICBzbWlsZXlzOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTIgMEM1LjM3MyAwIDAgNS4zNzMgMCAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMlMxOC42MjcgMCAxMiAwbTAgMjJDNi40ODYgMjIgMiAxNy41MTQgMiAxMlM2LjQ4NiAyIDEyIDJzMTAgNC40ODYgMTAgMTAtNC40ODYgMTAtMTAgMTBcIi8+PHBhdGggZD1cIk04IDdhMiAyIDAgMSAwLS4wMDEgMy45OTlBMiAyIDAgMCAwIDggN00xNiA3YTIgMiAwIDEgMC0uMDAxIDMuOTk5QTIgMiAwIDAgMCAxNiA3TTE1LjIzMiAxNWMtLjY5MyAxLjE5NS0xLjg3IDItMy4zNDkgMi0xLjQ3NyAwLTIuNjU1LS44MDUtMy4zNDctMkgxNW0zLTJINmE2IDYgMCAxIDAgMTIgMFwiLz48L3N2Zz5gLFxuXG4gIHBlb3BsZTogYDxzdmcgeG1sbnM6c3ZnPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCIyNFwiIHdpZHRoPVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+IDxwYXRoIGlkPVwicGF0aDM4MTRcIiBkPVwibSAzLjM1OTEwODksMjEuMTc3MjYgYyAwLjE3MjAzNiwwLjA5Mzg1IDQuMjY1OTk0LDIuMjk4MzcgOC44MTQ0NDUxLDIuMjk4MzcgNC45Mjc3NjcsMCA4LjY3MDg5NCwtMi4yMTE4ODMgOC44Mjc4MiwtMi4zMDYwMTkgMC4xMTMwNzksLTAuMDY3ODUgMC4xODIyNjgsLTAuMTkwMDUxIDAuMTgyMjY3LC0wLjMyMTkyMyAwLC0zLjAzMTE5IC0wLjkyOTQ5NCwtNS44MDQ5MzYgLTIuNjE3MTk2LC03LjgxMDcxMiAtMS4xODA2MDMsLTEuNDAzMTM0IC0yLjY2MTkxOCwtMi4zNTk1MTYgLTQuMjk1Njk5LC0yLjc5OTc5MSA0LjY5OTExOCwtMi4yMzYyNTggMy4xMDIzMDYsLTkuMjg2MTcxNjIgLTIuMDk3MTkxLC05LjI4NjE3MTYyIC01LjE5OTQ5NzgsMCAtNi43OTYzMTAzLDcuMDQ5OTEzNjIgLTIuMDk3MTkyLDkuMjg2MTcxNjIgLTEuNjMzNzgyMSwwLjQ0MDI3NSAtMy4xMTUwOTcxLDEuMzk2Nzk4IC00LjI5NTY5OTEsMi43OTk3OTEgLTEuNjg3NzAzLDIuMDA1Nzc2IC0yLjYxNzE5Niw0Ljc3OTUyMiAtMi42MTcxOTYsNy44MTA3MTIgMS4yZS02LDAuMTM3Mzc4IDAuMDc1MDM5LDAuMjYzNzg1IDAuMTk1NjQxLDAuMzI5NTcyIHogTSA4LjA0MzkzMTksNS44MzA4NzgzIEMgOC4wNDM5MzA5LDIuMTUxNTIxIDEyLjQ5MjEwNywwLjMwOTU1ODExIDE1LjA5MzQ5MSwyLjkxMDk0MTEgMTcuNjk0ODc0LDUuNTEyMzI0MSAxNS44NTI5MTEsOS45NjA1MDA2IDEyLjE3MzU1NCw5Ljk2MDUgOS44OTM4OTkxLDkuOTU3OTEzNSA4LjA0NjUxODYsOC4xMTA1MzMyIDguMDQzOTMxOSw1LjgzMDg3ODMgWiBtIC0xLjY4ODc4Miw3LjY4OTQ5NzcgYyAxLjUyNDUzNSwtMS44MTE0NDkgMy41OTA2NjAxLC0yLjgwOTAzNSA1LjgxODQwNDEsLTIuODA5MDM1IDIuMjI3NzQ0LDAgNC4yOTM4NjksMC45OTc1ODYgNS44MTg0MDQsMi44MDkwMzUgMS41MzM2MzksMS44MjI1NzEgMi4zOTU5MzIsNC4zMzk4NTggMi40MzkxNTIsNy4xMDgzMDEgLTAuODAzMzUyLDAuNDM0ODc3IC00LjE0MTYzNiwyLjA5NjExMiAtOC4yNTc1NTYsMi4wOTYxMTIgLTMuODA2MjkyMSwwIC03LjM5MTA4NjEsLTEuNjcxMDQzIC04LjI1NzM2ODEsLTIuMTA0OTgxIDAuMDQ1MDUsLTIuNzY1MDE3IDAuOTA2OTY4LC01LjI3ODc4NSAyLjQzODk2NCwtNy4wOTk0MzIgelwiIC8+IDxwYXRoIGlkPVwicGF0aDM4MTZcIiBkPVwiTSAxMi4xNzM4MjggMC4zODg2NzE4OCBDIDkuMzE5ODUxMyAwLjM4ODY3MTg3IDcuMzc3MDk4OCAyLjM2NzIyODUgNi44NjUyMzQ0IDQuNjMwODU5NCBDIDYuNDIxODYwOCA2LjU5MTYwMTUgNy4xMTUzNTYyIDguNzY3NjExNyA4Ljk2NDg0MzggMTAuMTI2OTUzIEMgNy42MTQxMjQ5IDEwLjY3NzM3NiA2LjM1NTA1MTEgMTEuNDgwOTQ0IDUuMzQ5NjA5NCAxMi42NzU3ODEgQyAzLjU2MjkzMTcgMTQuNzk5MTg1IDIuNjAxNTYyNSAxNy43MDE0NzUgMi42MDE1NjI1IDIwLjg0NzY1NiBDIDIuNjAxNTY1NCAyMS4xODk4NjEgMi43ODk0Mjc2IDIxLjUwODAwMiAzLjA4OTg0MzggMjEuNjcxODc1IEMgMy4zMDQ0MDY4IDIxLjc4ODkyNSA3LjQ0MzYyMzkgMjQuMDM5MDYyIDEyLjE3MzgyOCAyNC4wMzkwNjIgQyAxNy4yNjk5MTggMjQuMDM5MDYyIDIxLjA4MzU2OCAyMS43NzY3ODYgMjEuMjkxMDE2IDIxLjY1MjM0NCBDIDIxLjU3MjgxIDIxLjQ4MzI2NiAyMS43NDYwOTcgMjEuMTc2MjgyIDIxLjc0NjA5NCAyMC44NDc2NTYgQyAyMS43NDYwOTQgMTcuNzAxNDc1IDIwLjc4Mjc3IDE0Ljc5OTE4NSAxOC45OTYwOTQgMTIuNjc1NzgxIEMgMTcuOTkwNDU1IDExLjQ4MDU5MSAxNi43MzM4MTggMTAuNjc1MzYyIDE1LjM4MjgxMiAxMC4xMjUgQyAxNy4yMzExMzIgOC43NjU1NTUyIDE3LjkyNTY3NSA2LjU5MTA3MDEgMTcuNDgyNDIyIDQuNjMwODU5NCBDIDE2Ljk3MDU1NyAyLjM2NzIyODUgMTUuMDI3ODA1IDAuMzg4NjcxODggMTIuMTczODI4IDAuMzg4NjcxODggeiBNIDEyLjc5Mjk2OSAyLjMwMDc4MTIgQyAxMy40NjYyNTMgMi40MTYxNzkyIDE0LjEyNTExMyAyLjczODM5NDEgMTQuNjk1MzEyIDMuMzA4NTkzOCBDIDE1LjgzNTcxMiA0LjQ0ODk5MzEgMTUuOTg1NjA0IDUuOTQ3MzU0OSAxNS40Njg3NSA3LjE5NTMxMjUgQyAxNC45NTE4OTYgOC40NDMyNzAxIDEzLjc4NjgyOCA5LjM5ODQzNzggMTIuMTczODI4IDkuMzk4NDM3NSBDIDEwLjE5NzcxOSA5LjM5NjE5NTQgOC42MDc3MTEgNy44MDYxODcgOC42MDU0Njg4IDUuODMwMDc4MSBDIDguNjA1NDY4MyA0LjIxNzA3ODUgOS41NjA2MzYyIDMuMDUyMDEwMiAxMC44MDg1OTQgMi41MzUxNTYyIEMgMTEuNDMyNTczIDIuMjc2NzI5MyAxMi4xMTk2ODUgMi4xODUzODMzIDEyLjc5Mjk2OSAyLjMwMDc4MTIgeiBNIDEyLjE3MzgyOCAxMS4yNzM0MzggQyAxNC4yMzM2NDcgMTEuMjczNDM4IDE2LjEzMzY3NCAxMi4xODUwODQgMTcuNTYyNSAxMy44ODI4MTIgQyAxOC45MzA2OSAxNS41MDg3NjUgMTkuNjk4MzQ3IDE3Ljc3Njk2OSAxOS44MDg1OTQgMjAuMjgzMjAzIEMgMTguODA3Mzk1IDIwLjgwMDIzNSAxNS44ODYxNTcgMjIuMTYyMTA5IDEyLjE3MzgyOCAyMi4xNjIxMDkgQyA4Ljc2MTQ2MzIgMjIuMTYyMTA5IDUuNjI0NTc1NCAyMC43ODcwNjkgNC41MzkwNjI1IDIwLjI2NTYyNSBDIDQuNjUyNTg5NiAxNy43NjY3MTcgNS40MjAzMzE1IDE1LjUwNDc5MSA2Ljc4NTE1NjIgMTMuODgyODEyIEMgOC4yMTM5ODI3IDEyLjE4NTA4NCAxMC4xMTQwMSAxMS4yNzM0MzggMTIuMTczODI4IDExLjI3MzQzOCB6IFwiIC8+IDwvc3ZnPmAsXG5cbiAgcGxhY2VzOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNNi41IDEyQzUuMTIyIDEyIDQgMTMuMTIxIDQgMTQuNVM1LjEyMiAxNyA2LjUgMTcgOSAxNS44NzkgOSAxNC41IDcuODc4IDEyIDYuNSAxMm0wIDNjLS4yNzUgMC0uNS0uMjI1LS41LS41cy4yMjUtLjUuNS0uNS41LjIyNS41LjUtLjIyNS41LS41LjVNMTcuNSAxMmMtMS4zNzggMC0yLjUgMS4xMjEtMi41IDIuNXMxLjEyMiAyLjUgMi41IDIuNSAyLjUtMS4xMjEgMi41LTIuNS0xLjEyMi0yLjUtMi41LTIuNW0wIDNjLS4yNzUgMC0uNS0uMjI1LS41LS41cy4yMjUtLjUuNS0uNS41LjIyNS41LjUtLjIyNS41LS41LjVcIi8+PHBhdGggZD1cIk0yMi40ODIgOS40OTRsLTEuMDM5LS4zNDZMMjEuNCA5aC42Yy41NTIgMCAxLS40MzkgMS0uOTkyIDAtLjAwNi0uMDAzLS4wMDgtLjAwMy0uMDA4SDIzYzAtMS0uODg5LTItMS45ODQtMmgtLjY0MmwtLjczMS0xLjcxN0MxOS4yNjIgMy4wMTIgMTguMDkxIDIgMTYuNzY0IDJINy4yMzZDNS45MDkgMiA0LjczOCAzLjAxMiA0LjM1NyA0LjI4M0wzLjYyNiA2aC0uNjQyQzEuODg5IDYgMSA3IDEgOGguMDAzUzEgOC4wMDIgMSA4LjAwOEMxIDguNTYxIDEuNDQ4IDkgMiA5aC42bC0uMDQzLjE0OC0xLjAzOS4zNDZhMi4wMDEgMi4wMDEgMCAwIDAtMS4zNTkgMi4wOTdsLjc1MSA3LjUwOGExIDEgMCAwIDAgLjk5NC45MDFIM3YxYzAgMS4xMDMuODk2IDIgMiAyaDJjMS4xMDQgMCAyLS44OTcgMi0ydi0xaDZ2MWMwIDEuMTAzLjg5NiAyIDIgMmgyYzEuMTA0IDAgMi0uODk3IDItMnYtMWgxLjA5NmEuOTk5Ljk5OSAwIDAgMCAuOTk0LS45MDFsLjc1MS03LjUwOGEyLjAwMSAyLjAwMSAwIDAgMC0xLjM1OS0yLjA5N002LjI3MyA0Ljg1N0M2LjQwMiA0LjQzIDYuNzg4IDQgNy4yMzYgNGg5LjUyN2MuNDQ4IDAgLjgzNC40My45NjMuODU3TDE5LjMxMyA5SDQuNjg4bDEuNTg1LTQuMTQzek03IDIxSDV2LTFoMnYxem0xMiAwaC0ydi0xaDJ2MXptMi4xODktM0gyLjgxMWwtLjY2Mi02LjYwN0wzIDExaDE4bC44NTIuMzkzTDIxLjE4OSAxOHpcIi8+PC9zdmc+YCxcblxuICByZWNlbnQ6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0xMyA0aC0ybC0uMDAxIDdIOXYyaDJ2Mmgydi0yaDR2LTJoLTR6XCIvPjxwYXRoIGQ9XCJNMTIgMEM1LjM3MyAwIDAgNS4zNzMgMCAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMlMxOC42MjcgMCAxMiAwbTAgMjJDNi40ODYgMjIgMiAxNy41MTQgMiAxMlM2LjQ4NiAyIDEyIDJzMTAgNC40ODYgMTAgMTAtNC40ODYgMTAtMTAgMTBcIi8+PC9zdmc+YCxcblxuICBzeW1ib2xzOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMCAwaDExdjJIMHpNNCAxMWgzVjZoNFY0SDB2Mmg0ek0xNS41IDE3YzEuMzgxIDAgMi41LTEuMTE2IDIuNS0yLjQ5M3MtMS4xMTktMi40OTMtMi41LTIuNDkzUzEzIDEzLjEzIDEzIDE0LjUwNyAxNC4xMTkgMTcgMTUuNSAxN20wLTIuOTg2Yy4yNzYgMCAuNS4yMjIuNS40OTMgMCAuMjcyLS4yMjQuNDkzLS41LjQ5M3MtLjUtLjIyMS0uNS0uNDkzLjIyNC0uNDkzLjUtLjQ5M00yMS41IDE5LjAxNGMtMS4zODEgMC0yLjUgMS4xMTYtMi41IDIuNDkzUzIwLjExOSAyNCAyMS41IDI0czIuNS0xLjExNiAyLjUtMi40OTMtMS4xMTktMi40OTMtMi41LTIuNDkzbTAgMi45ODZhLjQ5Ny40OTcgMCAwIDEtLjUtLjQ5M2MwLS4yNzEuMjI0LS40OTMuNS0uNDkzcy41LjIyMi41LjQ5M2EuNDk3LjQ5NyAwIDAgMS0uNS40OTNNMjIgMTNsLTkgOSAxLjUxMyAxLjUgOC45OS05LjAwOXpNMTcgMTFjMi4yMDkgMCA0LTEuMTE5IDQtMi41VjJzLjk4NS0uMTYxIDEuNDk4Ljk0OUMyMy4wMSA0LjA1NSAyMyA2IDIzIDZzMS0xLjExOSAxLTMuMTM1QzI0LS4wMiAyMSAwIDIxIDBoLTJ2Ni4zNDdBNS44NTMgNS44NTMgMCAwIDAgMTcgNmMtMi4yMDkgMC00IDEuMTE5LTQgMi41czEuNzkxIDIuNSA0IDIuNU0xMC4yOTcgMjAuNDgybC0xLjQ3NS0xLjU4NWE0Ny41NCA0Ny41NCAwIDAgMS0xLjQ0MiAxLjEyOWMtLjMwNy0uMjg4LS45ODktMS4wMTYtMi4wNDUtMi4xODMuOTAyLS44MzYgMS40NzktMS40NjYgMS43MjktMS44OTJzLjM3Ni0uODcxLjM3Ni0xLjMzNmMwLS41OTItLjI3My0xLjE3OC0uODE4LTEuNzU5LS41NDYtLjU4MS0xLjMyOS0uODcxLTIuMzQ5LS44NzEtMS4wMDggMC0xLjc5LjI5My0yLjM0NC44NzktLjU1Ni41ODctLjgzMiAxLjE4MS0uODMyIDEuNzg0IDAgLjgxMy40MTkgMS43NDggMS4yNTYgMi44MDUtLjg0Ny42MTQtMS40NDQgMS4yMDgtMS43OTQgMS43ODRhMy40NjUgMy40NjUgMCAwIDAtLjUyMyAxLjgzM2MwIC44NTcuMzA4IDEuNTYuOTI0IDIuMTA3LjYxNi41NDkgMS40MjMuODIzIDIuNDIuODIzIDEuMTczIDAgMi40NDQtLjM3OSAzLjgxMy0xLjEzN0w4LjIzNSAyNGgyLjgxOWwtMi4wOS0yLjM4MyAxLjMzMy0xLjEzNXptLTYuNzM2LTYuMzg5YTEuMDIgMS4wMiAwIDAgMSAuNzMtLjI4NmMuMzEgMCAuNTU5LjA4NS43NDcuMjU0YS44NDkuODQ5IDAgMCAxIC4yODMuNjU5YzAgLjUxOC0uNDE5IDEuMTEyLTEuMjU3IDEuNzg0LS41MzYtLjY1MS0uODA1LTEuMjMxLS44MDUtMS43NDJhLjkwMS45MDEgMCAwIDEgLjMwMi0uNjY5TTMuNzQgMjJjLS40MjcgMC0uNzc4LS4xMTYtMS4wNTctLjM0OS0uMjc5LS4yMzItLjQxOC0uNDg3LS40MTgtLjc2NiAwLS41OTQuNTA5LTEuMjg4IDEuNTI3LTIuMDgzLjk2OCAxLjEzNCAxLjcxNyAxLjk0NiAyLjI0OCAyLjQzOC0uOTIxLjUwNy0xLjY4Ni43Ni0yLjMuNzZcIi8+PC9zdmc+YCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgU1ZHc1xuIiwiY29uc3QgbWFwcGluZyA9IHtcbiAgbmFtZTogJ2EnLFxuICB1bmlmaWVkOiAnYicsXG4gIG5vbl9xdWFsaWZpZWQ6ICdjJyxcbiAgaGFzX2ltZ19hcHBsZTogJ2QnLFxuICBoYXNfaW1nX2dvb2dsZTogJ2UnLFxuICBoYXNfaW1nX3R3aXR0ZXI6ICdmJyxcbiAgaGFzX2ltZ19mYWNlYm9vazogJ2gnLFxuICBrZXl3b3JkczogJ2onLFxuICBzaGVldDogJ2snLFxuICBlbW90aWNvbnM6ICdsJyxcbiAgdGV4dDogJ20nLFxuICBzaG9ydF9uYW1lczogJ24nLFxuICBhZGRlZF9pbjogJ28nLFxufVxuXG5jb25zdCBidWlsZFNlYXJjaCA9IChlbW9qaSkgPT4ge1xuICBjb25zdCBzZWFyY2ggPSBbXVxuXG4gIHZhciBhZGRUb1NlYXJjaCA9IChzdHJpbmdzLCBzcGxpdCkgPT4ge1xuICAgIGlmICghc3RyaW5ncykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgOyhBcnJheS5pc0FycmF5KHN0cmluZ3MpID8gc3RyaW5ncyA6IFtzdHJpbmdzXSkuZm9yRWFjaCgoc3RyaW5nKSA9PiB7XG4gICAgICA7KHNwbGl0ID8gc3RyaW5nLnNwbGl0KC9bLXxffFxcc10rLykgOiBbc3RyaW5nXSkuZm9yRWFjaCgocykgPT4ge1xuICAgICAgICBzID0gcy50b0xvd2VyQ2FzZSgpXG5cbiAgICAgICAgaWYgKHNlYXJjaC5pbmRleE9mKHMpID09IC0xKSB7XG4gICAgICAgICAgc2VhcmNoLnB1c2gocylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYWRkVG9TZWFyY2goZW1vamkuc2hvcnRfbmFtZXMsIHRydWUpXG4gIGFkZFRvU2VhcmNoKGVtb2ppLm5hbWUsIHRydWUpXG4gIGFkZFRvU2VhcmNoKGVtb2ppLmtleXdvcmRzLCBmYWxzZSlcbiAgYWRkVG9TZWFyY2goZW1vamkuZW1vdGljb25zLCBmYWxzZSlcblxuICByZXR1cm4gc2VhcmNoLmpvaW4oJywnKVxufVxuXG5mdW5jdGlvbiBkZWVwRnJlZXplKG9iamVjdCkge1xuICAvLyBSZXRyaWV2ZSB0aGUgcHJvcGVydHkgbmFtZXMgZGVmaW5lZCBvbiBvYmplY3RcbiAgdmFyIHByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iamVjdClcblxuICAvLyBGcmVlemUgcHJvcGVydGllcyBiZWZvcmUgZnJlZXppbmcgc2VsZlxuICBmb3IgKGxldCBuYW1lIG9mIHByb3BOYW1lcykge1xuICAgIGxldCB2YWx1ZSA9IG9iamVjdFtuYW1lXVxuICAgIG9iamVjdFtuYW1lXSA9XG4gICAgICB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gZGVlcEZyZWV6ZSh2YWx1ZSkgOiB2YWx1ZVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKG9iamVjdClcbn1cblxuY29uc3QgdW5jb21wcmVzcyA9IChkYXRhKSA9PiB7XG4gIGlmICghZGF0YS5jb21wcmVzc2VkKSB7XG4gICAgcmV0dXJuIGRhdGFcbiAgfVxuICBkYXRhLmNvbXByZXNzZWQgPSBmYWxzZVxuXG4gIGZvciAobGV0IGlkIGluIGRhdGEuZW1vamlzKSB7XG4gICAgbGV0IGVtb2ppID0gZGF0YS5lbW9qaXNbaWRdXG5cbiAgICBmb3IgKGxldCBrZXkgaW4gbWFwcGluZykge1xuICAgICAgZW1vamlba2V5XSA9IGVtb2ppW21hcHBpbmdba2V5XV1cbiAgICAgIGRlbGV0ZSBlbW9qaVttYXBwaW5nW2tleV1dXG4gICAgfVxuXG4gICAgaWYgKCFlbW9qaS5zaG9ydF9uYW1lcykgZW1vamkuc2hvcnRfbmFtZXMgPSBbXVxuICAgIGVtb2ppLnNob3J0X25hbWVzLnVuc2hpZnQoaWQpXG5cbiAgICBlbW9qaS5zaGVldF94ID0gZW1vamkuc2hlZXRbMF1cbiAgICBlbW9qaS5zaGVldF95ID0gZW1vamkuc2hlZXRbMV1cbiAgICBkZWxldGUgZW1vamkuc2hlZXRcblxuICAgIGlmICghZW1vamkudGV4dCkgZW1vamkudGV4dCA9ICcnXG5cbiAgICBpZiAoIWVtb2ppLmFkZGVkX2luKSBlbW9qaS5hZGRlZF9pbiA9IDZcbiAgICBlbW9qaS5hZGRlZF9pbiA9IGVtb2ppLmFkZGVkX2luLnRvRml4ZWQoMSlcblxuICAgIGVtb2ppLnNlYXJjaCA9IGJ1aWxkU2VhcmNoKGVtb2ppKVxuICB9XG4gIGRhdGEgPSBkZWVwRnJlZXplKGRhdGEpXG4gIHJldHVybiBkYXRhXG59XG5cbmV4cG9ydCB7IGJ1aWxkU2VhcmNoLCB1bmNvbXByZXNzIH1cbiIsImltcG9ydCB7IGludGVyc2VjdCwgdW5pZmllZFRvTmF0aXZlIH0gZnJvbSAnLi9pbmRleCdcbmltcG9ydCB7IHVuY29tcHJlc3MsIGJ1aWxkU2VhcmNoIH0gZnJvbSAnLi9kYXRhJ1xuaW1wb3J0IGZyZXF1ZW50bHkgZnJvbSAnLi9mcmVxdWVudGx5J1xuXG5jb25zdCBTSEVFVF9DT0xVTU5TID0gNjFcbmNvbnN0IENPTE9OU19SRUdFWCA9IC9eKD86XFw6KFteXFw6XSspXFw6KSg/OlxcOnNraW4tdG9uZS0oXFxkKVxcOik/JC9cbi8vIFNraW4gdG9uZXNcbmNvbnN0IFNLSU5TID0gWycxRjNGQScsICcxRjNGQicsICcxRjNGQycsICcxRjNGRCcsICcxRjNGRScsICcxRjNGRiddXG5cbi8qKlxuICogRW1vamkgZGF0YSBzdHJ1Y3R1cmU6XG4gKiB7XG4gKiAgICBcImNvbXByZXNzZWRcIjogZmFsc2UsXG4gKiAgICBcImFsaWFzZXNcIjoge1xuICogICAgICBjb2xsaXNpb246IFwiYm9vbVwiXG4gKiAgICAgIGNvb2tpbmc6IFwiZnJpZWRfZWdnXCJcbiAqICAgICAgZW52ZWxvcGU6IFwiZW1haWxcIlxuICogICAgICBmYWNlX3dpdGhfZmluZ2VyX2NvdmVyaW5nX2Nsb3NlZF9saXBzOiBcInNodXNoaW5nX2ZhY2VcIlxuICogICAgICAuLi5cbiAqICAgIH0sXG4gKiAgICBcImNhdGVnb3JpZXNcIjogWyB7XG4gKiAgICAgIGlkOiBcInBlb3BsZVwiLFxuICogICAgICBuYW1lOiBcIlNtaWxleXMgJiBFbW90aW9uXCIsXG4gKiAgICAgIGVtb2ppczogWyBcImdyaW5uaW5nXCIsIFwiZ3JpblwiLCBcImpveVwiLCAuLi4gXVxuICogICAgfSwge1xuICogICAgICBpZDogXCJuYXR1cmVcIixcbiAqICAgICAgbmFtZTogXCJBbmltYWxzICYgTmF0dXJlXCIsXG4gKiAgICAgIGVtb2ppczogWyBcIm1vbmtleV9mYWNlXCIsIFwibW9uZXlcIiwgXCJnb3JpbGxhXCIsIC4uLiBdXG4gKiAgICB9LFxuICogICAgLi4uXG4gKiAgICBdLFxuICogICAgXCJlbW9qaXNcIjogW1xuICogICAgICBzbWlsZXk6IHtcbiAqICAgICAgICBhZGRlZF9pbjogXCI2LjBcIixcbiAqICAgICAgICBlbW90aWNvbnM6IFtcIj0pXCIsIFwiPS0pXCJdLFxuICogICAgICAgIGhhc19pbWdfYXBwbGU6IHRydWUsXG4gKiAgICAgICAgaGFzX2ltZ19mYWNlYm9vazogdHJ1ZSxcbiAqICAgICAgICBoYXNfaW1nX2dvb2dsZTogdHJ1ZSxcbiAqICAgICAgICBoYXNfaW1nX3R3aXR0ZXI6IHRydWUsXG4gKiAgICAgICAga2V5d29yZHM6IFtcImZhY2VcIiwgXCJoYXBweVwiLCBcImpveVwiLCBcImhhaGFcIiwgXCI6RFwiLCBcIjopXCIsIFwic21pbGVcIiwgXCJmdW5ueVwiXSxcbiAqICAgICAgICBuYW1lOiBcIlNtaWxpbmcgRmFjZSB3aXRoIE9wZW4gTW91dGhcIixcbiAqICAgICAgICBub25fcXVhbGlmaWVkOiB1bmRlZmluZWQsXG4gKiAgICAgICAgc2VhcmNoOiBcInNtaWxleSxzbWlsaW5nLGZhY2Usd2l0aCxvcGVuLG1vdXRoLGhhcHB5LGpveSxoYWhhLDpkLDopLHNtaWxlLGZ1bm55LD0pLD0tKVwiLFxuICogICAgICAgIHNoZWV0X3g6IDMwLFxuICogICAgICAgIHNoZWV0X3k6IDI3LFxuICogICAgICAgIHNob3J0X25hbWVzOiBbXCJzbWlsZXlcIl0sXG4gKiAgICAgICAgdGV4dDogXCI6KVwiLFxuICogICAgICAgIHVuaWZpZWQ6IFwiMUY2MDNcIixcbiAqICAgICAgfSwge1xuICogICAgICArMTogeyAgICAvLyBlbW9qaSB3aXRoIHNraW5fdmFyaWF0aW9uc1xuICogICAgICAgICAgLi4uLCAvLyBhbGwgdGhlIHJlZ3VsYXIgZmllbGRzIGFyZSBwcmVzZW50XG4gKiAgICAgICAgICBuYW1lOiBcIlRodW1icyBVcCBTaWduXCIsXG4gKiAgICAgICAgICBzaG9ydF9uYW1lczogKDIpIFtcIisxXCIsIFwidGh1bWJzdXBcIl0sXG4gKiAgICAgICAgICBza2luX3ZhcmlhdGlvbnM6IHtcbiAqICAgICAgICAgICAgMUYzRkI6ICAgICAgICAgICAgIC8vIGVhY2ggdmFyaWF0aW9uIGhhcyBhZGRpdGlvbmFsIHNldCBvZiBmaWVsZHM6XG4gKiAgICAgICAgICAgICAgYWRkZWRfaW46IFwiOC4wXCIsXG4gKiAgICAgICAgICAgICAgaGFzX2ltZ19hcHBsZTogdHJ1ZSxcbiAqICAgICAgICAgICAgICBoYXNfaW1nX2ZhY2Vib29rOiB0cnVlLFxuICogICAgICAgICAgICAgIGhhc19pbWdfZ29vZ2xlOiB0cnVlLFxuICogICAgICAgICAgICAgIGhhc19pbWdfdHdpdHRlcjogdHJ1ZSxcbiAqICAgICAgICAgICAgICBpbWFnZTogXCIxZjQ0ZC0xZjNmYi5wbmdcIixcbiAqICAgICAgICAgICAgICBub25fcXVhbGlmaWVkOiBudWxsLFxuICogICAgICAgICAgICAgIHNoZWV0X3g6IDE0LFxuICogICAgICAgICAgICAgIHNoZWV0X3k6IDUwLFxuICogICAgICAgICAgICAgIHVuaWZpZWQ6IFwiMUY0NEQtMUYzRkJcIixcbiAqICAgICAgICAgICAgMUYzRkI6IHvigKZ9LFxuICogICAgICAgICAgICAxRjNGQzoge+KApn0sXG4gKiAgICAgICAgICAgIDFGM0ZEOiB74oCmfSxcbiAqICAgICAgICAgICAgMUYzRkU6IHvigKZ9LFxuICogICAgICAgICAgICAxRjNGRjoge+KApn1cbiAqICAgICAgICAgICAgfSxcbiAqICAgICAgICAgIC4uLlxuICogICAgICB9LFxuICogICAgICBhOiB7ICAvLyBlbW9qaSB3aXRoIG5vbl9xdWFsaWZpZWQgZmllbGQgc2V0XG4gKiAgICAgICAgYWRkZWRfaW46IFwiNi4wXCIsXG4gKiAgICAgICAgZW1vdGljb25zOiB1bmRlZmluZWQsXG4gKiAgICAgICAgaGFzX2ltZ19hcHBsZTogdHJ1ZSxcbiAqICAgICAgICAuLi5cbiAqICAgICAgICBub25fcXVhbGlmaWVkOiBcIjFGMTcwXCIsXG4gKiAgICAgICAgdW5pZmllZDogXCIxRjE3MC1GRTBGXCIsXG4gKiAgICAgfSxcbiAqICAgICAuLi5cbiAqICAgXVxuICogfVxuICovXG5cbi8qKlxuICogV3JhcHMgcmF3IGphc29uIGVtb2ppIGRhdGEsIHNlcnZlcyBhcyBkYXRhIHNvdXJjZSBmb3JcbiAqIGVtb2ppIHBpY2tlciBjb21wb25lbnRzLlxuICpcbiAqIFVzYWdlOlxuICpcbiAqICAgaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YS9hbGwuanNvbidcbiAqICAgbGV0IGluZGV4ID0gbmV3IEVtb2ppSW5kZXgoZGF0YSlcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBFbW9qaUluZGV4IHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIFJhdyBqc29uIGRhdGEsIHNlZSB0aGUgc3RydWN0dXJlIGFib3ZlLlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIGFkZGl0aW9uYWwgb3B0aW9ucywgYXMgYW4gb2JqZWN0OlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBlbW9qaXNUb1Nob3dGaWx0ZXIgLSBvcHRpb25hbCwgZnVuY3Rpb24gdG8gZmlsdGVyIG91dFxuICAgKiAgIHNvbWUgZW1vamlzLCBmdW5jdGlvbihlbW9qaSkgeyByZXR1cm4gdHJ1ZXxmYWxzZSB9XG4gICAqICAgd2hlcmUgYGVtb2ppYCBpcyBhbiByYXcgZW1vamkgb2JqZWN0LCBzZWUgZGF0YS5lbW9qaXMgYWJvdmUuXG4gICAqIEBwYXJhbSB7QXJyYXl9IGluY2x1ZGUgLSBvcHRpb25hbCwgYSBsaXN0IG9mIGNhdGVnb3J5IGlkcyB0byBpbmNsdWRlLlxuICAgKiBAcGFyYW0ge0FycmF5fSBleGNsdWRlIC0gb3B0aW9uYWwsIGEgbGlzdCBvZiBjYXRlZ29yeSBpZHMgdG8gZXhjbHVkZS5cbiAgICogQHBhcmFtIHtBcnJheX0gY3VzdG9tIC0gb3B0aW9uYWwsIGEgbGlzdCBjdXN0b20gZW1vamlzLCBlYWNoIGVtb2ppIGlzXG4gICAqICAgYW4gb2JqZWN0LCBzZWUgZGF0YS5lbW9qaXMgYWJvdmUgZm9yIGV4YW1wbGVzLlxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgZGF0YSxcbiAgICB7XG4gICAgICBlbW9qaXNUb1Nob3dGaWx0ZXIsXG4gICAgICBpbmNsdWRlLFxuICAgICAgZXhjbHVkZSxcbiAgICAgIGN1c3RvbSxcbiAgICAgIHJlY2VudCxcbiAgICAgIHJlY2VudExlbmd0aCA9IDIwLFxuICAgIH0gPSB7fSxcbiAgKSB7XG4gICAgdGhpcy5fZGF0YSA9IHVuY29tcHJlc3MoZGF0YSlcbiAgICAvLyBDYWxsYmFjayB0byBleGNsdWRlIHNwZWNpZmljIGVtb2ppc1xuICAgIHRoaXMuX2Vtb2ppc0ZpbHRlciA9IGVtb2ppc1RvU2hvd0ZpbHRlciB8fCBudWxsXG4gICAgLy8gQ2F0ZWdvcmllcyB0byBpbmNsdWRlIC8gZXhjbHVkZVxuICAgIHRoaXMuX2luY2x1ZGUgPSBpbmNsdWRlIHx8IG51bGxcbiAgICB0aGlzLl9leGNsdWRlID0gZXhjbHVkZSB8fCBudWxsXG4gICAgLy8gQ3VzdG9tIGVtb2ppc1xuICAgIHRoaXMuX2N1c3RvbSA9IGN1c3RvbSB8fCBbXVxuXG4gICAgdGhpcy5yZWNlbnQgPSByZWNlbnRcbiAgICB0aGlzLnJlY2VudExlbmd0aCA9IHJlY2VudExlbmd0aFxuXG4gICAgdGhpcy5fZW1vamlzID0ge31cbiAgICB0aGlzLl9uYXRpdmVFbW9qaXMgPSB7fVxuICAgIHRoaXMuX2Vtb3RpY29ucyA9IHt9XG5cbiAgICB0aGlzLl9jYXRlZ29yaWVzID0gW11cbiAgICB0aGlzLl9yZWNlbnRDYXRlZ29yeSA9IHsgaWQ6ICdyZWNlbnQnLCBuYW1lOiAnUmVjZW50JywgZW1vamlzOiBbXSB9XG4gICAgdGhpcy5fY3VzdG9tQ2F0ZWdvcnkgPSB7IGlkOiAnY3VzdG9tJywgbmFtZTogJ0N1c3RvbScsIGVtb2ppczogW10gfVxuICAgIHRoaXMuX3NlYXJjaEluZGV4ID0ge31cbiAgICB0aGlzLmJ1aWxkSW5kZXgoKVxuICAgIE9iamVjdC5mcmVlemUodGhpcylcbiAgfVxuXG4gIGJ1aWxkSW5kZXgoKSB7XG4gICAgbGV0IGFsbENhdGVnb3JpZXMgPSB0aGlzLl9kYXRhLmNhdGVnb3JpZXNcblxuICAgIGlmICh0aGlzLl9pbmNsdWRlKSB7XG4gICAgICAvLyBSZW1vdmUgY2F0ZWdvcmllcyB0aGF0IGFyZSBub3QgaW4gdGhlIGluY2x1ZGUgbGlzdC5cbiAgICAgIGFsbENhdGVnb3JpZXMgPSBhbGxDYXRlZ29yaWVzLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5jbHVkZS5pbmNsdWRlcyhpdGVtLmlkKVxuICAgICAgfSlcbiAgICAgIC8vIFNvcnQgY2F0ZWdvcmllcyBhY2NvcmRpbmcgdG8gdGhlIGluY2x1ZGUgbGlzdC5cbiAgICAgIGFsbENhdGVnb3JpZXMgPSBhbGxDYXRlZ29yaWVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXhBID0gdGhpcy5faW5jbHVkZS5pbmRleE9mKGEuaWQpXG4gICAgICAgIGNvbnN0IGluZGV4QiA9IHRoaXMuX2luY2x1ZGUuaW5kZXhPZihiLmlkKVxuICAgICAgICBpZiAoaW5kZXhBIDwgaW5kZXhCKSB7XG4gICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4QSA+IGluZGV4Qikge1xuICAgICAgICAgIHJldHVybiAxXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgYWxsQ2F0ZWdvcmllcy5mb3JFYWNoKChjYXRlZ29yeURhdGEpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc0NhdGVnb3J5TmVlZGVkKGNhdGVnb3J5RGF0YS5pZCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBsZXQgY2F0ZWdvcnkgPSB7XG4gICAgICAgIGlkOiBjYXRlZ29yeURhdGEuaWQsXG4gICAgICAgIG5hbWU6IGNhdGVnb3J5RGF0YS5uYW1lLFxuICAgICAgICBlbW9qaXM6IFtdLFxuICAgICAgfVxuICAgICAgY2F0ZWdvcnlEYXRhLmVtb2ppcy5mb3JFYWNoKChlbW9qaUlkKSA9PiB7XG4gICAgICAgIGxldCBlbW9qaSA9IHRoaXMuYWRkRW1vamkoZW1vamlJZClcbiAgICAgICAgaWYgKGVtb2ppKSB7XG4gICAgICAgICAgY2F0ZWdvcnkuZW1vamlzLnB1c2goZW1vamkpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBpZiAoY2F0ZWdvcnkuZW1vamlzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9jYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICh0aGlzLmlzQ2F0ZWdvcnlOZWVkZWQoJ2N1c3RvbScpKSB7XG4gICAgICBpZiAodGhpcy5fY3VzdG9tLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChsZXQgY3VzdG9tRW1vamkgb2YgdGhpcy5fY3VzdG9tKSB7XG4gICAgICAgICAgdGhpcy5hZGRDdXN0b21FbW9qaShjdXN0b21FbW9qaSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2N1c3RvbUNhdGVnb3J5LmVtb2ppcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fY2F0ZWdvcmllcy5wdXNoKHRoaXMuX2N1c3RvbUNhdGVnb3J5KVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlUmVjZW50Q2F0ZWdvcnkoKVxuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgdGhlIGVtb2ppIGZyb20gdGhlIHN0cmluZ1xuICAgKi9cbiAgZmluZEVtb2ppKGVtb2ppLCBza2luKSB7XG4gICAgLy8gMS4gUGFyc2UgYXMgOmVtb2ppX25hbWU6c2tpbi10b25lLXh4OlxuICAgIGxldCBtYXRjaGVzID0gZW1vamkubWF0Y2goQ09MT05TX1JFR0VYKVxuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIGVtb2ppID0gbWF0Y2hlc1sxXVxuICAgICAgaWYgKG1hdGNoZXNbMl0pIHtcbiAgICAgICAgc2tpbiA9IHBhcnNlSW50KG1hdGNoZXNbMl0sIDEwKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDIuIENoZWNrIGlmIHRoZSBzcGVjaWZpZWQgZW1vamkgaXMgYW4gYWxpYXNcbiAgICBpZiAodGhpcy5fZGF0YS5hbGlhc2VzLmhhc093blByb3BlcnR5KGVtb2ppKSkge1xuICAgICAgZW1vamkgPSB0aGlzLl9kYXRhLmFsaWFzZXNbZW1vamldXG4gICAgfVxuXG4gICAgLy8gMy4gQ2hlY2sgaWYgd2UgaGF2ZSB0aGUgc3BlY2lmaWVkIGVtb2ppXG4gICAgaWYgKHRoaXMuX2Vtb2ppcy5oYXNPd25Qcm9wZXJ0eShlbW9qaSkpIHtcbiAgICAgIGxldCBlbW9qaU9iamVjdCA9IHRoaXMuX2Vtb2ppc1tlbW9qaV1cbiAgICAgIGlmIChza2luKSB7XG4gICAgICAgIHJldHVybiBlbW9qaU9iamVjdC5nZXRTa2luKHNraW4pXG4gICAgICB9XG4gICAgICByZXR1cm4gZW1vamlPYmplY3RcbiAgICB9XG5cbiAgICAvLyA0LiBDaGVjayBpZiB3ZSBoYXZlIHRoZSBzcGVjaWZpZWQgbmF0aXZlIGVtb2ppXG4gICAgaWYgKHRoaXMuX25hdGl2ZUVtb2ppcy5oYXNPd25Qcm9wZXJ0eShlbW9qaSkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9uYXRpdmVFbW9qaXNbZW1vamldXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjYXRlZ29yaWVzKCkge1xuICAgIHJldHVybiB0aGlzLl9jYXRlZ29yaWVzXG4gIH1cblxuICBlbW9qaShlbW9qaUlkKSB7XG4gICAgaWYgKHRoaXMuX2RhdGEuYWxpYXNlcy5oYXNPd25Qcm9wZXJ0eShlbW9qaUlkKSkge1xuICAgICAgZW1vamlJZCA9IHRoaXMuX2RhdGEuYWxpYXNlc1tlbW9qaUlkXVxuICAgIH1cbiAgICBsZXQgZW1vamkgPSB0aGlzLl9lbW9qaXNbZW1vamlJZF1cbiAgICBpZiAoIWVtb2ppKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBub3QgZmluZCBlbW9qaSBieSBpZDogJyArIGVtb2ppSWQpXG4gICAgfVxuICAgIHJldHVybiBlbW9qaVxuICB9XG5cbiAgZmlyc3RFbW9qaSgpIHtcbiAgICBsZXQgZW1vamkgPSB0aGlzLl9lbW9qaXNbT2JqZWN0LmtleXModGhpcy5fZW1vamlzKVswXV1cbiAgICBpZiAoIWVtb2ppKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBub3QgZ2V0IGZpcnN0IGVtb2ppJylcbiAgICB9XG4gICAgcmV0dXJuIGVtb2ppXG4gIH1cblxuICBoYXNFbW9qaShlbW9qaUlkKSB7XG4gICAgaWYgKHRoaXMuX2RhdGEuYWxpYXNlcy5oYXNPd25Qcm9wZXJ0eShlbW9qaUlkKSkge1xuICAgICAgZW1vamlJZCA9IHRoaXMuX2RhdGEuYWxpYXNlc1tlbW9qaUlkXVxuICAgIH1cbiAgICBpZiAodGhpcy5fZW1vamlzW2Vtb2ppSWRdKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG5hdGl2ZUVtb2ppKHVuaWNvZGVFbW9qaSkge1xuICAgIGlmICh0aGlzLl9uYXRpdmVFbW9qaXMuaGFzT3duUHJvcGVydHkodW5pY29kZUVtb2ppKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX25hdGl2ZUVtb2ppc1t1bmljb2RlRW1vamldXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBzZWFyY2godmFsdWUsIG1heFJlc3VsdHMpIHtcbiAgICBtYXhSZXN1bHRzIHx8IChtYXhSZXN1bHRzID0gNzUpXG4gICAgaWYgKCF2YWx1ZS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PSAnLScgfHwgdmFsdWUgPT0gJy0xJykge1xuICAgICAgcmV0dXJuIFt0aGlzLmVtb2ppKCctMScpXVxuICAgIH1cblxuICAgIGxldCB2YWx1ZXMgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpLnNwbGl0KC9bXFxzfCx8XFwtfF9dKy8pXG4gICAgbGV0IGFsbFJlc3VsdHMgPSBbXVxuXG4gICAgaWYgKHZhbHVlcy5sZW5ndGggPiAyKSB7XG4gICAgICB2YWx1ZXMgPSBbdmFsdWVzWzBdLCB2YWx1ZXNbMV1dXG4gICAgfVxuXG4gICAgYWxsUmVzdWx0cyA9IHZhbHVlc1xuICAgICAgLm1hcCgodmFsdWUpID0+IHtcbiAgICAgICAgLy8gU3RhcnQgc2VhcmNoaW4gaW4gdGhlIGdsb2JhbCBsaXN0IG9mIGVtb2ppc1xuICAgICAgICBsZXQgZW1vamlzID0gdGhpcy5fZW1vamlzXG4gICAgICAgIGxldCBjdXJyZW50SW5kZXggPSB0aGlzLl9zZWFyY2hJbmRleFxuICAgICAgICBsZXQgbGVuZ3RoID0gMFxuXG4gICAgICAgIGZvciAobGV0IGNoYXJJbmRleCA9IDA7IGNoYXJJbmRleCA8IHZhbHVlLmxlbmd0aDsgY2hhckluZGV4KyspIHtcbiAgICAgICAgICBjb25zdCBjaGFyID0gdmFsdWVbY2hhckluZGV4XVxuICAgICAgICAgIGxlbmd0aCsrXG5cbiAgICAgICAgICBjdXJyZW50SW5kZXhbY2hhcl0gfHwgKGN1cnJlbnRJbmRleFtjaGFyXSA9IHt9KVxuICAgICAgICAgIGN1cnJlbnRJbmRleCA9IGN1cnJlbnRJbmRleFtjaGFyXVxuXG4gICAgICAgICAgaWYgKCFjdXJyZW50SW5kZXgucmVzdWx0cykge1xuICAgICAgICAgICAgbGV0IHNjb3JlcyA9IHt9XG4gICAgICAgICAgICBjdXJyZW50SW5kZXgucmVzdWx0cyA9IFtdXG4gICAgICAgICAgICBjdXJyZW50SW5kZXguZW1vamlzID0ge31cblxuICAgICAgICAgICAgZm9yIChsZXQgZW1vamlJZCBpbiBlbW9qaXMpIHtcbiAgICAgICAgICAgICAgbGV0IGVtb2ppID0gZW1vamlzW2Vtb2ppSWRdXG4gICAgICAgICAgICAgIC8vIHNlYXJjaCBpcyBhIGNvbW1hLXNlcGFyYXRlZCBzdHJpbmcgd2l0aCB3b3JkcywgcmVsYXRlZFxuICAgICAgICAgICAgICAvLyB0byB0aGUgZW1vamksIGZvciBleGFtcGxlOlxuICAgICAgICAgICAgICAvLyBzZWFyY2g6IFwic21pbGV5LHNtaWxpbmcsZmFjZSxqb3ksaGFoYSw6ZCw6KSxzbWlsZSxmdW5ueSw9KSw9LSlcIixcbiAgICAgICAgICAgICAgbGV0IHNlYXJjaCA9IGVtb2ppLl9kYXRhLnNlYXJjaFxuICAgICAgICAgICAgICBsZXQgc3ViID0gdmFsdWUuc3Vic3RyKDAsIGxlbmd0aClcbiAgICAgICAgICAgICAgbGV0IHN1YkluZGV4ID0gc2VhcmNoLmluZGV4T2Yoc3ViKVxuICAgICAgICAgICAgICBpZiAoc3ViSW5kZXggIT0gLTEpIHtcbiAgICAgICAgICAgICAgICBsZXQgc2NvcmUgPSBzdWJJbmRleCArIDFcbiAgICAgICAgICAgICAgICBpZiAoc3ViID09IGVtb2ppSWQpIHNjb3JlID0gMFxuXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4LnJlc3VsdHMucHVzaChlbW9qaSlcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXguZW1vamlzW2Vtb2ppSWRdID0gZW1vamlcblxuICAgICAgICAgICAgICAgIHNjb3Jlc1tlbW9qaUlkXSA9IHNjb3JlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRJbmRleC5yZXN1bHRzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgdmFyIGFTY29yZSA9IHNjb3Jlc1thLmlkXSxcbiAgICAgICAgICAgICAgICBiU2NvcmUgPSBzY29yZXNbYi5pZF1cbiAgICAgICAgICAgICAgcmV0dXJuIGFTY29yZSAtIGJTY29yZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBjb250aW51ZSBzZWFyY2ggaW4gdGhlIHJlZHVjZWQgc2V0IG9mIGVtb2ppc1xuICAgICAgICAgIGVtb2ppcyA9IGN1cnJlbnRJbmRleC5lbW9qaXNcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VycmVudEluZGV4LnJlc3VsdHNcbiAgICAgICAgLy8gVGhlIFwiZmlsdGVyXCIgY2FsbCByZW1vdmVzIHVuZGVmaW5lZCB2YWx1ZXMgZnJvbSBhbGxSZXN1bHRzXG4gICAgICAgIC8vIGFycmF5LCBmb3IgZXhhbXBsZSwgaWYgd2UgaGF2ZSBcInRlc3QgXCIgKHdpdGggdHJhaWxpbmcgc3BhY2UpLFxuICAgICAgICAvLyB3ZSB3aWxsIGdldCBcIltBcnJheSwgdW5kZWZpbmVkXVwiIGZvciBhbGxSZXN1bHRzIGFuZCBhZnRlclxuICAgICAgICAvLyB0aGUgXCJmaWx0ZXJcIiBjYWxsIGl0IHdpbGwgdHVybiBpbnRvIFwiW0FycmF5XVwiXG4gICAgICB9KVxuICAgICAgLmZpbHRlcigoYSkgPT4gYSlcblxuICAgIHZhciByZXN1bHRzID0gbnVsbFxuICAgIGlmIChhbGxSZXN1bHRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHJlc3VsdHMgPSBpbnRlcnNlY3QuYXBwbHkobnVsbCwgYWxsUmVzdWx0cylcbiAgICB9IGVsc2UgaWYgKGFsbFJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICByZXN1bHRzID0gYWxsUmVzdWx0c1swXVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRzID0gW11cbiAgICB9XG4gICAgaWYgKHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiBtYXhSZXN1bHRzKSB7XG4gICAgICByZXN1bHRzID0gcmVzdWx0cy5zbGljZSgwLCBtYXhSZXN1bHRzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0c1xuICB9XG5cbiAgYWRkQ3VzdG9tRW1vamkoY3VzdG9tRW1vamkpIHtcbiAgICBsZXQgZW1vamlEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgY3VzdG9tRW1vamksIHtcbiAgICAgIGlkOiBjdXN0b21FbW9qaS5zaG9ydF9uYW1lc1swXSxcbiAgICAgIGN1c3RvbTogdHJ1ZSxcbiAgICB9KVxuICAgIGlmICghZW1vamlEYXRhLnNlYXJjaCkge1xuICAgICAgZW1vamlEYXRhLnNlYXJjaCA9IGJ1aWxkU2VhcmNoKGVtb2ppRGF0YSlcbiAgICB9XG4gICAgbGV0IGVtb2ppID0gbmV3IEVtb2ppRGF0YShlbW9qaURhdGEpXG4gICAgdGhpcy5fZW1vamlzW2Vtb2ppLmlkXSA9IGVtb2ppXG4gICAgdGhpcy5fY3VzdG9tQ2F0ZWdvcnkuZW1vamlzLnB1c2goZW1vamkpXG4gICAgcmV0dXJuIGVtb2ppXG4gIH1cblxuICBhZGRFbW9qaShlbW9qaUlkKSB7XG4gICAgLy8gV2UgZXhwZWN0IHRoZSBjb3JyZWN0IGVtb2ppIGlkIHRoYXQgaXMgcHJlc2VudCBpbiB0aGUgZW1vamlzIGRhdGEuXG4gICAgbGV0IGRhdGEgPSB0aGlzLl9kYXRhLmVtb2ppc1tlbW9qaUlkXVxuXG4gICAgaWYgKCF0aGlzLmlzRW1vamlOZWVkZWQoZGF0YSkpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGxldCBlbW9qaSA9IG5ldyBFbW9qaURhdGEoZGF0YSlcbiAgICB0aGlzLl9lbW9qaXNbZW1vamlJZF0gPSBlbW9qaVxuICAgIGlmIChlbW9qaS5uYXRpdmUpIHtcbiAgICAgIHRoaXMuX25hdGl2ZUVtb2ppc1tlbW9qaS5uYXRpdmVdID0gZW1vamlcbiAgICB9XG4gICAgaWYgKGVtb2ppLl9za2lucykge1xuICAgICAgZm9yIChsZXQgaWR4IGluIGVtb2ppLl9za2lucykge1xuICAgICAgICBsZXQgc2tpbiA9IGVtb2ppLl9za2luc1tpZHhdXG4gICAgICAgIGlmIChza2luLm5hdGl2ZSkge1xuICAgICAgICAgIHRoaXMuX25hdGl2ZUVtb2ppc1tza2luLm5hdGl2ZV0gPSBza2luXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZW1vamkuZW1vdGljb25zKSB7XG4gICAgICBlbW9qaS5lbW90aWNvbnMuZm9yRWFjaCgoZW1vdGljb24pID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2Vtb3RpY29uc1tlbW90aWNvbl0pIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9lbW90aWNvbnNbZW1vdGljb25dID0gZW1vamlJZFxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIGVtb2ppXG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgd2UgbmVlZCB0byBpbmNsdWRlIGdpdmVuIGNhdGVnb3J5LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2F0ZWdvcnlfaWQgLSBUaGUgY2F0ZWdvcnkgaWQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gV2hldGhlciB0byBpbmNsdWRlIHRoZSBlbW9qaS5cbiAgICovXG4gIGlzQ2F0ZWdvcnlOZWVkZWQoY2F0ZWdvcnlfaWQpIHtcbiAgICBsZXQgaXNJbmNsdWRlZCA9XG4gICAgICB0aGlzLl9pbmNsdWRlICYmIHRoaXMuX2luY2x1ZGUubGVuZ3RoXG4gICAgICAgID8gdGhpcy5faW5jbHVkZS5pbmRleE9mKGNhdGVnb3J5X2lkKSA+IC0xXG4gICAgICAgIDogdHJ1ZVxuICAgIGxldCBpc0V4Y2x1ZGVkID1cbiAgICAgIHRoaXMuX2V4Y2x1ZGUgJiYgdGhpcy5fZXhjbHVkZS5sZW5ndGhcbiAgICAgICAgPyB0aGlzLl9leGNsdWRlLmluZGV4T2YoY2F0ZWdvcnlfaWQpID4gLTFcbiAgICAgICAgOiBmYWxzZVxuICAgIGlmICghaXNJbmNsdWRlZCB8fCBpc0V4Y2x1ZGVkKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB3ZSBuZWVkIHRvIGluY2x1ZGUgZ2l2ZW4gZW1vamkuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBlbW9qaSAtIFRoZSByYXcgZW1vamkgb2JqZWN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSAtIFdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgZW1vamkuXG4gICAqL1xuICBpc0Vtb2ppTmVlZGVkKGVtb2ppKSB7XG4gICAgaWYgKHRoaXMuX2Vtb2ppc0ZpbHRlcikge1xuICAgICAgcmV0dXJuIHRoaXMuX2Vtb2ppc0ZpbHRlcihlbW9qaSlcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgcmVjZW50IGNhdGVnb3J5XG4gIHVwZGF0ZVJlY2VudENhdGVnb3J5KCkge1xuICAgIGlmICh0aGlzLmlzQ2F0ZWdvcnlOZWVkZWQoJ3JlY2VudCcpKSB7XG4gICAgICBjb25zdCByZWNlbnRFbW9qaXMgPSB0aGlzLnJlY2VudCB8fCBmcmVxdWVudGx5LmdldCh0aGlzLnJlY2VudExlbmd0aCwgdHJ1ZSlcbiAgICAgIGNvbnN0IG5ld1JlY2VudEVtb2ppcyA9IFtdXG4gICAgICBpZiAocmVjZW50RW1vamlzLmxlbmd0aCkge1xuICAgICAgICByZWNlbnRFbW9qaXMubWFwKChpZCkgPT4ge1xuICAgICAgICAgIGZvciAobGV0IGN1c3RvbUVtb2ppIG9mIHRoaXMuX2N1c3RvbUNhdGVnb3J5LmVtb2ppcykge1xuICAgICAgICAgICAgaWYgKGN1c3RvbUVtb2ppLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICBuZXdSZWNlbnRFbW9qaXMucHVzaChjdXN0b21FbW9qaSlcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLmhhc0Vtb2ppKGlkKSkge1xuICAgICAgICAgICAgbmV3UmVjZW50RW1vamlzLnB1c2godGhpcy5lbW9qaShpZCkpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgLy8gQWRkIHJlY2VudCBjYXRlZ29yeSB0byB0aGUgdG9wXG4gICAgICBjb25zdCBpc0V4aXN0UmVjZW50Q2F0ZWdvcnkgPSB0aGlzLl9jYXRlZ29yaWVzLnNvbWUoKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS5pZCA9PT0gJ3JlY2VudCcpXG4gICAgICBpZiAobmV3UmVjZW50RW1vamlzLmxlbmd0aCAmJiAhaXNFeGlzdFJlY2VudENhdGVnb3J5KSB7XG4gICAgICAgIHRoaXMuX2NhdGVnb3JpZXMudW5zaGlmdCh0aGlzLl9yZWNlbnRDYXRlZ29yeSlcbiAgICAgIH1cbiAgICAgIHRoaXMuX3JlY2VudENhdGVnb3J5LmVtb2ppcyA9IG5ld1JlY2VudEVtb2ppc1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRW1vamlEYXRhIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuX2RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhKVxuICAgIHRoaXMuX3NraW5zID0gbnVsbFxuICAgIGlmICh0aGlzLl9kYXRhLnNraW5fdmFyaWF0aW9ucykge1xuICAgICAgdGhpcy5fc2tpbnMgPSBbXVxuICAgICAgZm9yICh2YXIgc2tpbklkeCBpbiBTS0lOUykge1xuICAgICAgICBsZXQgc2tpbktleSA9IFNLSU5TW3NraW5JZHhdXG4gICAgICAgIGxldCB2YXJpYXRpb25EYXRhID0gdGhpcy5fZGF0YS5za2luX3ZhcmlhdGlvbnNbc2tpbktleV1cbiAgICAgICAgbGV0IHNraW5EYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSlcbiAgICAgICAgZm9yIChsZXQgayBpbiB2YXJpYXRpb25EYXRhKSB7XG4gICAgICAgICAgc2tpbkRhdGFba10gPSB2YXJpYXRpb25EYXRhW2tdXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHNraW5EYXRhLnNraW5fdmFyaWF0aW9uc1xuICAgICAgICBza2luRGF0YVsnc2tpbl90b25lJ10gPSBwYXJzZUludChza2luSWR4KSArIDFcbiAgICAgICAgdGhpcy5fc2tpbnMucHVzaChuZXcgRW1vamlEYXRhKHNraW5EYXRhKSlcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fc2FuaXRpemVkID0gc2FuaXRpemUodGhpcy5fZGF0YSlcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fc2FuaXRpemVkKSB7XG4gICAgICB0aGlzW2tleV0gPSB0aGlzLl9zYW5pdGl6ZWRba2V5XVxuICAgIH1cbiAgICB0aGlzLnNob3J0X25hbWVzID0gdGhpcy5fZGF0YS5zaG9ydF9uYW1lc1xuICAgIHRoaXMuc2hvcnRfbmFtZSA9IHRoaXMuX2RhdGEuc2hvcnRfbmFtZXNbMF1cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpXG4gIH1cblxuICBnZXRTa2luKHNraW5JZHgpIHtcbiAgICBpZiAoc2tpbklkeCAmJiBza2luSWR4ICE9ICduYXRpdmUnICYmIHRoaXMuX3NraW5zKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2tpbnNbc2tpbklkeCAtIDFdXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICBsZXQgYWRqdXN0ZWRDb2x1bW5zID0gU0hFRVRfQ09MVU1OUyAtIDEsXG4gICAgICB4ID0gKygoMTAwIC8gYWRqdXN0ZWRDb2x1bW5zKSAqIHRoaXMuX2RhdGEuc2hlZXRfeCkudG9GaXhlZCgyKSxcbiAgICAgIHkgPSArKCgxMDAgLyBhZGp1c3RlZENvbHVtbnMpICogdGhpcy5fZGF0YS5zaGVldF95KS50b0ZpeGVkKDIpXG4gICAgcmV0dXJuIGAke3h9JSAke3l9JWBcbiAgfVxuXG4gIGFyaWFMYWJlbCgpIHtcbiAgICByZXR1cm4gW3RoaXMubmF0aXZlXS5jb25jYXQodGhpcy5zaG9ydF9uYW1lcykuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJywgJylcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRW1vamlWaWV3IHtcbiAgLyoqXG4gICAqIGVtb2ppIC0gRW1vamkgdG8gZGlzcGxheVxuICAgKiBzZXQgLSBzdHJpbmcsIGVtb2ppIHNldCBuYW1lXG4gICAqIG5hdGl2ZSAtIGJvb2xlYW4sIHdoZXRoZXIgdG8gcmVuZGVyIG5hdGl2ZSBlbW9qaVxuICAgKiBmYWxsYmFjayAtIGZhbGxiYWNrIGZ1bmN0aW9uIHRvIHJlbmRlciBtaXNzaW5nIGVtb2ppLCBvcHRpb25hbFxuICAgKiBlbW9qaVRvb2x0aXAgLSB3ZXRoZXIgd2UgbmVlZCB0byBzaG93IHRoZSBlbW9qaSB0b29sdGlwLCBvcHRpb25hbFxuICAgKiBlbW9qaVNpemUgLSBlbW9qaSBzaXplIGluIHBpeGVscywgb3B0aW9uYWxcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVtb2ppLCBza2luLCBzZXQsIG5hdGl2ZSwgZmFsbGJhY2ssIGVtb2ppVG9vbHRpcCwgZW1vamlTaXplKSB7XG4gICAgdGhpcy5fZW1vamkgPSBlbW9qaVxuICAgIHRoaXMuX25hdGl2ZSA9IG5hdGl2ZVxuICAgIHRoaXMuX3NraW4gPSBza2luXG4gICAgdGhpcy5fc2V0ID0gc2V0XG4gICAgdGhpcy5fZmFsbGJhY2sgPSBmYWxsYmFja1xuXG4gICAgdGhpcy5jYW5SZW5kZXIgPSB0aGlzLl9jYW5SZW5kZXIoKVxuICAgIHRoaXMuY3NzQ2xhc3MgPSB0aGlzLl9jc3NDbGFzcygpXG4gICAgdGhpcy5jc3NTdHlsZSA9IHRoaXMuX2Nzc1N0eWxlKGVtb2ppU2l6ZSlcbiAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLl9jb250ZW50KClcbiAgICB0aGlzLnRpdGxlID0gZW1vamlUb29sdGlwID09PSB0cnVlID8gZW1vamkuc2hvcnRfbmFtZSA6IG51bGxcbiAgICB0aGlzLmFyaWFMYWJlbCA9IGVtb2ppLmFyaWFMYWJlbCgpXG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpXG4gIH1cblxuICBnZXRFbW9qaSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW1vamkuZ2V0U2tpbih0aGlzLl9za2luKVxuICB9XG5cbiAgX2NhblJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5faXNDdXN0b20oKSB8fCB0aGlzLl9pc05hdGl2ZSgpIHx8IHRoaXMuX2hhc0Vtb2ppKCkgfHwgdGhpcy5fZmFsbGJhY2tcbiAgICApXG4gIH1cblxuICBfY3NzQ2xhc3MoKSB7XG4gICAgcmV0dXJuIFsnZW1vamktc2V0LScgKyB0aGlzLl9zZXQsICdlbW9qaS10eXBlLScgKyB0aGlzLl9lbW9qaVR5cGUoKV1cbiAgfVxuXG4gIF9jc3NTdHlsZShlbW9qaVNpemUpIHtcbiAgICBsZXQgY3NzU3R5bGUgPSB7fVxuICAgIGlmICh0aGlzLl9pc0N1c3RvbSgpKSB7XG4gICAgICBjc3NTdHlsZSA9IHtcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyB0aGlzLmdldEVtb2ppKCkuX2RhdGEuaW1hZ2VVcmwgKyAnKScsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnMTAwJScsXG4gICAgICAgIHdpZHRoOiBlbW9qaVNpemUgKyAncHgnLFxuICAgICAgICBoZWlnaHQ6IGVtb2ppU2l6ZSArICdweCcsXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl9oYXNFbW9qaSgpICYmICF0aGlzLl9pc05hdGl2ZSgpKSB7XG4gICAgICBjc3NTdHlsZSA9IHtcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiB0aGlzLmdldEVtb2ppKCkuZ2V0UG9zaXRpb24oKSxcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVtb2ppU2l6ZSkge1xuICAgICAgaWYgKHRoaXMuX2lzTmF0aXZlKCkpIHtcbiAgICAgICAgLy8gU2V0IGZvbnQtc2l6ZSBmb3IgbmF0aXZlIGVtb2ppLlxuICAgICAgICBjc3NTdHlsZSA9IE9iamVjdC5hc3NpZ24oY3NzU3R5bGUsIHtcbiAgICAgICAgICAvLyBmb250LXNpemUgaXMgdXNlZCBmb3IgbmF0aXZlIGVtb2ppIHdoaWNoIHdlIG5lZWRcbiAgICAgICAgICAvLyB0byBzY2FsZSB3aXRoIDAuOTUgZmFjdG9yIHRvIGhhdmUgdGhlbSBsb29rIGFwcHJveGltYXRlbHlcbiAgICAgICAgICAvLyB0aGUgc2FtZSBzaXplIGFzIGltYWdlLWJhc2VkIGVtb2ppLlxuICAgICAgICAgIGZvbnRTaXplOiBNYXRoLnJvdW5kKGVtb2ppU2l6ZSAqIDAuOTUgKiAxMCkgLyAxMCArICdweCcsXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTZXQgd2lkdGgvaGVpZ2h0IGZvciBpbWFnZSBlbW9qaS5cbiAgICAgICAgY3NzU3R5bGUgPSBPYmplY3QuYXNzaWduKGNzc1N0eWxlLCB7XG4gICAgICAgICAgd2lkdGg6IGVtb2ppU2l6ZSArICdweCcsXG4gICAgICAgICAgaGVpZ2h0OiBlbW9qaVNpemUgKyAncHgnLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3NzU3R5bGVcbiAgfVxuXG4gIF9jb250ZW50KCkge1xuICAgIGlmICh0aGlzLl9pc0N1c3RvbSgpKSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lzTmF0aXZlKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEVtb2ppKCkubmF0aXZlXG4gICAgfVxuICAgIGlmICh0aGlzLl9oYXNFbW9qaSgpKSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2ZhbGxiYWNrID8gdGhpcy5fZmFsbGJhY2sodGhpcy5nZXRFbW9qaSgpKSA6IG51bGxcbiAgfVxuXG4gIF9pc05hdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmF0aXZlXG4gIH1cblxuICBfaXNDdXN0b20oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RW1vamkoKS5jdXN0b21cbiAgfVxuXG4gIF9oYXNFbW9qaSgpIHtcbiAgICBpZiAoIXRoaXMuZ2V0RW1vamkoKS5fZGF0YSkge1xuICAgICAgLy8gUmV0dXJuIGZhbHNlIGlmIHdlIGhhdmUgbm8gZGF0YS5cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBjb25zdCBoYXNJbWFnZSA9IHRoaXMuZ2V0RW1vamkoKS5fZGF0YVsnaGFzX2ltZ18nICsgdGhpcy5fc2V0XVxuICAgIGlmIChoYXNJbWFnZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBJZiB0aGVyZSBpcyBubyBoYXNfaW1nX3h4eCBpbiB0aGUgZGF0YSwgd2UgYXJlIHdvcmtpbmcgd2l0aFxuICAgICAgLy8gc3BlY2lmaWMgZGF0YSBmaWxlLCBsaWtlIGZhY2Vib29rLmpzb24sIHNvIHdlIGFzc3VtZSBhbGxcbiAgICAgIC8vIGVtb2ppcyBhcmUgYXZhaWxhYmxlICh0aGUgOnNldCBzZXR0aW5nIGZvciBwaWNrZXIgc2hvdWxkXG4gICAgICAvLyBtYXRjaCB0aGUgZGF0YSBmaWxlKS5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIC8vIE90aGVyd2lzZSwgd2UgYXJlIHVzaW5nIGFsbC5qc29uIGFuZCBjYW4gc3dpdGNoIGJldHdlZW4gZGlmZmVyZW50XG4gICAgLy8gc2V0cyAtIGluIHRoaXMgY2FzZSB0aGUgYGhhc19pbWdfe3NldF9uYW1lfWAgaXMgYSBib29sZWFuIHRoYXRcbiAgICAvLyBpbmRpY2F0ZXMgaWYgdGhlcmUgaXMgc3VjaCBpbWFnZSBvciBub3QgZm9yIGEgZ2l2ZW4gc2V0LlxuICAgIHJldHVybiBoYXNJbWFnZVxuICB9XG5cbiAgX2Vtb2ppVHlwZSgpIHtcbiAgICBpZiAodGhpcy5faXNDdXN0b20oKSkge1xuICAgICAgcmV0dXJuICdjdXN0b20nXG4gICAgfVxuICAgIGlmICh0aGlzLl9pc05hdGl2ZSgpKSB7XG4gICAgICByZXR1cm4gJ25hdGl2ZSdcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hhc0Vtb2ppKCkpIHtcbiAgICAgIHJldHVybiAnaW1hZ2UnXG4gICAgfVxuICAgIHJldHVybiAnZmFsbGJhY2snXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplKGVtb2ppKSB7XG4gIHZhciB7XG4gICAgICBuYW1lLFxuICAgICAgc2hvcnRfbmFtZXMsXG4gICAgICBza2luX3RvbmUsXG4gICAgICBza2luX3ZhcmlhdGlvbnMsXG4gICAgICBlbW90aWNvbnMsXG4gICAgICB1bmlmaWVkLFxuICAgICAgY3VzdG9tLFxuICAgICAgaW1hZ2VVcmwsXG4gICAgfSA9IGVtb2ppLFxuICAgIGlkID0gZW1vamkuaWQgfHwgc2hvcnRfbmFtZXNbMF0sXG4gICAgY29sb25zID0gYDoke2lkfTpgXG5cbiAgaWYgKGN1c3RvbSkge1xuICAgIHJldHVybiB7XG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgICBjb2xvbnMsXG4gICAgICBlbW90aWNvbnMsXG4gICAgICBjdXN0b20sXG4gICAgICBpbWFnZVVybCxcbiAgICB9XG4gIH1cblxuICBpZiAoc2tpbl90b25lKSB7XG4gICAgY29sb25zICs9IGA6c2tpbi10b25lLSR7c2tpbl90b25lfTpgXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlkLFxuICAgIG5hbWUsXG4gICAgY29sb25zLFxuICAgIGVtb3RpY29ucyxcbiAgICB1bmlmaWVkOiB1bmlmaWVkLnRvTG93ZXJDYXNlKCksXG4gICAgc2tpbjogc2tpbl90b25lIHx8IChza2luX3ZhcmlhdGlvbnMgPyAxIDogbnVsbCksXG4gICAgbmF0aXZlOiB1bmlmaWVkVG9OYXRpdmUodW5pZmllZCksXG4gIH1cbn1cbiIsImltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xuXG5jb25zdCBERUZBVUxUUyA9IFtcbiAgJysxJyxcbiAgJ2dyaW5uaW5nJyxcbiAgJ2tpc3NpbmdfaGVhcnQnLFxuICAnaGVhcnRfZXllcycsXG4gICdsYXVnaGluZycsXG4gICdzdHVja19vdXRfdG9uZ3VlX3dpbmtpbmdfZXllJyxcbiAgJ3N3ZWF0X3NtaWxlJyxcbiAgJ2pveScsXG4gICdzY3JlYW0nLFxuICAnZGlzYXBwb2ludGVkJyxcbiAgJ3VuYW11c2VkJyxcbiAgJ3dlYXJ5JyxcbiAgJ3NvYicsXG4gICdzdW5nbGFzc2VzJyxcbiAgJ2hlYXJ0JyxcbiAgJ2hhbmtleScsXG5dXG5cbmxldCBmcmVxdWVudGx5LCBpbml0aWFsaXplZFxubGV0IGRlZmF1bHRzID0ge31cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgaW5pdGlhbGl6ZWQgPSB0cnVlXG4gIGZyZXF1ZW50bHkgPSBzdG9yZS5nZXQoJ2ZyZXF1ZW50bHknKVxufVxuXG5mdW5jdGlvbiBhZGQoZW1vamkpIHtcbiAgaWYgKCFpbml0aWFsaXplZCkgaW5pdCgpXG4gIHZhciB7IGlkIH0gPSBlbW9qaVxuXG4gIGZyZXF1ZW50bHkgfHwgKGZyZXF1ZW50bHkgPSBkZWZhdWx0cylcbiAgZnJlcXVlbnRseVtpZF0gfHwgKGZyZXF1ZW50bHlbaWRdID0gMClcbiAgZnJlcXVlbnRseVtpZF0gKz0gMVxuXG4gIHN0b3JlLnNldCgnbGFzdCcsIGlkKVxuICBzdG9yZS5zZXQoJ2ZyZXF1ZW50bHknLCBmcmVxdWVudGx5KVxufVxuXG5mdW5jdGlvbiBnZXQobWF4TnVtYmVyLCBmb3JjZVVwZGF0ZSA9IGZhbHNlKSB7XG4gIGlmIChmb3JjZVVwZGF0ZSkge1xuICAgIGZyZXF1ZW50bHkgPSB1bmRlZmluZWRcbiAgICBpbml0aWFsaXplZCA9IGZhbHNlXG4gIH1cbiAgaWYgKCFpbml0aWFsaXplZCkgaW5pdCgpXG4gIGlmICghZnJlcXVlbnRseSkge1xuICAgIGRlZmF1bHRzID0ge31cblxuICAgIGNvbnN0IHJlc3VsdCA9IFtdXG5cbiAgICBsZXQgZGVmYXVsdExlbmd0aCA9IE1hdGgubWluKG1heE51bWJlciwgREVGQVVMVFMubGVuZ3RoKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVmYXVsdExlbmd0aDsgaSsrKSB7XG4gICAgICBkZWZhdWx0c1tERUZBVUxUU1tpXV0gPSBwYXJzZUludCgoZGVmYXVsdExlbmd0aCAtIGkpIC8gNCwgMTApICsgMVxuICAgICAgcmVzdWx0LnB1c2goREVGQVVMVFNbaV0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgY29uc3QgcXVhbnRpdHkgPSBtYXhOdW1iZXJcbiAgY29uc3QgZnJlcXVlbnRseUtleXMgPSBbXVxuXG4gIGZvciAobGV0IGtleSBpbiBmcmVxdWVudGx5KSB7XG4gICAgaWYgKGZyZXF1ZW50bHkuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgZnJlcXVlbnRseUtleXMucHVzaChrZXkpXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc29ydGVkID0gZnJlcXVlbnRseUtleXNcbiAgICAuc29ydCgoYSwgYikgPT4gZnJlcXVlbnRseVthXSAtIGZyZXF1ZW50bHlbYl0pXG4gICAgLnJldmVyc2UoKVxuICBjb25zdCBzbGljZWQgPSBzb3J0ZWQuc2xpY2UoMCwgcXVhbnRpdHkpXG5cbiAgY29uc3QgbGFzdCA9IHN0b3JlLmdldCgnbGFzdCcpXG5cbiAgaWYgKGxhc3QgJiYgc2xpY2VkLmluZGV4T2YobGFzdCkgPT0gLTEpIHtcbiAgICBzbGljZWQucG9wKClcbiAgICBzbGljZWQucHVzaChsYXN0KVxuICB9XG5cbiAgcmV0dXJuIHNsaWNlZFxufVxuXG5leHBvcnQgZGVmYXVsdCB7IGFkZCwgZ2V0IH1cbiIsImltcG9ydCBzdHJpbmdGcm9tQ29kZVBvaW50IGZyb20gJy4uL3BvbHlmaWxscy9zdHJpbmdGcm9tQ29kZVBvaW50J1xuXG5mdW5jdGlvbiB1bmlmaWVkVG9OYXRpdmUodW5pZmllZCkge1xuICB2YXIgdW5pY29kZXMgPSB1bmlmaWVkLnNwbGl0KCctJyksXG4gICAgY29kZVBvaW50cyA9IHVuaWNvZGVzLm1hcCgodSkgPT4gYDB4JHt1fWApXG5cbiAgcmV0dXJuIHN0cmluZ0Zyb21Db2RlUG9pbnQuYXBwbHkobnVsbCwgY29kZVBvaW50cylcbn1cblxuZnVuY3Rpb24gdW5pcShhcnIpIHtcbiAgcmV0dXJuIGFyci5yZWR1Y2UoKGFjYywgaXRlbSkgPT4ge1xuICAgIGlmIChhY2MuaW5kZXhPZihpdGVtKSA9PT0gLTEpIHtcbiAgICAgIGFjYy5wdXNoKGl0ZW0pXG4gICAgfVxuICAgIHJldHVybiBhY2NcbiAgfSwgW10pXG59XG5cbmZ1bmN0aW9uIGludGVyc2VjdChhLCBiKSB7XG4gIGNvbnN0IHVuaXFBID0gdW5pcShhKVxuICBjb25zdCB1bmlxQiA9IHVuaXEoYilcblxuICByZXR1cm4gdW5pcUEuZmlsdGVyKChpdGVtKSA9PiB1bmlxQi5pbmRleE9mKGl0ZW0pID49IDApXG59XG5cbmZ1bmN0aW9uIGRlZXBNZXJnZShhLCBiKSB7XG4gIHZhciBvID0ge31cblxuICBmb3IgKGxldCBrZXkgaW4gYSkge1xuICAgIGxldCBvcmlnaW5hbFZhbHVlID0gYVtrZXldLFxuICAgICAgdmFsdWUgPSBvcmlnaW5hbFZhbHVlXG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIGtleSkpIHtcbiAgICAgIHZhbHVlID0gYltrZXldXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhbHVlID0gZGVlcE1lcmdlKG9yaWdpbmFsVmFsdWUsIHZhbHVlKVxuICAgIH1cblxuICAgIG9ba2V5XSA9IHZhbHVlXG4gIH1cblxuICByZXR1cm4gb1xufVxuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vc29uaWNkb2UvbWVhc3VyZS1zY3JvbGxiYXJcbmZ1bmN0aW9uIG1lYXN1cmVTY3JvbGxiYXIoKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT0gJ3VuZGVmaW5lZCcpIHJldHVybiAwXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgZGl2LnN0eWxlLndpZHRoID0gJzEwMHB4J1xuICBkaXYuc3R5bGUuaGVpZ2h0ID0gJzEwMHB4J1xuICBkaXYuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJ1xuICBkaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gIGRpdi5zdHlsZS50b3AgPSAnLTk5OTlweCdcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdilcbiAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBkaXYub2Zmc2V0V2lkdGggLSBkaXYuY2xpZW50V2lkdGhcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkaXYpXG5cbiAgcmV0dXJuIHNjcm9sbGJhcldpZHRoXG59XG5cbmV4cG9ydCB7IHVuaXEsIGludGVyc2VjdCwgZGVlcE1lcmdlLCB1bmlmaWVkVG9OYXRpdmUsIG1lYXN1cmVTY3JvbGxiYXIgfVxuIiwiZXhwb3J0IGNsYXNzIFBpY2tlclZpZXcge1xuICBjb25zdHJ1Y3RvcihwaWNrZXJDb21wb25lbnQpIHtcbiAgICB0aGlzLl92bSA9IHBpY2tlckNvbXBvbmVudFxuICAgIHRoaXMuX2RhdGEgPSBwaWNrZXJDb21wb25lbnQuZGF0YVxuICAgIHRoaXMuX3BlckxpbmUgPSBwaWNrZXJDb21wb25lbnQucGVyTGluZVxuXG4gICAgdGhpcy5fY2F0ZWdvcmllcyA9IFtdXG4gICAgdGhpcy5fY2F0ZWdvcmllcy5wdXNoKC4uLnRoaXMuX2RhdGEuY2F0ZWdvcmllcygpKVxuICAgIHRoaXMuX2NhdGVnb3JpZXMgPSB0aGlzLl9jYXRlZ29yaWVzLmZpbHRlcigoY2F0ZWdvcnkpID0+IHtcbiAgICAgIHJldHVybiBjYXRlZ29yeS5lbW9qaXMubGVuZ3RoID4gMFxuICAgIH0pXG5cbiAgICB0aGlzLl9jYXRlZ29yaWVzWzBdLmZpcnN0ID0gdHJ1ZVxuICAgIE9iamVjdC5mcmVlemUodGhpcy5fY2F0ZWdvcmllcylcblxuICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSB0aGlzLl9jYXRlZ29yaWVzWzBdXG4gICAgdGhpcy5zZWFyY2hFbW9qaXMgPSBudWxsXG5cbiAgICAvLyBQcmV2aWV3IGVtb2ppLCBzaG93biBvbiBtb3VzZSBvdmVyIG9yIHdoZW4gd2UgbW92ZVxuICAgIC8vIHdpdGggYXJyb3cga2V5cy5cbiAgICB0aGlzLnByZXZpZXdFbW9qaSA9IG51bGxcbiAgICAvLyBJbmRleGVzIGFyZSB1c2VkIHRvIGtlZXAgdGhlIHBvc2l0aW9uIHdoZW4gbW92aW5nXG4gICAgLy8gd2l0aCBhcnJvd3M6IGN1cnJlbnQgY2F0ZWdvcnkgYW5kIGN1cnJlbnQgZW1vamlcbiAgICAvLyBpbnNpZGUgdGhlIGNhdGVnb3J5LlxuICAgIHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggPSAwXG4gICAgdGhpcy5wcmV2aWV3RW1vamlJZHggPSAtMVxuICB9XG5cbiAgb25TY3JvbGwoKSB7XG4gICAgY29uc3Qgc2Nyb2xsRWxlbWVudCA9IHRoaXMuX3ZtLiRyZWZzLnNjcm9sbFxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHNjcm9sbEVsZW1lbnQuc2Nyb2xsVG9wXG5cbiAgICBsZXQgYWN0aXZlQ2F0ZWdvcnkgPSB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllc1swXVxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5maWx0ZXJlZENhdGVnb3JpZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2F0ZWdvcnkgPSB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllc1tpXVxuICAgICAgbGV0IGNvbXBvbmVudCA9IHRoaXMuX3ZtLmdldENhdGVnb3J5Q29tcG9uZW50KGkpXG4gICAgICAvLyBUaGUgYC01MGAgb2Zmc2V0IHN3aXRjaGVzIGFjdGl2ZSBjYXRlZ29yeSAoc2VsZWN0ZWQgaW4gdGhlXG4gICAgICAvLyBhbmNob3JzIGJhcikgYSBiaXQgZWFyaWxlciwgYmVmb3JlIGl0IGFjdHVhbGx5IHJlYWNoZXMgdGhlIHRvcC5cbiAgICAgIGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50LiRlbC5vZmZzZXRUb3AgLSA1MCA+IHNjcm9sbFRvcCkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgYWN0aXZlQ2F0ZWdvcnkgPSBjYXRlZ29yeVxuICAgIH1cbiAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gYWN0aXZlQ2F0ZWdvcnlcbiAgfVxuXG4gIGdldCBhbGxDYXRlZ29yaWVzKCkge1xuICAgIHJldHVybiB0aGlzLl9jYXRlZ29yaWVzXG4gIH1cblxuICBnZXQgZmlsdGVyZWRDYXRlZ29yaWVzKCkge1xuICAgIGlmICh0aGlzLnNlYXJjaEVtb2ppcykge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnc2VhcmNoJyxcbiAgICAgICAgICBuYW1lOiAnU2VhcmNoJyxcbiAgICAgICAgICBlbW9qaXM6IHRoaXMuc2VhcmNoRW1vamlzLFxuICAgICAgICB9LFxuICAgICAgXVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fY2F0ZWdvcmllcy5maWx0ZXIoKGNhdGVnb3J5KSA9PiB7XG4gICAgICBsZXQgaGFzRW1vamlzID0gY2F0ZWdvcnkuZW1vamlzLmxlbmd0aCA+IDBcbiAgICAgIHJldHVybiBoYXNFbW9qaXNcbiAgICB9KVxuICB9XG5cbiAgZ2V0IHByZXZpZXdFbW9qaUNhdGVnb3J5KCkge1xuICAgIGlmICh0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4ID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllc1t0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4XVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgb25BbmNob3JDbGljayhjYXRlZ29yeSkge1xuICAgIGlmICh0aGlzLnNlYXJjaEVtb2ppcykge1xuICAgICAgLy8gTm8gY2F0ZWdvcmllcyBhcmUgc2hvd24gd2hlbiBzZWFyY2ggaXMgYWN0aXZlLlxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGxldCBpID0gdGhpcy5maWx0ZXJlZENhdGVnb3JpZXMuaW5kZXhPZihjYXRlZ29yeSlcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5fdm0uZ2V0Q2F0ZWdvcnlDb21wb25lbnQoaSlcbiAgICBsZXQgc2Nyb2xsVG9Db21wb25lbnQgPSAoKSA9PiB7XG4gICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgIGxldCB0b3AgPSBjb21wb25lbnQuJGVsLm9mZnNldFRvcFxuICAgICAgICBpZiAoY2F0ZWdvcnkuZmlyc3QpIHtcbiAgICAgICAgICB0b3AgPSAwXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdm0uJHJlZnMuc2Nyb2xsLnNjcm9sbFRvcCA9IHRvcFxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5fdm0uaW5maW5pdGVTY3JvbGwpIHtcbiAgICAgIHNjcm9sbFRvQ29tcG9uZW50KClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmVDYXRlZ29yeSA9IHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzW2ldXG4gICAgfVxuICB9XG5cbiAgb25TZWFyY2godmFsdWUpIHtcbiAgICBsZXQgZW1vamlzID0gdGhpcy5fZGF0YS5zZWFyY2godmFsdWUsIHRoaXMubWF4U2VhcmNoUmVzdWx0cylcbiAgICB0aGlzLnNlYXJjaEVtb2ppcyA9IGVtb2ppc1xuXG4gICAgdGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCA9IDBcbiAgICB0aGlzLnByZXZpZXdFbW9qaUlkeCA9IDBcbiAgICB0aGlzLnVwZGF0ZVByZXZpZXdFbW9qaSgpXG4gIH1cblxuICBvbkVtb2ppRW50ZXIoZW1vamkpIHtcbiAgICB0aGlzLnByZXZpZXdFbW9qaSA9IGVtb2ppXG4gICAgdGhpcy5wcmV2aWV3RW1vamlJZHggPSAtMVxuICAgIHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggPSAtMVxuICB9XG5cbiAgb25FbW9qaUxlYXZlKGVtb2ppKSB7XG4gICAgdGhpcy5wcmV2aWV3RW1vamkgPSBudWxsXG4gIH1cblxuICBvbkFycm93TGVmdCgpIHtcbiAgICAvLyBNb3ZpbmcgbGVmdCwgZGVjcmVhc2UgZW1vamkgaW5kZXguXG4gICAgaWYgKHRoaXMucHJldmlld0Vtb2ppSWR4ID4gMCkge1xuICAgICAgdGhpcy5wcmV2aWV3RW1vamlJZHggLT0gMVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiBlbW9qaSBpbmRleCBpcyB6ZXJvLCBnbyB0byB0aGUgcHJldmlvdXMgY2F0ZWdvcnkuXG4gICAgICB0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4IC09IDFcbiAgICAgIGlmICh0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4IDwgMCkge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGZpcnN0IGNhdGVnb3J5LCBrZWVwIGl0LlxuICAgICAgICB0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4ID0gMFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVXBkYXRlIGVtb2ppIGluZGV4IC0gd2UgbW92ZWQgdG8gdGhlIHByZXZpb3VzIGNhdGVnb3J5LFxuICAgICAgICAvLyBnZXQgdGhlIGxhc3QgZW1vamkgaW4gaXQuXG4gICAgICAgIHRoaXMucHJldmlld0Vtb2ppSWR4ID1cbiAgICAgICAgICB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllc1t0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4XS5lbW9qaXMubGVuZ3RoIC1cbiAgICAgICAgICAxXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudXBkYXRlUHJldmlld0Vtb2ppKClcbiAgfVxuXG4gIG9uQXJyb3dSaWdodCgpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnByZXZpZXdFbW9qaUlkeCA8XG4gICAgICB0aGlzLmVtb2ppc0xlbmd0aCh0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4KSAtIDFcbiAgICApIHtcbiAgICAgIC8vIE1vdmluZyByaWdodCB3aXRoaW4gY2F0ZWdvcnksIGluY3JlYXNlIGVtb2ppIGluZGV4LlxuICAgICAgdGhpcy5wcmV2aWV3RW1vamlJZHggKz0gMVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBHbyB0byB0aGUgbmV4dCBjYXRlZ29yeS5cbiAgICAgIHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggKz0gMVxuICAgICAgaWYgKHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggPj0gdGhpcy5maWx0ZXJlZENhdGVnb3JpZXMubGVuZ3RoKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgdGhlIGxhc3QgY2F0ZWdvcnkgLSBrZWVwIGl0LlxuICAgICAgICB0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4ID0gdGhpcy5maWx0ZXJlZENhdGVnb3JpZXMubGVuZ3RoIC0gMVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgd2UgbW92ZWQgdG8gdGhlIG5leHQgY2F0ZWdvcnksIHVwZGF0ZSBlbW9qaSBpbmRleCB0byB0aGVcbiAgICAgICAgLy8gZmlyc3QgZW1vamkgaW4gdGhlIG5ldyBjYXRlZ29yeS5cbiAgICAgICAgdGhpcy5wcmV2aWV3RW1vamlJZHggPSAwXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudXBkYXRlUHJldmlld0Vtb2ppKClcbiAgfVxuXG4gIG9uQXJyb3dEb3duKCkge1xuICAgIC8vIElmIHdlIGFyZSBvdXQgb2YgdGhlIGVtb2ppIGNvbnRyb2wgKGluZGV4IGlzIC0xKSwgc2VsZWN0IHRoZSBmaXJzdFxuICAgIC8vIGVtb2ppIGluIHRoZSBmaXJzdCBjYXRlZ29yeSBieSBjYWxsaW5nIGBvbkFycm93UmlnaHRgLlxuICAgIGlmICh0aGlzLnByZXZpZXdFbW9qaUlkeCA9PSAtMSkge1xuICAgICAgcmV0dXJuIHRoaXMub25BcnJvd1JpZ2h0KClcbiAgICB9XG5cbiAgICBjb25zdCBjYXRlZ29yeUxlbmd0aCA9XG4gICAgICB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllc1t0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4XS5lbW9qaXMubGVuZ3RoXG5cbiAgICAvLyBXaGVuIG1vdmluZyBkb3duLCB3ZSBjYW4gbW92ZSBgX3BlckxpbmVgIGljb25zIHJpZ2h0IHRvXG4gICAgLy8ganVtcCB0byB0aGUgc2FtZSBwb3NpdGlvbiBpbiB0aGUgbmV4dCByb3cuXG4gICAgbGV0IGRpZmYgPSB0aGlzLl9wZXJMaW5lXG5cbiAgICAvLyBUT0RPOiBwcmV2aWV3Q2F0ZWdvcnkgc2hvdWxkIG1hdGNoIGFjdGl2ZUNhdGVnb3J5XG4gICAgLy8gKHNvIGl0IHdvdWxkIGJlIGJvdGggaGlnaGxpZ2h0ZWQgaW4gVUkgYW5kIHVzZWRcbiAgICAvLyB3aGVuIHdlIHN0YXJ0IG1vdmluZyB3aXRoIGFycm93cyBhZnRlciBjbGlja2luZ1xuICAgIC8vIHRoZSBjYXRlZ29yeSkuXG5cbiAgICAvLyBOb3RlOiBwcm9iYWJseSB3ZSBjYW4gYWx3YXN5IHRha2UgY3VycmVudCByb3cgbGVuZ3RoXG4gICAgLy8gYXMgYSBgZGlmZmAgLSBpdCB3aWxsIGZpdCBib3RoIGNhc2Ugb2YgYW55IHJvdyBhbmRcbiAgICAvLyBzcGVjaWFsIGNhc2Ugb2YgdGhlIGxhc3Qgcm93LlxuICAgIC8vIE5vdGU6IGl0IGNhbiBiZSBhbHNvIGVhc2llciB0byB1cGRhdGUgaW5kZXhlc1xuICAgIC8vIGRpcmVjdGx5IGhlcmUgaW5zdGVhZCBvZiBjYWxsaW5nIG9uQXJyb3dSaWdodC5cbiAgICAvLyBTYW1lIGlzIHRydWUgZm9yIGBvbkFycm93VXBgLlxuXG4gICAgLy8gVW5sZXNzIGlmIHdlIGFyZSBvbiB0aGUgbGFzdCByb3cgb2YgdGhlIGNhdGVnb3J5IGFuZFxuICAgIC8vIHRoZXJlIGFyZSBsZXNzIHRoZW4gYF9wZXJMaW5lYCBlbW9qaXMgaW4gaXQuXG4gICAgLy8gSW4gdGhpcyBjYXNlIHdlIHVzZSB0aGUgbGFzdCByb3cgbGVuZ3RoIGFzIGRpZmZcbiAgICAvLyBzbyB3ZSBnbyBzdHJhaWdodCBkb3duLCBmb3IgZXhhbXBsZTpcbiAgICAvL1xuICAgIC8vICAgMSAyIDMgNCA1IDZcbiAgICAvLyAgIDcgOCA5XG4gICAgLy8gICBBIEIgQyBEIEUgRlxuICAgIC8vXG4gICAgLy8gSWYgd2UgZ28gZG93biBmcm9tIGA4YCwgd2UgbmVlZCB0byBtb3ZlIDMgZW1vamlzIHJpZ2h0XG4gICAgLy8gdG8gbGVuZCBhdCBgQmAgKGFuZCAzIGlzIHRoZSBsZW5ndGggb2YgdGhlIGxhc3Qgcm93IG9mXG4gICAgLy8gdGhpcyBjYXRlZ29yeSkuXG4gICAgLy8gQW5kIGlmIHdlIHVzZWQgNiBpbnN0ZWFkIChyb3cgbGVuZ3RoLCBgX3BlckxpbmVgKSwgd2Ugd291bGRcbiAgICAvLyBsZW5kIHVwIGF0IGBFYC5cbiAgICBpZiAodGhpcy5wcmV2aWV3RW1vamlJZHggKyBkaWZmID4gY2F0ZWdvcnlMZW5ndGgpIHtcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbGFzdCByb3cgbGVuZ3RoLlxuICAgICAgZGlmZiA9IGNhdGVnb3J5TGVuZ3RoICUgdGhpcy5fcGVyTGluZVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpZmY7IGkrKykge1xuICAgICAgdGhpcy5vbkFycm93UmlnaHQoKVxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVByZXZpZXdFbW9qaSgpXG4gIH1cblxuICBvbkFycm93VXAoKSB7XG4gICAgLy8gU2ltaWxhciB0byBgb25BcnJvd0Rvd25gLCB0byBtb3ZlIHVwIHdlIGNhbiBtb3ZlIGxlZnRcbiAgICAvLyBieSBgX3BlckxpbmVgIG51bWJlciBvZiBlbW9qaXMuXG4gICAgbGV0IGRpZmYgPSB0aGlzLl9wZXJMaW5lXG5cbiAgICBpZiAodGhpcy5wcmV2aWV3RW1vamlJZHggLSBkaWZmIDwgMCkge1xuICAgICAgaWYgKHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggPiAwKSB7XG4gICAgICAgIC8vIFVubGVzcyBpZiB3ZSBhcmUgb24gdGhlIGZpcnN0IGxpbmUgb2YgdGhlIGNhdGVnb3J5IGFuZFxuICAgICAgICAvLyB0aGUgbGFzdCBsaW5lIGluIHRoZSBwcmV2aW91cyBjYXRlZ29yeSBpcyBzaG9ydGVyIHRoYW5cbiAgICAgICAgLy8gYF9wZXJMaW5lYC5cbiAgICAgICAgLy8gSW4gdGhpcyBjYXNlIHdlIHVzZSB0aGUgbGFzdCByb3cgbGVuZ3RoIGFzIGRpZmYsIHNvXG4gICAgICAgIC8vIHdlIGdvIHN0cmFpZ2h0IHVwLCBmb3IgZXhhbXBsZTpcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAxIDIgMyA0IDVcbiAgICAgICAgLy8gICA2IDcgOFxuICAgICAgICAvLyAgIDkgQSBCIEMgRFxuICAgICAgICAvL1xuICAgICAgICAvLyBJZiB3ZSBnbyB1cCBmcm9tIGBBYCwgd2UgbmVlZCB0byBtb3ZlIDMgZW1vamlzIGxlZnQgdG8gZ2V0XG4gICAgICAgIC8vIHRvIGA3YCAoYW5kIDMgaXMgdGhlIGxlbmd0aCBvZiB0aGUgbGFzdCByb3cgb2YgdGhlIHByZXZpb3VzXG4gICAgICAgIC8vIGNhdGVnb3J5KS5cbiAgICAgICAgY29uc3QgcHJldkNhdGVnb3J5TGFzdFJvd0xlbmd0aCA9XG4gICAgICAgICAgdGhpcy5maWx0ZXJlZENhdGVnb3JpZXNbdGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCAtIDFdLmVtb2ppc1xuICAgICAgICAgICAgLmxlbmd0aCAlIHRoaXMuX3BlckxpbmVcbiAgICAgICAgLy8gZGlmZiA9IHRoaXMucHJldmlld0Vtb2ppSWR4ICsgcHJldkNhdGVnb3J5TGFzdFJvd0xlbmd0aFxuICAgICAgICBkaWZmID0gcHJldkNhdGVnb3J5TGFzdFJvd0xlbmd0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlmZiA9IDBcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWZmOyBpKyspIHtcbiAgICAgIHRoaXMub25BcnJvd0xlZnQoKVxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVByZXZpZXdFbW9qaSgpXG4gIH1cblxuICB1cGRhdGVQcmV2aWV3RW1vamkoKSB7XG4gICAgdGhpcy5wcmV2aWV3RW1vamkgPVxuICAgICAgdGhpcy5maWx0ZXJlZENhdGVnb3JpZXNbdGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeF0uZW1vamlzW1xuICAgICAgICB0aGlzLnByZXZpZXdFbW9qaUlkeFxuICAgICAgXVxuXG4gICAgdGhpcy5fdm0uJG5leHRUaWNrKCgpID0+IHtcbiAgICAgIC8vIFNjcm9sbCB0aGUgdmlldyBpZiB0aGUgYHByZXZpZXdFbW9qaWAgZ29lcyBvdXQgb2YgdGhlIHZpc2libGUgYXJlYS5cbiAgICAgIGNvbnN0IHNjcm9sbEVsID0gdGhpcy5fdm0uJHJlZnMuc2Nyb2xsXG5cbiAgICAgIC8vIE5vdGU6IGl0IHdvdWxkIGJlIG1vcmUgVnVlLWlzaCB0byBtYXJrIGFsbCBlbW9qaXMgd2l0aCBgcmVmYHNcbiAgICAgIC8vIGFuZCB0aGVuIGRvIHNvbWV0aGluZyBzaW1pbGFyIGhlcmUgdG8gd2hhdCB3ZSBkbyBpbiB0aGVcbiAgICAgIC8vIGBnZXRDYXRlZ29yaWVzYCBpbnN0ZWFkIG9mIHVzaW5nIGBxdWVyeVNlbGVjdG9yYCBkaXJlY3RseSxcbiAgICAgIC8vIGJ1dCBJIGFtIG5vdCBzdXJlIGlmIGhhdmluZyBtYW55IHJlZnMgd291bGQgYWZmZWN0IHRoZSBwZXJmb3JtYW5jZVxuICAgICAgLy8gKGl0IG1pZ2h0LCBzbyBJIHVzZSBgcXVlcnlTZWxlY3RvcmAgZm9yIG5vdykuXG4gICAgICBjb25zdCBlbW9qaUVsID0gc2Nyb2xsRWwucXVlcnlTZWxlY3RvcignLmVtb2ppLW1hcnQtZW1vamktc2VsZWN0ZWQnKVxuXG4gICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSBzY3JvbGxFbC5vZmZzZXRUb3AgLSBzY3JvbGxFbC5vZmZzZXRIZWlnaHRcbiAgICAgIGlmIChcbiAgICAgICAgZW1vamlFbCAmJlxuICAgICAgICBlbW9qaUVsLm9mZnNldFRvcCArIGVtb2ppRWwub2Zmc2V0SGVpZ2h0ID5cbiAgICAgICAgICBzY3JvbGxIZWlnaHQgKyBzY3JvbGxFbC5zY3JvbGxUb3BcbiAgICAgICkge1xuICAgICAgICBzY3JvbGxFbC5zY3JvbGxUb3AgKz0gZW1vamlFbC5vZmZzZXRIZWlnaHRcbiAgICAgIH1cbiAgICAgIGlmIChlbW9qaUVsICYmIGVtb2ppRWwub2Zmc2V0VG9wIDwgc2Nyb2xsRWwuc2Nyb2xsVG9wKSB7XG4gICAgICAgIHNjcm9sbEVsLnNjcm9sbFRvcCAtPSBlbW9qaUVsLm9mZnNldEhlaWdodFxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBlbW9qaXNMZW5ndGgoY2F0ZWdvcnlJZHgpIHtcbiAgICBpZiAoY2F0ZWdvcnlJZHggPT0gLTEpIHtcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllc1tjYXRlZ29yeUlkeF0uZW1vamlzLmxlbmd0aFxuICB9XG59XG4iLCJjb25zdCBFbW9qaVByb3BzID0ge1xuICBuYXRpdmU6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICB9LFxuICB0b29sdGlwOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAgZmFsbGJhY2s6IHtcbiAgICB0eXBlOiBGdW5jdGlvbixcbiAgfSxcbiAgc2tpbjoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAxLFxuICB9LFxuICBzZXQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ2FwcGxlJyxcbiAgfSxcbiAgZW1vamk6IHtcbiAgICB0eXBlOiBbU3RyaW5nLCBPYmplY3RdLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9LFxuICBzaXplOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IG51bGwsXG4gIH0sXG4gIHRhZzoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnc3BhbicsXG4gIH0sXG59XG5cbmNvbnN0IFBpY2tlclByb3BzID0ge1xuICBwZXJMaW5lOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDksXG4gIH0sXG4gIG1heFNlYXJjaFJlc3VsdHM6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogNzUsXG4gIH0sXG4gIGVtb2ppU2l6ZToge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAyNCxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ0Vtb2ppIE1hcnTihKInLFxuICB9LFxuICBlbW9qaToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnZGVwYXJ0bWVudF9zdG9yZScsXG4gIH0sXG4gIGNvbG9yOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICcjYWU2NWM1JyxcbiAgfSxcbiAgc2V0OiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdhcHBsZScsXG4gIH0sXG4gIHNraW46IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogbnVsbCxcbiAgfSxcbiAgZGVmYXVsdFNraW46IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMSxcbiAgfSxcbiAgbmF0aXZlOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAgZW1vamlUb29sdGlwOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAgYXV0b0ZvY3VzOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAgaTE4bjoge1xuICAgIHR5cGU6IE9iamVjdCxcbiAgICBkZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfSxcbiAgfSxcbiAgc2hvd1ByZXZpZXc6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IHRydWUsXG4gIH0sXG4gIHNob3dTZWFyY2g6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IHRydWUsXG4gIH0sXG4gIHNob3dDYXRlZ29yaWVzOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiB0cnVlLFxuICB9LFxuICBzaG93U2tpblRvbmVzOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiB0cnVlLFxuICB9LFxuICBpbmZpbml0ZVNjcm9sbDoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogdHJ1ZSxcbiAgfSxcbiAgcGlja2VyU3R5bGVzOiB7XG4gICAgdHlwZTogT2JqZWN0LFxuICAgIGRlZmF1bHQoKSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9LFxuICB9LFxufVxuXG5leHBvcnQgeyBFbW9qaVByb3BzLCBQaWNrZXJQcm9wcyB9XG4iLCJ2YXIgTkFNRVNQQUNFID0gJ2Vtb2ppLW1hcnQnXG5cbmNvbnN0IF9KU09OID0gSlNPTlxuXG52YXIgaXNMb2NhbFN0b3JhZ2VTdXBwb3J0ZWQgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnbG9jYWxTdG9yYWdlJyBpbiB3aW5kb3dcblxubGV0IGdldHRlclxubGV0IHNldHRlclxuXG5mdW5jdGlvbiBzZXRIYW5kbGVycyhoYW5kbGVycykge1xuICBoYW5kbGVycyB8fCAoaGFuZGxlcnMgPSB7fSlcblxuICBnZXR0ZXIgPSBoYW5kbGVycy5nZXR0ZXJcbiAgc2V0dGVyID0gaGFuZGxlcnMuc2V0dGVyXG59XG5cbmZ1bmN0aW9uIHNldE5hbWVzcGFjZShuYW1lc3BhY2UpIHtcbiAgTkFNRVNQQUNFID0gbmFtZXNwYWNlXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZShzdGF0ZSkge1xuICBmb3IgKGxldCBrZXkgaW4gc3RhdGUpIHtcbiAgICBsZXQgdmFsdWUgPSBzdGF0ZVtrZXldXG4gICAgc2V0KGtleSwgdmFsdWUpXG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgaWYgKHNldHRlcikge1xuICAgIHNldHRlcihrZXksIHZhbHVlKVxuICB9IGVsc2Uge1xuICAgIGlmICghaXNMb2NhbFN0b3JhZ2VTdXBwb3J0ZWQpIHJldHVyblxuICAgIHRyeSB7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlW2Ake05BTUVTUEFDRX0uJHtrZXl9YF0gPSBfSlNPTi5zdHJpbmdpZnkodmFsdWUpXG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXQoa2V5KSB7XG4gIGlmIChnZXR0ZXIpIHtcbiAgICByZXR1cm4gZ2V0dGVyKGtleSlcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWlzTG9jYWxTdG9yYWdlU3VwcG9ydGVkKSByZXR1cm5cbiAgICB0cnkge1xuICAgICAgdmFyIHZhbHVlID0gd2luZG93LmxvY2FsU3RvcmFnZVtgJHtOQU1FU1BBQ0V9LiR7a2V5fWBdXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWx1ZSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgeyB1cGRhdGUsIHNldCwgZ2V0LCBzZXROYW1lc3BhY2UsIHNldEhhbmRsZXJzIH1cbiIsIi8vIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4vLyBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG5cbi8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcblxuLy8gTUlUIGxpY2Vuc2VcblxudmFyIGlzV2luZG93QXZhaWxhYmxlID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcblxuaXNXaW5kb3dBdmFpbGFibGUgJiZcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGFzdFRpbWUgPSAwXG4gICAgdmFyIHZlbmRvcnMgPSBbJ21zJywgJ21veicsICd3ZWJraXQnLCAnbyddXG5cbiAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3gpIHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPVxuICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXVxuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID1cbiAgICAgICAgd2luZG93W3ZlbmRvcnNbeF0gKyAnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXSB8fFxuICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArICdDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXVxuICAgIH1cblxuICAgIGlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSlcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSlcbiAgICAgICAgdmFyIGlkID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbClcbiAgICAgICAgfSwgdGltZVRvQ2FsbClcblxuICAgICAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbFxuICAgICAgICByZXR1cm4gaWRcbiAgICAgIH1cblxuICAgIGlmICghd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKVxuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChpZClcbiAgICAgIH1cbiAgfSkoKVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9FbW9qaS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTM0YWQ5NDZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9FbW9qaS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vRW1vamkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy95YW5nZ3Vhbmd6aGFvL0RvY3VtZW50cy9wcm9qZWN0cy9lbW9qaS1tYXJ0LXZ1ZS1mYXN0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzUzNGFkOTQ2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzUzNGFkOTQ2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzUzNGFkOTQ2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9FbW9qaS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTM0YWQ5NDZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1MzRhZDk0NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvRW1vamkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQxNmU5MDg0XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUGlja2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy95YW5nZ3Vhbmd6aGFvL0RvY3VtZW50cy9wcm9qZWN0cy9lbW9qaS1tYXJ0LXZ1ZS1mYXN0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2QxNmU5MDg0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2QxNmU5MDg0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2QxNmU5MDg0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQxNmU5MDg0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZDE2ZTkwODQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL1BpY2tlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxMTg4MTA0XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYW5jaG9ycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vYW5jaG9ycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3lhbmdndWFuZ3poYW8vRG9jdW1lbnRzL3Byb2plY3RzL2Vtb2ppLW1hcnQtdnVlLWZhc3Qvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTExODgxMDQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTExODgxMDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTExODgxMDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxMTg4MTA0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTExODgxMDQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL2FuY2hvcnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mzc2Y2RhMGVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy95YW5nZ3Vhbmd6aGFvL0RvY3VtZW50cy9wcm9qZWN0cy9lbW9qaS1tYXJ0LXZ1ZS1mYXN0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzM3NmNkYTBlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzM3NmNkYTBlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzM3NmNkYTBlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mzc2Y2RhMGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczNzZjZGEwZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvY2F0ZWdvcnkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNTA1NmMzMFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy95YW5nZ3Vhbmd6aGFvL0RvY3VtZW50cy9wcm9qZWN0cy9lbW9qaS1tYXJ0LXZ1ZS1mYXN0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzM1MDU2YzMwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzM1MDU2YzMwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzM1MDU2YzMwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNTA1NmMzMFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzM1MDU2YzMwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9wcmV2aWV3LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vc2VhcmNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YWQ0MWJiOFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMveWFuZ2d1YW5nemhhby9Eb2N1bWVudHMvcHJvamVjdHMvZW1vamktbWFydC12dWUtZmFzdC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0YWQ0MWJiOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0YWQ0MWJiOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0YWQ0MWJiOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc2VhcmNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YWQ0MWJiOFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzRhZDQxYmI4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9zZWFyY2gudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9za2lucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWM2MTQ4OTRcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9za2lucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy95YW5nZ3Vhbmd6aGFvL0RvY3VtZW50cy9wcm9qZWN0cy9lbW9qaS1tYXJ0LXZ1ZS1mYXN0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzFjNjE0ODk0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzFjNjE0ODk0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzFjNjE0ODk0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9za2lucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWM2MTQ4OTRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxYzYxNDg5NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvc2tpbnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Vtb2ppLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRW1vamkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGlja2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGlja2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2UhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcHJldmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NraW5zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Vtb2ppLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MzRhZDk0NlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2UhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQxNmU5MDg0XCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxMTg4MTA0XCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNzZjZGEwZVwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2UhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNTA1NmMzMFwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2UhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhZDQxYmI4XCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NraW5zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYzYxNDg5NFwiIiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqLyxcbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID1cbiAgICB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJyA/IHNjcmlwdEV4cG9ydHMub3B0aW9ucyA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikge1xuICAgIC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgKG9wdGlvbnMuZnVuY3Rpb25hbCA/IHRoaXMucGFyZW50IDogdGhpcykuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmcgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcbiAgcmV0dXJuIGFycjI7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiaW1wb3J0IHRvUHJvcGVydHlLZXkgZnJvbSBcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImltcG9ydCB0b1Byb3BlcnR5S2V5IGZyb20gXCIuL3RvUHJvcGVydHlLZXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAga2V5ID0gdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvUHJpbWl0aXZlKHQsIHIpIHtcbiAgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7XG4gIHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAodm9pZCAwICE9PSBlKSB7XG4gICAgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5pbXBvcnQgdG9QcmltaXRpdmUgZnJvbSBcIi4vdG9QcmltaXRpdmUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvUHJvcGVydHlLZXkodCkge1xuICB2YXIgaSA9IHRvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IGkgKyBcIlwiO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIF90eXBlb2Yobyk7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHN0b3JlIGZyb20gJy4vdXRpbHMvc3RvcmUnXG5pbXBvcnQgeyB1bmNvbXByZXNzIH0gZnJvbSAnLi91dGlscy9kYXRhJ1xuaW1wb3J0IGZyZXF1ZW50bHkgZnJvbSAnLi91dGlscy9mcmVxdWVudGx5J1xuXG5leHBvcnQge1xuICBQaWNrZXIsXG4gIEVtb2ppLFxuICBBbmNob3JzLFxuICBQcmV2aWV3LFxuICBTZWFyY2gsXG4gIENhdGVnb3J5LFxuICBTa2lucyxcbn0gZnJvbSAnLi9jb21wb25lbnRzJ1xuXG5leHBvcnQgeyBFbW9qaUluZGV4LCBFbW9qaVZpZXcsIEVtb2ppRGF0YSwgc2FuaXRpemUgfSBmcm9tICcuL3V0aWxzL2Vtb2ppLWRhdGEnXG5leHBvcnQgeyB1bmNvbXByZXNzLCBzdG9yZSwgZnJlcXVlbnRseSB9XG4iXSwibmFtZXMiOlsiRW1vamlQcm9wcyIsIkVtb2ppVmlldyIsInByb3BzIiwiX29iamVjdFNwcmVhZCIsImRhdGEiLCJ0eXBlIiwiT2JqZWN0IiwicmVxdWlyZWQiLCJlbWl0cyIsImNvbXB1dGVkIiwidmlldyIsImVtb2ppT2JqZWN0Iiwic2tpbiIsInNldCIsIm5hdGl2ZSIsImZhbGxiYWNrIiwidG9vbHRpcCIsInNpemUiLCJzYW5pdGl6ZWREYXRhIiwiX3Nhbml0aXplZCIsInRpdGxlIiwic2hvcnRfbmFtZSIsImVtb2ppIiwiZmluZEVtb2ppIiwiY3JlYXRlZCIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiJGVtaXQiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJzdG9yZSIsImZyZXF1ZW50bHkiLCJkZWVwTWVyZ2UiLCJtZWFzdXJlU2Nyb2xsYmFyIiwiUGlja2VyUHJvcHMiLCJQaWNrZXJWaWV3IiwiQW5jaG9ycyIsIkNhdGVnb3J5IiwiUHJldmlldyIsIlNlYXJjaCIsIkkxOE4iLCJzZWFyY2giLCJub3Rmb3VuZCIsImNhdGVnb3JpZXMiLCJyZWNlbnQiLCJzbWlsZXlzIiwicGVvcGxlIiwibmF0dXJlIiwiZm9vZHMiLCJhY3Rpdml0eSIsInBsYWNlcyIsIm9iamVjdHMiLCJzeW1ib2xzIiwiZmxhZ3MiLCJjdXN0b20iLCJhY3RpdmVTa2luIiwiZ2V0IiwiZGVmYXVsdFNraW4iLCJjdXN0b21TdHlsZXMiLCJ3aWR0aCIsImNhbGN1bGF0ZVdpZHRoIiwicGlja2VyU3R5bGVzIiwiZW1vamlQcm9wcyIsImVtb2ppVG9vbHRpcCIsImVtb2ppU2l6ZSIsInNlbGVjdGVkRW1vamkiLCJwcmV2aWV3RW1vamkiLCJzZWxlY3RlZEVtb2ppQ2F0ZWdvcnkiLCJwcmV2aWV3RW1vamlDYXRlZ29yeSIsIm9uRW50ZXIiLCJvbkVtb2ppRW50ZXIiLCJiaW5kIiwib25MZWF2ZSIsIm9uRW1vamlMZWF2ZSIsIm9uRW1vamlDbGljayIsInNraW5Qcm9wcyIsInBlckxpbmUiLCJmaWx0ZXJlZENhdGVnb3JpZXMiLCJtZXJnZWRJMThuIiwiZnJlZXplIiwiaTE4biIsImlkbGVFbW9qaSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJmaXJzdEVtb2ppIiwiaXNTZWFyY2hpbmciLCJzZWFyY2hFbW9qaXMiLCJ3YXRjaCIsIm9uU2tpbkNoYW5nZSIsIm9uU2Nyb2xsIiwiaW5maW5pdGVTY3JvbGwiLCJ3YWl0aW5nRm9yUGFpbnQiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvblNjcm9sbFBhaW50Iiwib25BbmNob3JDbGljayIsImNhdGVnb3J5Iiwib25TZWFyY2giLCJ2YWx1ZSIsIm9uQXJyb3dMZWZ0IiwiJGV2ZW50Iiwib2xkSWR4IiwicHJldmlld0Vtb2ppSWR4IiwicHJldmVudERlZmF1bHQiLCJvbkFycm93UmlnaHQiLCJvbkFycm93RG93biIsIm9uQXJyb3dVcCIsImFkZCIsInVwZGF0ZVJlY2VudENhdGVnb3J5Iiwib25UZXh0U2VsZWN0Iiwic3RvcFByb3BhZ2F0aW9uIiwidXBkYXRlIiwiZ2V0Q2F0ZWdvcnlDb21wb25lbnQiLCJpbmRleCIsImNvbXBvbmVudCIsIiRyZWZzIiwiY29tcG9uZW50cyIsInN2Z3MiLCJjb2xvciIsIlN0cmluZyIsIkFycmF5IiwiYWN0aXZlQ2F0ZWdvcnkiLCJkZWZhdWx0IiwiX2RlZmF1bHQiLCJFbW9qaSIsImlkIiwibmFtZSIsImVtb2ppcyIsImFjdGl2ZUNsYXNzIiwiaXNWaXNpYmxlIiwiaXNTZWFyY2giLCJoYXNSZXN1bHRzIiwibGVuZ3RoIiwiZW1vamlPYmplY3RzIiwiX3RoaXMiLCJtYXAiLCJlbW9qaVZpZXciLCJTa2lucyIsInNob3dTa2luVG9uZXMiLCJCb29sZWFuIiwiRnVuY3Rpb24iLCJlbW9qaURhdGEiLCJlbW9qaVNob3J0TmFtZXMiLCJzaG9ydF9uYW1lcyIsImVtb2ppRW1vdGljb25zIiwiZW1vdGljb25zIiwiYXV0b0ZvY3VzIiwiZW1vamlJbmRleCIsImNsZWFyIiwibW91bnRlZCIsIiRpbnB1dCIsIiRlbCIsInF1ZXJ5U2VsZWN0b3IiLCJmb2N1cyIsIk51bWJlciIsIm9wZW5lZCIsInNraW5Ub25lIiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsImNhblJlbmRlciIsInRhZyIsInN0YXRpY0NsYXNzIiwiYXR0cnMiLCJhcmlhTGFiZWwiLCJvbiIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwiY2xpY2siLCJjbGFzcyIsImNzc0NsYXNzIiwic3R5bGUiLCJjc3NTdHlsZSIsIl92IiwiX3MiLCJjb250ZW50IiwiX2UiLCJzdGF0aWNSZW5kZXJGbnMiLCJfd2l0aFN0cmlwcGVkIiwic2hvd0NhdGVnb3JpZXMiLCJhbGxDYXRlZ29yaWVzIiwiX3QiLCJzaG93U2VhcmNoIiwicmVmIiwiYXJyb3dMZWZ0IiwiYXJyb3dSaWdodCIsImFycm93RG93biIsImFycm93VXAiLCJlbnRlciIsInNlbGVjdCIsInJvbGUiLCJzY3JvbGwiLCJfbCIsImlkeCIsImRpcmVjdGl2ZXMiLCJyYXdOYW1lIiwiZXhwcmVzc2lvbiIsImtleSIsInJlZkluRm9yIiwic2hvd1ByZXZpZXciLCJkb21Qcm9wcyIsImlubmVySFRNTCIsImJhY2tncm91bmRDb2xvciIsIl9yZWYiLCJnZXRFbW9qaSIsInNob3J0TmFtZSIsImVtb3RpY29uIiwiY2hhbmdlIiwicGxhY2Vob2xkZXIiLCJrZXlkb3duIiwiaW5kZXhPZiIsIl9rIiwia2V5Q29kZSIsImJ1dHRvbiIsImFwcGx5IiwiYXJndW1lbnRzIiwiaW5wdXQiLCJ0YXJnZXQiLCJjb21wb3NpbmciLCJQaWNrZXIiLCJfU3RyaW5nIiwiZnJvbUNvZGVQb2ludCIsInN0cmluZ0Zyb21Db2RlUG9pbnQiLCJNQVhfU0laRSIsImNvZGVVbml0cyIsImhpZ2hTdXJyb2dhdGUiLCJsb3dTdXJyb2dhdGUiLCJyZXN1bHQiLCJjb2RlUG9pbnQiLCJpc0Zpbml0ZSIsIk1hdGgiLCJmbG9vciIsIlJhbmdlRXJyb3IiLCJwdXNoIiwiZnJvbUNoYXJDb2RlIiwiU1ZHcyIsIm1hcHBpbmciLCJ1bmlmaWVkIiwibm9uX3F1YWxpZmllZCIsImhhc19pbWdfYXBwbGUiLCJoYXNfaW1nX2dvb2dsZSIsImhhc19pbWdfdHdpdHRlciIsImhhc19pbWdfZmFjZWJvb2siLCJrZXl3b3JkcyIsInNoZWV0IiwidGV4dCIsImFkZGVkX2luIiwiYnVpbGRTZWFyY2giLCJhZGRUb1NlYXJjaCIsInN0cmluZ3MiLCJzcGxpdCIsImlzQXJyYXkiLCJmb3JFYWNoIiwic3RyaW5nIiwicyIsInRvTG93ZXJDYXNlIiwiam9pbiIsImRlZXBGcmVlemUiLCJvYmplY3QiLCJwcm9wTmFtZXMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsIm4iLCJkb25lIiwiX3R5cGVvZiIsImVyciIsImYiLCJ1bmNvbXByZXNzIiwiY29tcHJlc3NlZCIsInVuc2hpZnQiLCJzaGVldF94Iiwic2hlZXRfeSIsInRvRml4ZWQiLCJpbnRlcnNlY3QiLCJ1bmlmaWVkVG9OYXRpdmUiLCJTSEVFVF9DT0xVTU5TIiwiQ09MT05TX1JFR0VYIiwiU0tJTlMiLCJFbW9qaUluZGV4IiwidW5kZWZpbmVkIiwiZW1vamlzVG9TaG93RmlsdGVyIiwiaW5jbHVkZSIsImV4Y2x1ZGUiLCJfcmVmJHJlY2VudExlbmd0aCIsInJlY2VudExlbmd0aCIsIl9jbGFzc0NhbGxDaGVjayIsIl9kYXRhIiwiX2Vtb2ppc0ZpbHRlciIsIl9pbmNsdWRlIiwiX2V4Y2x1ZGUiLCJfY3VzdG9tIiwiX2Vtb2ppcyIsIl9uYXRpdmVFbW9qaXMiLCJfZW1vdGljb25zIiwiX2NhdGVnb3JpZXMiLCJfcmVjZW50Q2F0ZWdvcnkiLCJfY3VzdG9tQ2F0ZWdvcnkiLCJfc2VhcmNoSW5kZXgiLCJidWlsZEluZGV4IiwiX2NyZWF0ZUNsYXNzIiwiZmlsdGVyIiwiaXRlbSIsImluY2x1ZGVzIiwic29ydCIsImEiLCJiIiwiaW5kZXhBIiwiaW5kZXhCIiwiY2F0ZWdvcnlEYXRhIiwiaXNDYXRlZ29yeU5lZWRlZCIsImVtb2ppSWQiLCJhZGRFbW9qaSIsImN1c3RvbUVtb2ppIiwiYWRkQ3VzdG9tRW1vamkiLCJtYXRjaGVzIiwibWF0Y2giLCJwYXJzZUludCIsImFsaWFzZXMiLCJoYXNPd25Qcm9wZXJ0eSIsImdldFNraW4iLCJFcnJvciIsImtleXMiLCJoYXNFbW9qaSIsIm5hdGl2ZUVtb2ppIiwidW5pY29kZUVtb2ppIiwibWF4UmVzdWx0cyIsIl90aGlzMiIsInZhbHVlcyIsImFsbFJlc3VsdHMiLCJjdXJyZW50SW5kZXgiLCJfbG9vcCIsImNoYXIiLCJjaGFySW5kZXgiLCJyZXN1bHRzIiwic2NvcmVzIiwic3ViIiwic3Vic3RyIiwic3ViSW5kZXgiLCJzY29yZSIsImFTY29yZSIsImJTY29yZSIsInNsaWNlIiwiYXNzaWduIiwiRW1vamlEYXRhIiwiX3RoaXMzIiwiaXNFbW9qaU5lZWRlZCIsIl9za2lucyIsImNhdGVnb3J5X2lkIiwiaXNJbmNsdWRlZCIsImlzRXhjbHVkZWQiLCJfdGhpczQiLCJyZWNlbnRFbW9qaXMiLCJuZXdSZWNlbnRFbW9qaXMiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwiaXNFeGlzdFJlY2VudENhdGVnb3J5Iiwic29tZSIsInNraW5fdmFyaWF0aW9ucyIsInNraW5JZHgiLCJza2luS2V5IiwidmFyaWF0aW9uRGF0YSIsInNraW5EYXRhIiwiayIsInNhbml0aXplIiwiZ2V0UG9zaXRpb24iLCJhZGp1c3RlZENvbHVtbnMiLCJ4IiwieSIsImNvbmNhdCIsIl9lbW9qaSIsIl9uYXRpdmUiLCJfc2tpbiIsIl9zZXQiLCJfZmFsbGJhY2siLCJfY2FuUmVuZGVyIiwiX2Nzc0NsYXNzIiwiX2Nzc1N0eWxlIiwiX2NvbnRlbnQiLCJfaXNDdXN0b20iLCJfaXNOYXRpdmUiLCJfaGFzRW1vamkiLCJfZW1vamlUeXBlIiwiYmFja2dyb3VuZEltYWdlIiwiaW1hZ2VVcmwiLCJiYWNrZ3JvdW5kU2l6ZSIsImhlaWdodCIsImJhY2tncm91bmRQb3NpdGlvbiIsImZvbnRTaXplIiwicm91bmQiLCJoYXNJbWFnZSIsInNraW5fdG9uZSIsImNvbG9ucyIsIkRFRkFVTFRTIiwiaW5pdGlhbGl6ZWQiLCJkZWZhdWx0cyIsImluaXQiLCJtYXhOdW1iZXIiLCJmb3JjZVVwZGF0ZSIsImRlZmF1bHRMZW5ndGgiLCJtaW4iLCJpIiwicXVhbnRpdHkiLCJmcmVxdWVudGx5S2V5cyIsInNvcnRlZCIsInJldmVyc2UiLCJzbGljZWQiLCJsYXN0IiwicG9wIiwidW5pY29kZXMiLCJjb2RlUG9pbnRzIiwidSIsInVuaXEiLCJhcnIiLCJyZWR1Y2UiLCJhY2MiLCJ1bmlxQSIsInVuaXFCIiwibyIsIm9yaWdpbmFsVmFsdWUiLCJwcm90b3R5cGUiLCJjYWxsIiwiZG9jdW1lbnQiLCJkaXYiLCJjcmVhdGVFbGVtZW50Iiwib3ZlcmZsb3ciLCJwb3NpdGlvbiIsInRvcCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNjcm9sbGJhcldpZHRoIiwib2Zmc2V0V2lkdGgiLCJjbGllbnRXaWR0aCIsInJlbW92ZUNoaWxkIiwicGlja2VyQ29tcG9uZW50IiwiX3RoaXMkX2NhdGVnb3JpZXMiLCJfcGVyTGluZSIsIl90b0NvbnN1bWFibGVBcnJheSIsImZpcnN0IiwicHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHgiLCJzY3JvbGxFbGVtZW50Iiwic2Nyb2xsVG9wIiwibCIsIm9mZnNldFRvcCIsImhhc0Vtb2ppcyIsInNjcm9sbFRvQ29tcG9uZW50IiwibWF4U2VhcmNoUmVzdWx0cyIsInVwZGF0ZVByZXZpZXdFbW9qaSIsImVtb2ppc0xlbmd0aCIsImNhdGVnb3J5TGVuZ3RoIiwiZGlmZiIsInByZXZDYXRlZ29yeUxhc3RSb3dMZW5ndGgiLCIkbmV4dFRpY2siLCJzY3JvbGxFbCIsImVtb2ppRWwiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjYXRlZ29yeUlkeCIsIk5BTUVTUEFDRSIsIl9KU09OIiwiSlNPTiIsImlzTG9jYWxTdG9yYWdlU3VwcG9ydGVkIiwiZ2V0dGVyIiwic2V0dGVyIiwic2V0SGFuZGxlcnMiLCJoYW5kbGVycyIsInNldE5hbWVzcGFjZSIsIm5hbWVzcGFjZSIsInN0YXRlIiwibG9jYWxTdG9yYWdlIiwic3RyaW5naWZ5IiwicGFyc2UiLCJpc1dpbmRvd0F2YWlsYWJsZSIsImxhc3RUaW1lIiwidmVuZG9ycyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJlbGVtZW50IiwiY3VyclRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInRpbWVUb0NhbGwiLCJtYXgiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==
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
        var recentEmojis = this.recent || _frequently__WEBPACK_IMPORTED_MODULE_4__["default"].get(this.recentLength);
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
        if (newRecentEmojis.length) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQSxzRkFBc0YsZ0VBQWdCO0FBQ3RHOzs7Ozs7VUNSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQyxlQUFlO1dBQ2YsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBLDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOaUM7QUFDUTtBQUNFO0FBVXRCO0FBRTBEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvRW1vamkudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC9zcmMvY29tcG9uZW50cy9QaWNrZXIudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC9zcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnkudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC9zcmMvY29tcG9uZW50cy9wcmV2aWV3LnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvc2VhcmNoLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvc2tpbnMudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9QaWNrZXIudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2FuY2hvcnMudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3J5LnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9wcmV2aWV3LnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NraW5zLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvcG9seWZpbGxzL3N0cmluZ0Zyb21Db2RlUG9pbnQuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3N2Z3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2RhdGEuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2Vtb2ppLWRhdGEuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2ZyZXF1ZW50bHkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy91dGlscy9waWNrZXIuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL3NoYXJlZC1wcm9wcy5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvdXRpbHMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3ZlbmRvci9yYWYtcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvRW1vamkudnVlPzFiMzMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvUGlja2VyLnZ1ZT84MjE4Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2FuY2hvcnMudnVlPzRiOGMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnkudnVlPzZjOGIiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvcHJldmlldy52dWU/M2RhZCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gudnVlPzM3ZjciLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2tpbnMudnVlPzhhZGMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvRW1vamkudnVlPzYwYTgiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvUGlja2VyLnZ1ZT8yOTMyIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2FuY2hvcnMudnVlP2M1MjciLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnkudnVlP2U0MTUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvcHJldmlldy52dWU/YzA4ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gudnVlPzhjZjYiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2tpbnMudnVlP2M1NWEiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvRW1vamkudnVlP2QxNTEiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvUGlja2VyLnZ1ZT81Mzk0Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2FuY2hvcnMudnVlP2MyZTkiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnkudnVlPzUxMzgiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvcHJldmlldy52dWU/YTRlMSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gudnVlPzU3ODgiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2tpbnMudnVlPzk5MjkiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0Vtb2ppTWFydC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkVtb2ppTWFydFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJFbW9qaU1hcnRcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiPHRlbXBsYXRlPlxuICA8Y29tcG9uZW50XG4gICAgOmlzPVwidGFnXCJcbiAgICB2LWlmPVwidmlldy5jYW5SZW5kZXJcIlxuICAgIDp0aXRsZT1cInZpZXcudGl0bGVcIlxuICAgIDphcmlhLWxhYmVsPVwidmlldy5hcmlhTGFiZWxcIlxuICAgIDpkYXRhLXRpdGxlPVwidGl0bGVcIlxuICAgIGNsYXNzPVwiZW1vamktbWFydC1lbW9qaVwiXG4gICAgQG1vdXNlZW50ZXI9XCJvbk1vdXNlRW50ZXJcIlxuICAgIEBtb3VzZWxlYXZlPVwib25Nb3VzZUxlYXZlXCJcbiAgICBAY2xpY2s9XCJvbkNsaWNrXCJcbiAgPlxuICAgIDxzcGFuIDpjbGFzcz1cInZpZXcuY3NzQ2xhc3NcIiA6c3R5bGU9XCJ2aWV3LmNzc1N0eWxlXCI+e3tcbiAgICAgIHZpZXcuY29udGVudFxuICAgIH19PC9zcGFuPlxuICA8L2NvbXBvbmVudD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBFbW9qaVByb3BzIH0gZnJvbSAnLi4vdXRpbHMvc2hhcmVkLXByb3BzJ1xuaW1wb3J0IHsgRW1vamlWaWV3IH0gZnJvbSAnLi4vdXRpbHMvZW1vamktZGF0YSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIC4uLkVtb2ppUHJvcHMsXG4gICAgZGF0YToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgZW1pdHM6IFtcImNsaWNrXCIsIFwibW91c2VlbnRlclwiLCBcIm1vdXNlbGVhdmVcIl0sXG4gIGNvbXB1dGVkOiB7XG4gICAgdmlldygpIHtcbiAgICAgIHJldHVybiBuZXcgRW1vamlWaWV3KFxuICAgICAgICB0aGlzLmVtb2ppT2JqZWN0LFxuICAgICAgICB0aGlzLnNraW4sXG4gICAgICAgIHRoaXMuc2V0LFxuICAgICAgICB0aGlzLm5hdGl2ZSxcbiAgICAgICAgdGhpcy5mYWxsYmFjayxcbiAgICAgICAgdGhpcy50b29sdGlwLFxuICAgICAgICB0aGlzLnNpemUsXG4gICAgICApXG4gICAgfSxcbiAgICBzYW5pdGl6ZWREYXRhKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZW1vamlPYmplY3QuX3Nhbml0aXplZFxuICAgIH0sXG4gICAgdGl0bGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy50b29sdGlwID8gdGhpcy5lbW9qaU9iamVjdC5zaG9ydF9uYW1lIDogbnVsbFxuICAgIH0sXG4gICAgZW1vamlPYmplY3QoKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuZW1vamkgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5maW5kRW1vamkodGhpcy5lbW9qaSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVtb2ppXG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAgY3JlYXRlZCgpIHt9LFxuICBtZXRob2RzOiB7XG4gICAgb25DbGljaygpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgdGhpcy5lbW9qaU9iamVjdClcbiAgICB9LFxuICAgIG9uTW91c2VFbnRlcigpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ21vdXNlZW50ZXInLCB0aGlzLmVtb2ppT2JqZWN0KVxuICAgIH0sXG4gICAgb25Nb3VzZUxlYXZlKCkge1xuICAgICAgdGhpcy4kZW1pdCgnbW91c2VsZWF2ZScsIHRoaXMuZW1vamlPYmplY3QpXG4gICAgfSxcbiAgfSxcbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8c2VjdGlvbiBjbGFzcz1cImVtb2ppLW1hcnQgZW1vamktbWFydC1zdGF0aWNcIiA6c3R5bGU9XCJjdXN0b21TdHlsZXNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1iYXIgZW1vamktbWFydC1iYXItYW5jaG9yc1wiIHYtaWY9XCJzaG93Q2F0ZWdvcmllc1wiPlxuICAgICAgPGFuY2hvcnNcbiAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgOmkxOG49XCJtZXJnZWRJMThuXCJcbiAgICAgICAgOmNvbG9yPVwiY29sb3JcIlxuICAgICAgICA6Y2F0ZWdvcmllcz1cInZpZXcuYWxsQ2F0ZWdvcmllc1wiXG4gICAgICAgIDphY3RpdmUtY2F0ZWdvcnk9XCJ2aWV3LmFjdGl2ZUNhdGVnb3J5XCJcbiAgICAgICAgQGNsaWNrPVwib25BbmNob3JDbGlja1wiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuXG4gICAgPHNsb3RcbiAgICAgIG5hbWU9XCJzZWFyY2hUZW1wbGF0ZVwiXG4gICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgOmkxOG49XCJpMThuXCJcbiAgICAgIDphdXRvLWZvY3VzPVwiYXV0b0ZvY3VzXCJcbiAgICAgIDpvbi1zZWFyY2g9XCJvblNlYXJjaFwiXG4gICAgPlxuICAgICAgPHNlYXJjaFxuICAgICAgICB2LWlmPVwic2hvd1NlYXJjaFwiXG4gICAgICAgIHJlZj1cInNlYXJjaFwiXG4gICAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICAgIDppMThuPVwibWVyZ2VkSTE4blwiXG4gICAgICAgIDphdXRvLWZvY3VzPVwiYXV0b0ZvY3VzXCJcbiAgICAgICAgOm9uLXNlYXJjaD1cIm9uU2VhcmNoXCJcbiAgICAgICAgQHNlYXJjaD1cIm9uU2VhcmNoXCJcbiAgICAgICAgQGFycm93TGVmdD1cIm9uQXJyb3dMZWZ0XCJcbiAgICAgICAgQGFycm93UmlnaHQ9XCJvbkFycm93UmlnaHRcIlxuICAgICAgICBAYXJyb3dEb3duPVwib25BcnJvd0Rvd25cIlxuICAgICAgICBAYXJyb3dVcD1cIm9uQXJyb3dVcFwiXG4gICAgICAgIEBlbnRlcj1cIm9uRW50ZXJcIlxuICAgICAgICBAc2VsZWN0PVwib25UZXh0U2VsZWN0XCJcbiAgICAgIC8+XG4gICAgPC9zbG90PlxuXG4gICAgPGRpdlxuICAgICAgcm9sZT1cInRhYnBhbmVsXCJcbiAgICAgIGNsYXNzPVwiZW1vamktbWFydC1zY3JvbGxcIlxuICAgICAgcmVmPVwic2Nyb2xsXCJcbiAgICAgIEBzY3JvbGw9XCJvblNjcm9sbFwiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBpZD1cImVtb2ppLW1hcnQtbGlzdFwiXG4gICAgICAgIHJlZj1cInNjcm9sbENvbnRlbnRcIlxuICAgICAgICByb2xlPVwibGlzdGJveFwiXG4gICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJcbiAgICAgID5cbiAgICAgICAgPHNsb3QgbmFtZT1cImN1c3RvbUNhdGVnb3J5XCI+IDwvc2xvdD5cblxuICAgICAgICA8Y2F0ZWdvcnlcbiAgICAgICAgICB2LWZvcj1cIihjYXRlZ29yeSwgaWR4KSBpbiB2aWV3LmZpbHRlcmVkQ2F0ZWdvcmllc1wiXG4gICAgICAgICAgdi1zaG93PVwiaW5maW5pdGVTY3JvbGwgfHwgY2F0ZWdvcnkgPT0gdmlldy5hY3RpdmVDYXRlZ29yeSB8fCBpc1NlYXJjaGluZ1wiXG4gICAgICAgICAgOnJlZj1cIidjYXRlZ29yaWVzXycgKyBpZHhcIlxuICAgICAgICAgIDprZXk9XCJjYXRlZ29yeS5pZFwiXG4gICAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgICA6aTE4bj1cIm1lcmdlZEkxOG5cIlxuICAgICAgICAgIDppZD1cImNhdGVnb3J5LmlkXCJcbiAgICAgICAgICA6bmFtZT1cImNhdGVnb3J5Lm5hbWVcIlxuICAgICAgICAgIDplbW9qaXM9XCJjYXRlZ29yeS5lbW9qaXNcIlxuICAgICAgICAgIDplbW9qaS1wcm9wcz1cImVtb2ppUHJvcHNcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8c2xvdFxuICAgICAgbmFtZT1cInByZXZpZXdUZW1wbGF0ZVwiXG4gICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgOnRpdGxlPVwidGl0bGVcIlxuICAgICAgOmVtb2ppPVwidmlldy5wcmV2aWV3RW1vamlcIlxuICAgICAgOmlkbGUtZW1vamk9XCJpZGxlRW1vamlcIlxuICAgICAgOnNob3ctc2tpbi10b25lcz1cInNob3dTa2luVG9uZXNcIlxuICAgICAgOmVtb2ppLXByb3BzPVwiZW1vamlQcm9wc1wiXG4gICAgICA6c2tpbi1wcm9wcz1cInNraW5Qcm9wc1wiXG4gICAgICA6b24tc2tpbi1jaGFuZ2U9XCJvblNraW5DaGFuZ2VcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LWJhciBlbW9qaS1tYXJ0LWJhci1wcmV2aWV3XCIgdi1pZj1cInNob3dQcmV2aWV3XCI+XG4gICAgICAgIDxwcmV2aWV3XG4gICAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgICA6dGl0bGU9XCJ0aXRsZVwiXG4gICAgICAgICAgOmVtb2ppPVwidmlldy5wcmV2aWV3RW1vamlcIlxuICAgICAgICAgIDppZGxlLWVtb2ppPVwiaWRsZUVtb2ppXCJcbiAgICAgICAgICA6c2hvdy1za2luLXRvbmVzPVwic2hvd1NraW5Ub25lc1wiXG4gICAgICAgICAgOmVtb2ppLXByb3BzPVwiZW1vamlQcm9wc1wiXG4gICAgICAgICAgOnNraW4tcHJvcHM9XCJza2luUHJvcHNcIlxuICAgICAgICAgIDpvbi1za2luLWNoYW5nZT1cIm9uU2tpbkNoYW5nZVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L3Nsb3Q+XG4gIDwvc2VjdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgJy4uL3ZlbmRvci9yYWYtcG9seWZpbGwnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vdXRpbHMvc3RvcmUnXG5pbXBvcnQgZnJlcXVlbnRseSBmcm9tICcuLi91dGlscy9mcmVxdWVudGx5J1xuaW1wb3J0IHsgZGVlcE1lcmdlLCBtZWFzdXJlU2Nyb2xsYmFyIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBQaWNrZXJQcm9wcyB9IGZyb20gJy4uL3V0aWxzL3NoYXJlZC1wcm9wcydcbmltcG9ydCB7IFBpY2tlclZpZXcgfSBmcm9tICcuLi91dGlscy9waWNrZXInXG5pbXBvcnQgQW5jaG9ycyBmcm9tICcuL2FuY2hvcnMudnVlJ1xuaW1wb3J0IENhdGVnb3J5IGZyb20gJy4vY2F0ZWdvcnkudnVlJ1xuaW1wb3J0IFByZXZpZXcgZnJvbSAnLi9wcmV2aWV3LnZ1ZSdcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9zZWFyY2gudnVlJ1xuXG5jb25zdCBJMThOID0ge1xuICBzZWFyY2g6ICdTZWFyY2gnLFxuICBub3Rmb3VuZDogJ05vIEVtb2ppIEZvdW5kJyxcbiAgY2F0ZWdvcmllczoge1xuICAgIHNlYXJjaDogJ1NlYXJjaCBSZXN1bHRzJyxcbiAgICByZWNlbnQ6ICdGcmVxdWVudGx5IFVzZWQnLFxuICAgIHNtaWxleXM6ICdTbWlsZXlzICYgRW1vdGlvbicsXG4gICAgcGVvcGxlOiAnUGVvcGxlICYgQm9keScsXG4gICAgbmF0dXJlOiAnQW5pbWFscyAmIE5hdHVyZScsXG4gICAgZm9vZHM6ICdGb29kICYgRHJpbmsnLFxuICAgIGFjdGl2aXR5OiAnQWN0aXZpdHknLFxuICAgIHBsYWNlczogJ1RyYXZlbCAmIFBsYWNlcycsXG4gICAgb2JqZWN0czogJ09iamVjdHMnLFxuICAgIHN5bWJvbHM6ICdTeW1ib2xzJyxcbiAgICBmbGFnczogJ0ZsYWdzJyxcbiAgICBjdXN0b206ICdDdXN0b20nLFxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgLi4uUGlja2VyUHJvcHMsXG4gICAgZGF0YToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgZW1pdHM6IFsnc2VsZWN0JywgJ3NraW4tY2hhbmdlJ10sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGl2ZVNraW46IHRoaXMuc2tpbiB8fCBzdG9yZS5nZXQoJ3NraW4nKSB8fCB0aGlzLmRlZmF1bHRTa2luLFxuICAgICAgdmlldzogbmV3IFBpY2tlclZpZXcodGhpcyksXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGN1c3RvbVN0eWxlcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiB0aGlzLmNhbGN1bGF0ZVdpZHRoICsgJ3B4JyxcbiAgICAgICAgLi4udGhpcy5waWNrZXJTdHlsZXMsXG4gICAgICB9XG4gICAgfSxcbiAgICBlbW9qaVByb3BzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmF0aXZlOiB0aGlzLm5hdGl2ZSxcbiAgICAgICAgc2tpbjogdGhpcy5hY3RpdmVTa2luLFxuICAgICAgICBzZXQ6IHRoaXMuc2V0LFxuICAgICAgICBlbW9qaVRvb2x0aXA6IHRoaXMuZW1vamlUb29sdGlwLFxuICAgICAgICBlbW9qaVNpemU6IHRoaXMuZW1vamlTaXplLFxuICAgICAgICBzZWxlY3RlZEVtb2ppOiB0aGlzLnZpZXcucHJldmlld0Vtb2ppLFxuICAgICAgICBzZWxlY3RlZEVtb2ppQ2F0ZWdvcnk6IHRoaXMudmlldy5wcmV2aWV3RW1vamlDYXRlZ29yeSxcbiAgICAgICAgb25FbnRlcjogdGhpcy5vbkVtb2ppRW50ZXIuYmluZCh0aGlzKSxcbiAgICAgICAgb25MZWF2ZTogdGhpcy5vbkVtb2ppTGVhdmUuYmluZCh0aGlzKSxcbiAgICAgICAgb25DbGljazogdGhpcy5vbkVtb2ppQ2xpY2suYmluZCh0aGlzKSxcbiAgICAgIH1cbiAgICB9LFxuICAgIHNraW5Qcm9wcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNraW46IHRoaXMuYWN0aXZlU2tpbixcbiAgICAgIH1cbiAgICB9LFxuICAgIGNhbGN1bGF0ZVdpZHRoKCkge1xuICAgICAgcmV0dXJuIHRoaXMucGVyTGluZSAqICh0aGlzLmVtb2ppU2l6ZSArIDEyKSArIDEyICsgMiArIG1lYXN1cmVTY3JvbGxiYXIoKVxuICAgIH0sXG4gICAgLy8gZW1vamlzUGVyUm93KCkge1xuICAgIC8vICAgY29uc3QgbGlzdEVsID0gdGhpcy4kcmVmcy5zY3JvbGxDb250ZW50XG4gICAgLy8gICBjb25zdCBlbW9qaUVsID0gbGlzdEVsLnF1ZXJ5U2VsZWN0b3IoJy5lbW9qaS1tYXJ0LWVtb2ppJylcbiAgICAvLyAgIHJldHVybiBNYXRoLmZsb29yKGxpc3RFbC5vZmZzZXRXaWR0aCAvIGVtb2ppRWwub2Zmc2V0V2lkdGgpXG4gICAgLy8gfSxcbiAgICBmaWx0ZXJlZENhdGVnb3JpZXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy52aWV3LmZpbHRlcmVkQ2F0ZWdvcmllc1xuICAgIH0sXG4gICAgbWVyZ2VkSTE4bigpIHtcbiAgICAgIHJldHVybiBPYmplY3QuZnJlZXplKGRlZXBNZXJnZShJMThOLCB0aGlzLmkxOG4pKVxuICAgIH0sXG4gICAgaWRsZUVtb2ppKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5lbW9qaSh0aGlzLmVtb2ppKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICdEZWZhdWx0IHByZXZpZXcgZW1vamkgYCcgK1xuICAgICAgICAgICAgdGhpcy5lbW9qaSArXG4gICAgICAgICAgICAnYCBpcyBub3QgYXZhaWxhYmxlLCBjaGVjayB0aGUgUGlja2VyIGBlbW9qaWAgcHJvcGVydHknLFxuICAgICAgICApXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5maXJzdEVtb2ppKClcbiAgICAgIH1cbiAgICB9LFxuICAgIGlzU2VhcmNoaW5nKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmlldy5zZWFyY2hFbW9qaXMgIT0gbnVsbDtcbiAgICB9LFxuICB9LFxuICB3YXRjaDoge1xuICAgIHNraW4oKSB7XG4gICAgICB0aGlzLm9uU2tpbkNoYW5nZSh0aGlzLnNraW4pXG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uU2Nyb2xsKCkge1xuICAgICAgaWYgKHRoaXMuaW5maW5pdGVTY3JvbGwgJiYgIXRoaXMud2FpdGluZ0ZvclBhaW50KSB7XG4gICAgICAgIHRoaXMud2FpdGluZ0ZvclBhaW50ID0gdHJ1ZVxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMub25TY3JvbGxQYWludC5iaW5kKHRoaXMpKVxuICAgICAgfVxuICAgIH0sXG4gICAgb25TY3JvbGxQYWludCgpIHtcbiAgICAgIHRoaXMud2FpdGluZ0ZvclBhaW50ID0gZmFsc2VcbiAgICAgIHRoaXMudmlldy5vblNjcm9sbCgpXG4gICAgfSxcbiAgICBvbkFuY2hvckNsaWNrKGNhdGVnb3J5KSB7XG4gICAgICB0aGlzLnZpZXcub25BbmNob3JDbGljayhjYXRlZ29yeSlcbiAgICB9LFxuICAgIG9uU2VhcmNoKHZhbHVlKSB7XG4gICAgICB0aGlzLnZpZXcub25TZWFyY2godmFsdWUpXG4gICAgfSxcbiAgICBvbkVtb2ppRW50ZXIoZW1vamkpIHtcbiAgICAgIHRoaXMudmlldy5vbkVtb2ppRW50ZXIoZW1vamkpXG4gICAgfSxcbiAgICBvbkVtb2ppTGVhdmUoZW1vamkpIHtcbiAgICAgIHRoaXMudmlldy5vbkVtb2ppTGVhdmUoZW1vamkpXG4gICAgfSxcbiAgICBvbkFycm93TGVmdCgkZXZlbnQpIHtcbiAgICAgIGNvbnN0IG9sZElkeCA9IHRoaXMudmlldy5wcmV2aWV3RW1vamlJZHhcbiAgICAgIHRoaXMudmlldy5vbkFycm93TGVmdCgpXG4gICAgICBpZiAoJGV2ZW50ICYmIHRoaXMudmlldy5wcmV2aWV3RW1vamlJZHggIT09IG9sZElkeCkge1xuICAgICAgICAvLyBQcmV2ZW50IGN1cnNvciBtb3ZlbWVudCBpbnNpZGUgdGhlIGlucHV0XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9XG4gICAgfSxcbiAgICBvbkFycm93UmlnaHQoKSB7XG4gICAgICB0aGlzLnZpZXcub25BcnJvd1JpZ2h0KClcbiAgICB9LFxuICAgIG9uQXJyb3dEb3duKCkge1xuICAgICAgdGhpcy52aWV3Lm9uQXJyb3dEb3duKClcbiAgICB9LFxuICAgIG9uQXJyb3dVcCgkZXZlbnQpIHtcbiAgICAgIHRoaXMudmlldy5vbkFycm93VXAoKVxuICAgICAgLy8gUHJldmVudCBjdXJzb3IgbW92ZW1lbnQgaW5zaWRlIHRoZSBpbnB1dFxuICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9LFxuICAgIG9uRW50ZXIoKSB7XG4gICAgICBpZiAoIXRoaXMudmlldy5wcmV2aWV3RW1vamkpIHtcbiAgICAgICAgLy8gV2UgbWF5IHByZXNzIFwiRW50ZXJcIiB3aGVuIG5vdGhpbmcgaXMgc2VsZWN0ZWQsXG4gICAgICAgIC8vIGZvciBleGFtcGxlLCBpZiB3ZSBzZWFyY2ggZm9yIFwiYXNkZlwiLlxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHRoaXMuJGVtaXQoJ3NlbGVjdCcsIHRoaXMudmlldy5wcmV2aWV3RW1vamkpXG4gICAgICBmcmVxdWVudGx5LmFkZCh0aGlzLnZpZXcucHJldmlld0Vtb2ppKVxuICAgIH0sXG4gICAgb25FbW9qaUNsaWNrKGVtb2ppKSB7XG4gICAgICB0aGlzLiRlbWl0KCdzZWxlY3QnLCBlbW9qaSlcbiAgICAgIGZyZXF1ZW50bHkuYWRkKGVtb2ppKVxuICAgICAgdGhpcy5kYXRhLnVwZGF0ZVJlY2VudENhdGVnb3J5KClcbiAgICB9LFxuICAgIG9uVGV4dFNlbGVjdCgkZXZlbnQpIHtcbiAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCB0ZXh0IHNlbGVjdCBldmVudC5cbiAgICAgIC8vIEluIFZ1ZSAzIGl0IGdvZXMgdGhyb3VnaCB0aGUgY29tcG9uZW50IGFuZCB0cmlnZ2VycyB0aGUgYHNlbGVjdGBcbiAgICAgIC8vIGV2ZW50IHRoYXQgaXMgc3VwcG9zZWQgdG8gYmUgZW1taXRlZCBvbmx5IHdpdGggZW1vamkuXG4gICAgICAvLyAodGhlcmUgaXMgbm8gc3VjaCBwcm9ibGVtIGluIFZ1ZSAyKS5cbiAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIH0sXG4gICAgb25Ta2luQ2hhbmdlKHNraW4pIHtcbiAgICAgIHRoaXMuYWN0aXZlU2tpbiA9IHNraW5cbiAgICAgIHN0b3JlLnVwZGF0ZSh7IHNraW4gfSlcblxuICAgICAgdGhpcy4kZW1pdCgnc2tpbi1jaGFuZ2UnLCBza2luKVxuICAgIH0sXG4gICAgZ2V0Q2F0ZWdvcnlDb21wb25lbnQoaW5kZXgpIHtcbiAgICAgIGxldCBjb21wb25lbnQgPSB0aGlzLiRyZWZzWydjYXRlZ29yaWVzXycgKyBpbmRleF1cbiAgICAgIGlmIChjb21wb25lbnQgJiYgJzAnIGluIGNvbXBvbmVudCkge1xuICAgICAgICAvLyBWdWUgMiBoYXMgJHJlZnMgdW5kZXIgdi1mb3IgYXMgYW4gYXJyYXkuXG4gICAgICAgIHJldHVybiBjb21wb25lbnRbJzAnXVxuICAgICAgfVxuICAgICAgLy8gVnVlIDMgZG9lcyBub3Qgc3VwcG9ydCAkcmVmcyBhcyBhcnJheS5cbiAgICAgIHJldHVybiBjb21wb25lbnRcbiAgICB9LFxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgQW5jaG9ycyxcbiAgICBDYXRlZ29yeSxcbiAgICBQcmV2aWV3LFxuICAgIFNlYXJjaCxcbiAgfSxcbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IHJvbGU9XCJ0YWJsaXN0XCIgY2xhc3M9XCJlbW9qaS1tYXJ0LWFuY2hvcnNcIj5cbiAgICA8YnV0dG9uXG4gICAgICB2LWZvcj1cImNhdGVnb3J5IGluIGNhdGVnb3JpZXNcIlxuICAgICAgcm9sZT1cInRhYlwiXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIDphcmlhLWxhYmVsPVwiY2F0ZWdvcnkubmFtZVwiXG4gICAgICA6YXJpYS1zZWxlY3RlZD1cImNhdGVnb3J5LmlkID09IGFjdGl2ZUNhdGVnb3J5LmlkXCJcbiAgICAgIDprZXk9XCJjYXRlZ29yeS5pZFwiXG4gICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICdlbW9qaS1tYXJ0LWFuY2hvcic6IHRydWUsXG4gICAgICAgICdlbW9qaS1tYXJ0LWFuY2hvci1zZWxlY3RlZCc6IGNhdGVnb3J5LmlkID09IGFjdGl2ZUNhdGVnb3J5LmlkLFxuICAgICAgfVwiXG4gICAgICA6c3R5bGU9XCJ7IGNvbG9yOiBjYXRlZ29yeS5pZCA9PSBhY3RpdmVDYXRlZ29yeS5pZCA/IGNvbG9yIDogJycgfVwiXG4gICAgICA6ZGF0YS10aXRsZT1cImkxOG4uY2F0ZWdvcmllc1tjYXRlZ29yeS5pZF1cIlxuICAgICAgQGNsaWNrPVwiJGVtaXQoJ2NsaWNrJywgY2F0ZWdvcnkpXCJcbiAgICA+XG4gICAgICA8ZGl2IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHYtaHRtbD1cInN2Z3NbY2F0ZWdvcnkuaWRdXCIgLz5cbiAgICAgIDxzcGFuXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgIGNsYXNzPVwiZW1vamktbWFydC1hbmNob3ItYmFyXCJcbiAgICAgICAgOnN0eWxlPVwieyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yIH1cIlxuICAgICAgPjwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHN2Z3MgZnJvbSAnLi4vc3ZncydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIGkxOG46IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuICAgIGNhdGVnb3JpZXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBhY3RpdmVDYXRlZ29yeToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGVtaXRzOiBbJ2NsaWNrJ10sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5zdmdzID0gc3Znc1xuICB9LFxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxzZWN0aW9uXG4gICAgOmNsYXNzPVwie1xuICAgICAgJ2Vtb2ppLW1hcnQtY2F0ZWdvcnknOiB0cnVlLFxuICAgICAgJ2Vtb2ppLW1hcnQtbm8tcmVzdWx0cyc6ICFoYXNSZXN1bHRzLFxuICAgIH1cIlxuICAgIDphcmlhLWxhYmVsPVwiaTE4bi5jYXRlZ29yaWVzW2lkXVwiXG4gICAgdi1pZj1cImlzVmlzaWJsZSAmJiAoaXNTZWFyY2ggfHwgaGFzUmVzdWx0cylcIlxuICA+XG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtY2F0ZWdvcnktbGFiZWxcIj5cbiAgICAgIDxoMyBjbGFzcz1cImVtb2ppLW1hcnQtY2F0ZWdvcnktbGFiZWxcIj57eyBpMThuLmNhdGVnb3JpZXNbaWRdIH19PC9oMz5cbiAgICA8L2Rpdj5cblxuICAgIDx0ZW1wbGF0ZSB2LWZvcj1cInsgZW1vamlPYmplY3QsIGVtb2ppVmlldyB9IGluIGVtb2ppT2JqZWN0c1wiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB2LWlmPVwiZW1vamlWaWV3LmNhblJlbmRlclwiXG4gICAgICAgIDphcmlhLWxhYmVsPVwiZW1vamlWaWV3LmFyaWFMYWJlbFwiXG4gICAgICAgIHJvbGU9XCJvcHRpb25cIlxuICAgICAgICBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIlxuICAgICAgICBhcmlhLXBvc2luc2V0PVwiMVwiXG4gICAgICAgIGFyaWEtc2V0c2l6ZT1cIjE4MTJcIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgOmRhdGEtdGl0bGU9XCJlbW9qaU9iamVjdC5zaG9ydF9uYW1lXCJcbiAgICAgICAgOmtleT1cImVtb2ppT2JqZWN0LmlkXCJcbiAgICAgICAgOnRpdGxlPVwiZW1vamlWaWV3LnRpdGxlXCJcbiAgICAgICAgY2xhc3M9XCJlbW9qaS1tYXJ0LWVtb2ppXCJcbiAgICAgICAgOmNsYXNzPVwiYWN0aXZlQ2xhc3MoZW1vamlPYmplY3QpXCJcbiAgICAgICAgQG1vdXNlZW50ZXI9XCJlbW9qaVByb3BzLm9uRW50ZXIoZW1vamlWaWV3LmdldEVtb2ppKCkpXCJcbiAgICAgICAgQG1vdXNlbGVhdmU9XCJlbW9qaVByb3BzLm9uTGVhdmUoZW1vamlWaWV3LmdldEVtb2ppKCkpXCJcbiAgICAgICAgQGNsaWNrPVwiZW1vamlQcm9wcy5vbkNsaWNrKGVtb2ppVmlldy5nZXRFbW9qaSgpKVwiXG4gICAgICA+XG4gICAgICAgIDxzcGFuIDpjbGFzcz1cImVtb2ppVmlldy5jc3NDbGFzc1wiIDpzdHlsZT1cImVtb2ppVmlldy5jc3NTdHlsZVwiPnt7XG4gICAgICAgICAgZW1vamlWaWV3LmNvbnRlbnRcbiAgICAgICAgfX08L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L3RlbXBsYXRlPlxuXG4gICAgPGRpdiB2LWlmPVwiIWhhc1Jlc3VsdHNcIj5cbiAgICAgIDxlbW9qaVxuICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICBlbW9qaT1cInNsZXV0aF9vcl9zcHlcIlxuICAgICAgICA6bmF0aXZlPVwiZW1vamlQcm9wcy5uYXRpdmVcIlxuICAgICAgICA6c2tpbj1cImVtb2ppUHJvcHMuc2tpblwiXG4gICAgICAgIDpzZXQ9XCJlbW9qaVByb3BzLnNldFwiXG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtbm8tcmVzdWx0cy1sYWJlbFwiPnt7IGkxOG4ubm90Zm91bmQgfX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IEVtb2ppVmlldyB9IGZyb20gJy4uL3V0aWxzL2Vtb2ppLWRhdGEnXG5pbXBvcnQgRW1vamkgZnJvbSAnLi9FbW9qaS52dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGkxOG46IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgbmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBlbW9qaXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgIH0sXG4gICAgZW1vamlQcm9wczoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFjdGl2ZUNsYXNzOiBmdW5jdGlvbihlbW9qaU9iamVjdCkge1xuICAgICAgaWYgKCF0aGlzLmVtb2ppUHJvcHMuc2VsZWN0ZWRFbW9qaSkge1xuICAgICAgICByZXR1cm4gJydcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5lbW9qaVByb3BzLnNlbGVjdGVkRW1vamlDYXRlZ29yeSkge1xuICAgICAgICByZXR1cm4gJydcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5lbW9qaVByb3BzLnNlbGVjdGVkRW1vamkuaWQgPT0gZW1vamlPYmplY3QuaWQgJiZcbiAgICAgICAgdGhpcy5lbW9qaVByb3BzLnNlbGVjdGVkRW1vamlDYXRlZ29yeS5pZCA9PSB0aGlzLmlkXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuICdlbW9qaS1tYXJ0LWVtb2ppLXNlbGVjdGVkJ1xuICAgICAgfVxuICAgICAgcmV0dXJuICcnXG4gICAgfSxcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBpc1Zpc2libGUoKSB7XG4gICAgICByZXR1cm4gISF0aGlzLmVtb2ppc1xuICAgIH0sXG4gICAgaXNTZWFyY2goKSB7XG4gICAgICByZXR1cm4gdGhpcy5uYW1lID09ICdTZWFyY2gnXG4gICAgfSxcbiAgICBoYXNSZXN1bHRzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZW1vamlzLmxlbmd0aCA+IDBcbiAgICB9LFxuICAgIGVtb2ppT2JqZWN0cygpIHtcbiAgICAgIHJldHVybiB0aGlzLmVtb2ppcy5tYXAoKGVtb2ppKSA9PiB7XG4gICAgICAgIGxldCBlbW9qaU9iamVjdCA9IGVtb2ppXG4gICAgICAgIGxldCBlbW9qaVZpZXcgPSBuZXcgRW1vamlWaWV3KFxuICAgICAgICAgIGVtb2ppLFxuICAgICAgICAgIHRoaXMuZW1vamlQcm9wcy5za2luLFxuICAgICAgICAgIHRoaXMuZW1vamlQcm9wcy5zZXQsXG4gICAgICAgICAgdGhpcy5lbW9qaVByb3BzLm5hdGl2ZSxcbiAgICAgICAgICB0aGlzLmVtb2ppUHJvcHMuZmFsbGJhY2ssXG4gICAgICAgICAgdGhpcy5lbW9qaVByb3BzLmVtb2ppVG9vbHRpcCxcbiAgICAgICAgICB0aGlzLmVtb2ppUHJvcHMuZW1vamlTaXplLFxuICAgICAgICApXG4gICAgICAgIHJldHVybiB7IGVtb2ppT2JqZWN0LCBlbW9qaVZpZXcgfVxuICAgICAgfSlcbiAgICB9LFxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgRW1vamksXG4gIH0sXG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlld1wiPlxuICA8dGVtcGxhdGUgdi1pZj1cImVtb2ppXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWVtb2ppXCI+XG4gICAgICAgIDxlbW9qaVxuICAgICAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICAgICAgOmVtb2ppPVwiZW1vamlcIlxuICAgICAgICAgIDpuYXRpdmU9XCJlbW9qaVByb3BzLm5hdGl2ZVwiXG4gICAgICAgICAgOnNraW49XCJlbW9qaVByb3BzLnNraW5cIlxuICAgICAgICAgIDpzZXQ9XCJlbW9qaVByb3BzLnNldFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1kYXRhXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctbmFtZVwiPnt7IGVtb2ppLm5hbWUgfX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1zaG9ydG5hbWVzXCI+XG4gICAgICAgICAgPHNwYW4gdi1mb3I9XCJzaG9ydE5hbWUgaW4gZW1vamlTaG9ydE5hbWVzXCIgOmtleT1cInNob3J0TmFtZVwiIGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LXNob3J0bmFtZVwiPjp7eyBzaG9ydE5hbWUgfX06PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1lbW90aWNvbnNcIj5cbiAgICAgICAgICA8c3BhbiB2LWZvcj1cImVtb3RpY29uIGluIGVtb2ppRW1vdGljb25zXCIgOmtleT1cImVtb3RpY29uXCIgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vdGljb25cIj57eyBlbW90aWNvbiB9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cblxuICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vamlcIj5cbiAgICAgIDxlbW9qaVxuICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICA6ZW1vamk9XCJpZGxlRW1vamlcIlxuICAgICAgICA6bmF0aXZlPVwiZW1vamlQcm9wcy5uYXRpdmVcIlxuICAgICAgICA6c2tpbj1cImVtb2ppUHJvcHMuc2tpblwiXG4gICAgICAgIDpzZXQ9XCJlbW9qaVByb3BzLnNldFwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1kYXRhXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImVtb2ppLW1hcnQtdGl0bGUtbGFiZWxcIj57eyB0aXRsZSB9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgdi1pZj1cInNob3dTa2luVG9uZXNcIiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1za2luc1wiPlxuICAgICAgPHNraW5zIDpza2luPVwic2tpblByb3BzLnNraW5cIiBAY2hhbmdlPVwib25Ta2luQ2hhbmdlKCRldmVudClcIiAvPlxuICAgIDwvZGl2PlxuICA8L3RlbXBsYXRlPlxuPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBFbW9qaSBmcm9tICcuL0Vtb2ppLnZ1ZSdcbmltcG9ydCBTa2lucyBmcm9tICcuL3NraW5zLnZ1ZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGVtb2ppOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBPYmplY3RdXG4gICAgfSxcbiAgICBpZGxlRW1vamk6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIE9iamVjdF0sXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgc2hvd1NraW5Ub25lczoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9LFxuICAgIGVtb2ppUHJvcHM6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBza2luUHJvcHM6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBvblNraW5DaGFuZ2U6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgZW1vamlEYXRhKCkge1xuICAgICAgaWYgKHRoaXMuZW1vamkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1vamlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7fVxuICAgICAgfVxuICAgIH0sXG4gICAgZW1vamlTaG9ydE5hbWVzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZW1vamlEYXRhLnNob3J0X25hbWVzXG4gICAgfSxcbiAgICBlbW9qaUVtb3RpY29ucygpIHtcbiAgICAgIHJldHVybiB0aGlzLmVtb2ppRGF0YS5lbW90aWNvbnNcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBFbW9qaSxcbiAgICBTa2luc1xuICB9XG59XG5cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1zZWFyY2hcIj5cbiAgICA8aW5wdXRcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIDpwbGFjZWhvbGRlcj1cImkxOG4uc2VhcmNoXCJcbiAgICAgIHJvbGU9XCJ0ZXh0Ym94XCJcbiAgICAgIGFyaWEtYXV0b2NvbXBsZXRlPVwibGlzdFwiXG4gICAgICBhcmlhLW93bnM9XCJlbW9qaS1tYXJ0LWxpc3RcIlxuICAgICAgYXJpYS1sYWJlbD1cIlNlYXJjaCBmb3IgYW4gZW1vamlcIlxuICAgICAgYXJpYS1kZXNjcmliZWRieT1cImVtb2ppLW1hcnQtc2VhcmNoLWRlc2NyaXB0aW9uXCJcbiAgICAgIEBrZXlkb3duLmxlZnQ9XCIoJGV2ZW50KSA9PiAkZW1pdCgnYXJyb3dMZWZ0JywgJGV2ZW50KVwiXG4gICAgICBAa2V5ZG93bi5yaWdodD1cIigpID0+ICRlbWl0KCdhcnJvd1JpZ2h0JylcIlxuICAgICAgQGtleWRvd24uZG93bj1cIigpID0+ICRlbWl0KCdhcnJvd0Rvd24nKVwiXG4gICAgICBAa2V5ZG93bi51cD1cIigkZXZlbnQpID0+ICRlbWl0KCdhcnJvd1VwJywgJGV2ZW50KVwiXG4gICAgICBAa2V5ZG93bi5lbnRlcj1cIigpID0+ICRlbWl0KCdlbnRlcicpXCJcbiAgICAgIHYtbW9kZWw9XCJ2YWx1ZVwiXG4gICAgLz5cbiAgICA8c3BhbiBjbGFzcz1cImhpZGRlblwiIGlkPVwiZW1vamktcGlja2VyLXNlYXJjaC1kZXNjcmlwdGlvblwiXG4gICAgICA+VXNlIHRoZSBsZWZ0LCByaWdodCwgdXAgYW5kIGRvd24gYXJyb3cga2V5cyB0byBuYXZpZ2F0ZSB0aGUgZW1vamkgc2VhcmNoXG4gICAgICByZXN1bHRzLjwvc3BhblxuICAgID5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgaTE4bjoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBhdXRvRm9jdXM6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9LFxuICAgIG9uU2VhcmNoOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgb25BcnJvd0xlZnQ6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAgb25BcnJvd1JpZ2h0OiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB9LFxuICAgIG9uQXJyb3dEb3duOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB9LFxuICAgIG9uQXJyb3dVcDoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgfSxcbiAgICBvbkVudGVyOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB9LFxuICB9LFxuICBlbWl0czogWydzZWFyY2gnLCAnZW50ZXInLCAnYXJyb3dVcCcsICdhcnJvd0Rvd24nLCAnYXJyb3dSaWdodCcsICdhcnJvd0xlZnQnXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6ICcnLFxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBlbW9qaUluZGV4KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YVxuICAgIH0sXG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgdmFsdWUoKSB7XG4gICAgICB0aGlzLiRlbWl0KCdzZWFyY2gnLCB0aGlzLnZhbHVlKVxuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjbGVhcigpIHtcbiAgICAgIHRoaXMudmFsdWUgPSAnJ1xuICAgIH0sXG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgbGV0ICRpbnB1dCA9IHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcblxuICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xuICAgICAgJGlucHV0LmZvY3VzKClcbiAgICB9XG4gIH0sXG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuPGRpdiA6Y2xhc3M9XCJ7ICdlbW9qaS1tYXJ0LXNraW4tc3dhdGNoZXMnOiB0cnVlLCAnZW1vamktbWFydC1za2luLXN3YXRjaGVzLW9wZW5lZCc6IG9wZW5lZCB9XCI+XG4gIDxzcGFuIHYtZm9yPVwic2tpblRvbmUgaW4gNlwiIDprZXk9XCJza2luVG9uZVwiIDpjbGFzcz1cInsgJ2Vtb2ppLW1hcnQtc2tpbi1zd2F0Y2gnOiB0cnVlLCAnZW1vamktbWFydC1za2luLXN3YXRjaC1zZWxlY3RlZCc6IHNraW4gPT0gc2tpblRvbmUgfVwiPlxuICAgIDxzcGFuIDpjbGFzcz1cIidlbW9qaS1tYXJ0LXNraW4gZW1vamktbWFydC1za2luLXRvbmUtJyArIHNraW5Ub25lXCIgQGNsaWNrPVwib25DbGljayhza2luVG9uZSlcIj48L3NwYW4+XG4gIDwvc3Bhbj5cbjwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgc2tpbjoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gIH0sXG4gIGVtaXRzOiBbJ2NoYW5nZSddLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvcGVuZWQ6IGZhbHNlXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25DbGljayhza2luVG9uZSkge1xuICAgICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICAgIGlmIChza2luVG9uZSAhPSB0aGlzLnNraW4pIHtcbiAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBza2luVG9uZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLm9wZW5lZCA9ICF0aGlzLm9wZW5lZFxuICAgIH1cbiAgfVxufVxuXG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfdm0udmlldy5jYW5SZW5kZXJcbiAgICA/IF9jKFxuICAgICAgICBfdm0udGFnLFxuICAgICAgICB7XG4gICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtZW1vamlcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdGl0bGU6IF92bS52aWV3LnRpdGxlLFxuICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IF92bS52aWV3LmFyaWFMYWJlbCxcbiAgICAgICAgICAgIFwiZGF0YS10aXRsZVwiOiBfdm0udGl0bGUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgbW91c2VlbnRlcjogX3ZtLm9uTW91c2VFbnRlcixcbiAgICAgICAgICAgIG1vdXNlbGVhdmU6IF92bS5vbk1vdXNlTGVhdmUsXG4gICAgICAgICAgICBjbGljazogX3ZtLm9uQ2xpY2ssXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCB7IGNsYXNzOiBfdm0udmlldy5jc3NDbGFzcywgc3R5bGU6IF92bS52aWV3LmNzc1N0eWxlIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnZpZXcuY29udGVudCkpLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdXG4gICAgICApXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcbiAgICBcInNlY3Rpb25cIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQgZW1vamktbWFydC1zdGF0aWNcIiwgc3R5bGU6IF92bS5jdXN0b21TdHlsZXMgfSxcbiAgICBbXG4gICAgICBfdm0uc2hvd0NhdGVnb3JpZXNcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtYmFyIGVtb2ppLW1hcnQtYmFyLWFuY2hvcnNcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImFuY2hvcnNcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgIGkxOG46IF92bS5tZXJnZWRJMThuLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IF92bS5jb2xvcixcbiAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IF92bS52aWV3LmFsbENhdGVnb3JpZXMsXG4gICAgICAgICAgICAgICAgICBcImFjdGl2ZS1jYXRlZ29yeVwiOiBfdm0udmlldy5hY3RpdmVDYXRlZ29yeSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub25BbmNob3JDbGljayB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fdChcbiAgICAgICAgXCJzZWFyY2hUZW1wbGF0ZVwiLFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIF92bS5zaG93U2VhcmNoXG4gICAgICAgICAgICAgID8gX2MoXCJzZWFyY2hcIiwge1xuICAgICAgICAgICAgICAgICAgcmVmOiBcInNlYXJjaFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGkxOG46IF92bS5tZXJnZWRJMThuLFxuICAgICAgICAgICAgICAgICAgICBcImF1dG8tZm9jdXNcIjogX3ZtLmF1dG9Gb2N1cyxcbiAgICAgICAgICAgICAgICAgICAgXCJvbi1zZWFyY2hcIjogX3ZtLm9uU2VhcmNoLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaDogX3ZtLm9uU2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICBhcnJvd0xlZnQ6IF92bS5vbkFycm93TGVmdCxcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dSaWdodDogX3ZtLm9uQXJyb3dSaWdodCxcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dEb3duOiBfdm0ub25BcnJvd0Rvd24sXG4gICAgICAgICAgICAgICAgICAgIGFycm93VXA6IF92bS5vbkFycm93VXAsXG4gICAgICAgICAgICAgICAgICAgIGVudGVyOiBfdm0ub25FbnRlcixcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0OiBfdm0ub25UZXh0U2VsZWN0LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgIGkxOG46IF92bS5pMThuLFxuICAgICAgICAgIGF1dG9Gb2N1czogX3ZtLmF1dG9Gb2N1cyxcbiAgICAgICAgICBvblNlYXJjaDogX3ZtLm9uU2VhcmNoLFxuICAgICAgICB9XG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgcmVmOiBcInNjcm9sbFwiLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtc2Nyb2xsXCIsXG4gICAgICAgICAgYXR0cnM6IHsgcm9sZTogXCJ0YWJwYW5lbFwiIH0sXG4gICAgICAgICAgb246IHsgc2Nyb2xsOiBfdm0ub25TY3JvbGwgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiBcInNjcm9sbENvbnRlbnRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBpZDogXCJlbW9qaS1tYXJ0LWxpc3RcIixcbiAgICAgICAgICAgICAgICByb2xlOiBcImxpc3Rib3hcIixcbiAgICAgICAgICAgICAgICBcImFyaWEtZXhwYW5kZWRcIjogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX3QoXCJjdXN0b21DYXRlZ29yeVwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS52aWV3LmZpbHRlcmVkQ2F0ZWdvcmllcywgZnVuY3Rpb24gKGNhdGVnb3J5LCBpZHgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJjYXRlZ29yeVwiLCB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmluZmluaXRlU2Nyb2xsIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeSA9PSBfdm0udmlldy5hY3RpdmVDYXRlZ29yeSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzU2VhcmNoaW5nLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICBcImluZmluaXRlU2Nyb2xsIHx8IGNhdGVnb3J5ID09IHZpZXcuYWN0aXZlQ2F0ZWdvcnkgfHwgaXNTZWFyY2hpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBrZXk6IGNhdGVnb3J5LmlkLFxuICAgICAgICAgICAgICAgICAgcmVmOiBcImNhdGVnb3JpZXNfXCIgKyBpZHgsXG4gICAgICAgICAgICAgICAgICByZWZJbkZvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBpMThuOiBfdm0ubWVyZ2VkSTE4bixcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGNhdGVnb3J5LmlkLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBjYXRlZ29yeS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBlbW9qaXM6IGNhdGVnb3J5LmVtb2ppcyxcbiAgICAgICAgICAgICAgICAgICAgXCJlbW9qaS1wcm9wc1wiOiBfdm0uZW1vamlQcm9wcyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgICksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl90KFxuICAgICAgICBcInByZXZpZXdUZW1wbGF0ZVwiLFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIF92bS5zaG93UHJldmlld1xuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1iYXIgZW1vamktbWFydC1iYXItcHJldmlld1wiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicHJldmlld1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF92bS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtb2ppOiBfdm0udmlldy5wcmV2aWV3RW1vamksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImlkbGUtZW1vamlcIjogX3ZtLmlkbGVFbW9qaSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvdy1za2luLXRvbmVzXCI6IF92bS5zaG93U2tpblRvbmVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlbW9qaS1wcm9wc1wiOiBfdm0uZW1vamlQcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2tpbi1wcm9wc1wiOiBfdm0uc2tpblByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvbi1za2luLWNoYW5nZVwiOiBfdm0ub25Ta2luQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgdGl0bGU6IF92bS50aXRsZSxcbiAgICAgICAgICBlbW9qaTogX3ZtLnZpZXcucHJldmlld0Vtb2ppLFxuICAgICAgICAgIGlkbGVFbW9qaTogX3ZtLmlkbGVFbW9qaSxcbiAgICAgICAgICBzaG93U2tpblRvbmVzOiBfdm0uc2hvd1NraW5Ub25lcyxcbiAgICAgICAgICBlbW9qaVByb3BzOiBfdm0uZW1vamlQcm9wcyxcbiAgICAgICAgICBza2luUHJvcHM6IF92bS5za2luUHJvcHMsXG4gICAgICAgICAgb25Ta2luQ2hhbmdlOiBfdm0ub25Ta2luQ2hhbmdlLFxuICAgICAgICB9XG4gICAgICApLFxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LWFuY2hvcnNcIiwgYXR0cnM6IHsgcm9sZTogXCJ0YWJsaXN0XCIgfSB9LFxuICAgIF92bS5fbChfdm0uY2F0ZWdvcmllcywgZnVuY3Rpb24gKGNhdGVnb3J5KSB7XG4gICAgICByZXR1cm4gX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IGNhdGVnb3J5LmlkLFxuICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICBcImVtb2ppLW1hcnQtYW5jaG9yXCI6IHRydWUsXG4gICAgICAgICAgICBcImVtb2ppLW1hcnQtYW5jaG9yLXNlbGVjdGVkXCI6IGNhdGVnb3J5LmlkID09IF92bS5hY3RpdmVDYXRlZ29yeS5pZCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBjb2xvcjogY2F0ZWdvcnkuaWQgPT0gX3ZtLmFjdGl2ZUNhdGVnb3J5LmlkID8gX3ZtLmNvbG9yIDogXCJcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICByb2xlOiBcInRhYlwiLFxuICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBjYXRlZ29yeS5uYW1lLFxuICAgICAgICAgICAgXCJhcmlhLXNlbGVjdGVkXCI6IGNhdGVnb3J5LmlkID09IF92bS5hY3RpdmVDYXRlZ29yeS5pZCxcbiAgICAgICAgICAgIFwiZGF0YS10aXRsZVwiOiBfdm0uaTE4bi5jYXRlZ29yaWVzW2NhdGVnb3J5LmlkXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiY2xpY2tcIiwgY2F0ZWdvcnkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0sXG4gICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uc3Znc1tjYXRlZ29yeS5pZF0pIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1hbmNob3ItYmFyXCIsXG4gICAgICAgICAgICBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6IF92bS5jb2xvciB9LFxuICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICBdXG4gICAgICApXG4gICAgfSksXG4gICAgMFxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF92bS5pc1Zpc2libGUgJiYgKF92bS5pc1NlYXJjaCB8fCBfdm0uaGFzUmVzdWx0cylcbiAgICA/IF9jKFxuICAgICAgICBcInNlY3Rpb25cIixcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICBcImVtb2ppLW1hcnQtY2F0ZWdvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZW1vamktbWFydC1uby1yZXN1bHRzXCI6ICFfdm0uaGFzUmVzdWx0cyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1sYWJlbFwiOiBfdm0uaTE4bi5jYXRlZ29yaWVzW192bS5pZF0gfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1jYXRlZ29yeS1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LWNhdGVnb3J5LWxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pMThuLmNhdGVnb3JpZXNbX3ZtLmlkXSkpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX2woX3ZtLmVtb2ppT2JqZWN0cywgZnVuY3Rpb24gKHsgZW1vamlPYmplY3QsIGVtb2ppVmlldyB9KSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBlbW9qaVZpZXcuY2FuUmVuZGVyXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogZW1vamlPYmplY3QuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1lbW9qaVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uYWN0aXZlQ2xhc3MoZW1vamlPYmplY3QpLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogZW1vamlWaWV3LmFyaWFMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU6IFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLXBvc2luc2V0XCI6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLXNldHNpemVcIjogXCIxODEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXRpdGxlXCI6IGVtb2ppT2JqZWN0LnNob3J0X25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogZW1vamlWaWV3LnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlZW50ZXI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVtb2ppUHJvcHMub25FbnRlcihlbW9qaVZpZXcuZ2V0RW1vamkoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZWxlYXZlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lbW9qaVByb3BzLm9uTGVhdmUoZW1vamlWaWV3LmdldEVtb2ppKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVtb2ppUHJvcHMub25DbGljayhlbW9qaVZpZXcuZ2V0RW1vamkoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBlbW9qaVZpZXcuY3NzQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBlbW9qaVZpZXcuY3NzU3R5bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoZW1vamlWaWV3LmNvbnRlbnQpKV1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICFfdm0uaGFzUmVzdWx0c1xuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZW1vamlcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgIGVtb2ppOiBcInNsZXV0aF9vcl9zcHlcIixcbiAgICAgICAgICAgICAgICAgICAgICBuYXRpdmU6IF92bS5lbW9qaVByb3BzLm5hdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgICBza2luOiBfdm0uZW1vamlQcm9wcy5za2luLFxuICAgICAgICAgICAgICAgICAgICAgIHNldDogX3ZtLmVtb2ppUHJvcHMuc2V0LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LW5vLXJlc3VsdHMtbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmkxOG4ubm90Zm91bmQpKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3XCIgfSxcbiAgICBbXG4gICAgICBfdm0uZW1vamlcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vamlcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJlbW9qaVwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgZW1vamk6IF92bS5lbW9qaSxcbiAgICAgICAgICAgICAgICAgICAgbmF0aXZlOiBfdm0uZW1vamlQcm9wcy5uYXRpdmUsXG4gICAgICAgICAgICAgICAgICAgIHNraW46IF92bS5lbW9qaVByb3BzLnNraW4sXG4gICAgICAgICAgICAgICAgICAgIHNldDogX3ZtLmVtb2ppUHJvcHMuc2V0LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlldy1kYXRhXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlldy1uYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVtb2ppLm5hbWUpKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctc2hvcnRuYW1lc1wiIH0sXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5lbW9qaVNob3J0TmFtZXMsIGZ1bmN0aW9uIChzaG9ydE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IHNob3J0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctc2hvcnRuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCI6XCIgKyBfdm0uX3Moc2hvcnROYW1lKSArIFwiOlwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vdGljb25zXCIgfSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmVtb2ppRW1vdGljb25zLCBmdW5jdGlvbiAoZW1vdGljb24pIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IGVtb3RpY29uLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlldy1lbW90aWNvblwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhlbW90aWNvbikpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF1cbiAgICAgICAgOiBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vamlcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJlbW9qaVwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgZW1vamk6IF92bS5pZGxlRW1vamksXG4gICAgICAgICAgICAgICAgICAgIG5hdGl2ZTogX3ZtLmVtb2ppUHJvcHMubmF0aXZlLFxuICAgICAgICAgICAgICAgICAgICBza2luOiBfdm0uZW1vamlQcm9wcy5za2luLFxuICAgICAgICAgICAgICAgICAgICBzZXQ6IF92bS5lbW9qaVByb3BzLnNldCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctZGF0YVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC10aXRsZS1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5zaG93U2tpblRvbmVzXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctc2tpbnNcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNraW5zXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBza2luOiBfdm0uc2tpblByb3BzLnNraW4gfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25Ta2luQ2hhbmdlKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBdLFxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1zZWFyY2hcIiB9LCBbXG4gICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgdmFsdWU6IF92bS52YWx1ZSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInZhbHVlXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBfdm0uaTE4bi5zZWFyY2gsXG4gICAgICAgIHJvbGU6IFwidGV4dGJveFwiLFxuICAgICAgICBcImFyaWEtYXV0b2NvbXBsZXRlXCI6IFwibGlzdFwiLFxuICAgICAgICBcImFyaWEtb3duc1wiOiBcImVtb2ppLW1hcnQtbGlzdFwiLFxuICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJTZWFyY2ggZm9yIGFuIGVtb2ppXCIsXG4gICAgICAgIFwiYXJpYS1kZXNjcmliZWRieVwiOiBcImVtb2ppLW1hcnQtc2VhcmNoLWRlc2NyaXB0aW9uXCIsXG4gICAgICB9LFxuICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS52YWx1ZSB9LFxuICAgICAgb246IHtcbiAgICAgICAga2V5ZG93bjogW1xuICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgISRldmVudC50eXBlLmluZGV4T2YoXCJrZXlcIikgJiZcbiAgICAgICAgICAgICAgX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImxlZnRcIiwgMzcsICRldmVudC5rZXksIFtcbiAgICAgICAgICAgICAgICBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcIkFycm93TGVmdFwiLFxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgaWYgKFwiYnV0dG9uXCIgaW4gJGV2ZW50ICYmICRldmVudC5idXR0b24gIT09IDApIHJldHVybiBudWxsXG4gICAgICAgICAgICByZXR1cm4gKCgkZXZlbnQpID0+IF92bS4kZW1pdChcImFycm93TGVmdFwiLCAkZXZlbnQpKS5hcHBseShcbiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgYXJndW1lbnRzXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICEkZXZlbnQudHlwZS5pbmRleE9mKFwia2V5XCIpICYmXG4gICAgICAgICAgICAgIF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJyaWdodFwiLCAzOSwgJGV2ZW50LmtleSwgW1xuICAgICAgICAgICAgICAgIFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcIkFycm93UmlnaHRcIixcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIGlmIChcImJ1dHRvblwiIGluICRldmVudCAmJiAkZXZlbnQuYnV0dG9uICE9PSAyKSByZXR1cm4gbnVsbFxuICAgICAgICAgICAgcmV0dXJuICgoKSA9PiBfdm0uJGVtaXQoXCJhcnJvd1JpZ2h0XCIpKS5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICEkZXZlbnQudHlwZS5pbmRleE9mKFwia2V5XCIpICYmXG4gICAgICAgICAgICAgIF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJkb3duXCIsIDQwLCAkZXZlbnQua2V5LCBbXG4gICAgICAgICAgICAgICAgXCJEb3duXCIsXG4gICAgICAgICAgICAgICAgXCJBcnJvd0Rvd25cIixcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIHJldHVybiAoKCkgPT4gX3ZtLiRlbWl0KFwiYXJyb3dEb3duXCIpKS5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICEkZXZlbnQudHlwZS5pbmRleE9mKFwia2V5XCIpICYmXG4gICAgICAgICAgICAgIF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJ1cFwiLCAzOCwgJGV2ZW50LmtleSwgW1wiVXBcIiwgXCJBcnJvd1VwXCJdKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgcmV0dXJuICgoJGV2ZW50KSA9PiBfdm0uJGVtaXQoXCJhcnJvd1VwXCIsICRldmVudCkpLmFwcGx5KFxuICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICBhcmd1bWVudHNcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgISRldmVudC50eXBlLmluZGV4T2YoXCJrZXlcIikgJiZcbiAgICAgICAgICAgICAgX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImVudGVyXCIsIDEzLCAkZXZlbnQua2V5LCBcIkVudGVyXCIpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICByZXR1cm4gKCgpID0+IF92bS4kZW1pdChcImVudGVyXCIpKS5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgIF92bS52YWx1ZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwic3BhblwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJoaWRkZW5cIixcbiAgICAgICAgYXR0cnM6IHsgaWQ6IFwiZW1vamktcGlja2VyLXNlYXJjaC1kZXNjcmlwdGlvblwiIH0sXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgXCJVc2UgdGhlIGxlZnQsIHJpZ2h0LCB1cCBhbmQgZG93biBhcnJvdyBrZXlzIHRvIG5hdmlnYXRlIHRoZSBlbW9qaSBzZWFyY2hcXG4gICAgcmVzdWx0cy5cIlxuICAgICAgICApLFxuICAgICAgXVxuICAgICksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgY2xhc3M6IHtcbiAgICAgICAgXCJlbW9qaS1tYXJ0LXNraW4tc3dhdGNoZXNcIjogdHJ1ZSxcbiAgICAgICAgXCJlbW9qaS1tYXJ0LXNraW4tc3dhdGNoZXMtb3BlbmVkXCI6IF92bS5vcGVuZWQsXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3ZtLl9sKDYsIGZ1bmN0aW9uIChza2luVG9uZSkge1xuICAgICAgcmV0dXJuIF9jKFxuICAgICAgICBcInNwYW5cIixcbiAgICAgICAge1xuICAgICAgICAgIGtleTogc2tpblRvbmUsXG4gICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgIFwiZW1vamktbWFydC1za2luLXN3YXRjaFwiOiB0cnVlLFxuICAgICAgICAgICAgXCJlbW9qaS1tYXJ0LXNraW4tc3dhdGNoLXNlbGVjdGVkXCI6IF92bS5za2luID09IHNraW5Ub25lLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgY2xhc3M6IFwiZW1vamktbWFydC1za2luIGVtb2ppLW1hcnQtc2tpbi10b25lLVwiICsgc2tpblRvbmUsXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25DbGljayhza2luVG9uZSlcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF1cbiAgICAgIClcbiAgICB9KSxcbiAgICAwXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEFuY2hvcnMgfSBmcm9tICcuL2FuY2hvcnMudnVlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXRlZ29yeSB9IGZyb20gJy4vY2F0ZWdvcnkudnVlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcmV2aWV3IH0gZnJvbSAnLi9wcmV2aWV3LnZ1ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VhcmNoIH0gZnJvbSAnLi9zZWFyY2gudnVlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTa2lucyB9IGZyb20gJy4vc2tpbnMudnVlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbW9qaSB9IGZyb20gJy4vRW1vamkudnVlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQaWNrZXIgfSBmcm9tICcuL1BpY2tlci52dWUnXG4iLCJjb25zdCBfU3RyaW5nID0gU3RyaW5nXG5cbmV4cG9ydCBkZWZhdWx0IF9TdHJpbmcuZnJvbUNvZGVQb2ludCB8fFxuICBmdW5jdGlvbiBzdHJpbmdGcm9tQ29kZVBvaW50KCkge1xuICAgIHZhciBNQVhfU0laRSA9IDB4NDAwMFxuICAgIHZhciBjb2RlVW5pdHMgPSBbXVxuICAgIHZhciBoaWdoU3Vycm9nYXRlXG4gICAgdmFyIGxvd1N1cnJvZ2F0ZVxuICAgIHZhciBpbmRleCA9IC0xXG4gICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICBpZiAoIWxlbmd0aCkge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAnJ1xuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICB2YXIgY29kZVBvaW50ID0gTnVtYmVyKGFyZ3VtZW50c1tpbmRleF0pXG4gICAgICBpZiAoXG4gICAgICAgICFpc0Zpbml0ZShjb2RlUG9pbnQpIHx8IC8vIGBOYU5gLCBgK0luZmluaXR5YCwgb3IgYC1JbmZpbml0eWBcbiAgICAgICAgY29kZVBvaW50IDwgMCB8fCAvLyBub3QgYSB2YWxpZCBVbmljb2RlIGNvZGUgcG9pbnRcbiAgICAgICAgY29kZVBvaW50ID4gMHgxMGZmZmYgfHwgLy8gbm90IGEgdmFsaWQgVW5pY29kZSBjb2RlIHBvaW50XG4gICAgICAgIE1hdGguZmxvb3IoY29kZVBvaW50KSAhPSBjb2RlUG9pbnQgLy8gbm90IGFuIGludGVnZXJcbiAgICAgICkge1xuICAgICAgICB0aHJvdyBSYW5nZUVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQ6ICcgKyBjb2RlUG9pbnQpXG4gICAgICB9XG4gICAgICBpZiAoY29kZVBvaW50IDw9IDB4ZmZmZikge1xuICAgICAgICAvLyBCTVAgY29kZSBwb2ludFxuICAgICAgICBjb2RlVW5pdHMucHVzaChjb2RlUG9pbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBBc3RyYWwgY29kZSBwb2ludDsgc3BsaXQgaW4gc3Vycm9nYXRlIGhhbHZlc1xuICAgICAgICAvLyBodHRwOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nI3N1cnJvZ2F0ZS1mb3JtdWxhZVxuICAgICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMFxuICAgICAgICBoaWdoU3Vycm9nYXRlID0gKGNvZGVQb2ludCA+PiAxMCkgKyAweGQ4MDBcbiAgICAgICAgbG93U3Vycm9nYXRlID0gKGNvZGVQb2ludCAlIDB4NDAwKSArIDB4ZGMwMFxuICAgICAgICBjb2RlVW5pdHMucHVzaChoaWdoU3Vycm9nYXRlLCBsb3dTdXJyb2dhdGUpXG4gICAgICB9XG4gICAgICBpZiAoaW5kZXggKyAxID09PSBsZW5ndGggfHwgY29kZVVuaXRzLmxlbmd0aCA+IE1BWF9TSVpFKSB7XG4gICAgICAgIHJlc3VsdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIGNvZGVVbml0cylcbiAgICAgICAgY29kZVVuaXRzLmxlbmd0aCA9IDBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG4iLCJjb25zdCBTVkdzID0ge1xuICBhY3Rpdml0eTogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTEyIDBDNS4zNzMgMCAwIDUuMzcyIDAgMTJjMCA2LjYyNyA1LjM3MyAxMiAxMiAxMiA2LjYyOCAwIDEyLTUuMzczIDEyLTEyIDAtNi42MjgtNS4zNzItMTItMTItMTJtOS45NDkgMTFIMTcuMDVjLjIyNC0yLjUyNyAxLjIzMi00Ljc3MyAxLjk2OC02LjExM0E5Ljk2NiA5Ljk2NiAwIDAgMSAyMS45NDkgMTFNMTMgMTFWMi4wNTFhOS45NDUgOS45NDUgMCAwIDEgNC40MzIgMS41NjRjLS44NTggMS40OTEtMi4xNTYgNC4yMi0yLjM5MiA3LjM4NUgxM3ptLTIgMEg4Ljk2MWMtLjIzOC0zLjE2NS0xLjUzNi01Ljg5NC0yLjM5My03LjM4NUE5Ljk1IDkuOTUgMCAwIDEgMTEgMi4wNTFWMTF6bTAgMnY4Ljk0OWE5LjkzNyA5LjkzNyAwIDAgMS00LjQzMi0xLjU2NGMuODU3LTEuNDkyIDIuMTU1LTQuMjIxIDIuMzkzLTcuMzg1SDExem00LjA0IDBjLjIzNiAzLjE2NCAxLjUzNCA1Ljg5MyAyLjM5MiA3LjM4NUE5LjkyIDkuOTIgMCAwIDEgMTMgMjEuOTQ5VjEzaDIuMDR6TTQuOTgyIDQuODg3QzUuNzE4IDYuMjI3IDYuNzI2IDguNDczIDYuOTUxIDExaC00LjlhOS45NzcgOS45NzcgMCAwIDEgMi45MzEtNi4xMTNNMi4wNTEgMTNoNC45Yy0uMjI2IDIuNTI3LTEuMjMzIDQuNzcxLTEuOTY5IDYuMTEzQTkuOTcyIDkuOTcyIDAgMCAxIDIuMDUxIDEzbTE2Ljk2NyA2LjExM2MtLjczNS0xLjM0Mi0xLjc0NC0zLjU4Ni0xLjk2OC02LjExM2g0Ljg5OWE5Ljk2MSA5Ljk2MSAwIDAgMS0yLjkzMSA2LjExM1wiLz48L3N2Zz5gLFxuXG4gIGN1c3RvbTogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMi4wMDAwMDAsIDEuMDAwMDAwKVwiPjxyZWN0IGlkPVwiUmVjdGFuZ2xlXCIgeD1cIjhcIiB5PVwiMFwiIHdpZHRoPVwiM1wiIGhlaWdodD1cIjIxXCIgcng9XCIxLjVcIj48L3JlY3Q+PHJlY3QgaWQ9XCJSZWN0YW5nbGVcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOS44NDMsIDEwLjU0OSkgcm90YXRlKDYwKSB0cmFuc2xhdGUoLTkuODQzLCAtMTAuNTQ5KSBcIiB4PVwiOC4zNDNcIiB5PVwiMC4wNDlcIiB3aWR0aD1cIjNcIiBoZWlnaHQ9XCIyMVwiIHJ4PVwiMS41XCI+PC9yZWN0PjxyZWN0IGlkPVwiUmVjdGFuZ2xlXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkuODQzLCAxMC41NDkpIHJvdGF0ZSgtNjApIHRyYW5zbGF0ZSgtOS44NDMsIC0xMC41NDkpIFwiIHg9XCI4LjM0M1wiIHk9XCIwLjA0OVwiIHdpZHRoPVwiM1wiIGhlaWdodD1cIjIxXCIgcng9XCIxLjVcIj48L3JlY3Q+PC9nPjwvc3ZnPmAsXG5cbiAgZmxhZ3M6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0wIDBsNi4wODQgMjRIOEwxLjkxNiAwek0yMSA1aC00bC0xLTRINGwzIDEyaDNsMSA0aDEzTDIxIDV6TTYuNTYzIDNoNy44NzVsMiA4SDguNTYzbC0yLTh6bTguODMyIDEwbC0yLjg1NiAxLjkwNEwxMi4wNjMgMTNoMy4zMzJ6TTE5IDEzbC0xLjUtNmgxLjkzOGwyIDhIMTZsMy0yelwiLz48L3N2Zz5gLFxuXG4gIGZvb2RzOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTcgNC45NzhjLTEuODM4IDAtMi44NzYuMzk2LTMuNjguOTM0LjUxMy0xLjE3MiAxLjc2OC0yLjkzNCA0LjY4LTIuOTM0YTEgMSAwIDAgMCAwLTJjLTIuOTIxIDAtNC42MjkgMS4zNjUtNS41NDcgMi41MTItLjA2NC4wNzgtLjExOS4xNjItLjE4LjI0NEMxMS43MyAxLjgzOCAxMC43OTguMDIzIDkuMjA3LjAyMyA4LjU3OS4wMjIgNy44NS4zMDYgNyAuOTc4IDUuMDI3IDIuNTQgNS4zMjkgMy45MDIgNi40OTIgNC45OTkgMy42MDkgNS4yMjIgMCA3LjM1MiAwIDEyLjk2OWMwIDQuNTgyIDQuOTYxIDExLjAwOSA5IDExLjAwOSAxLjk3NSAwIDIuMzcxLS40ODYgMy0xIC42MjkuNTE0IDEuMDI1IDEgMyAxIDQuMDM5IDAgOS02LjQxOCA5LTExIDAtNS45NTMtNC4wNTUtOC03LThNOC4yNDIgMi41NDZjLjY0MS0uNTA4Ljk0My0uNTIzLjk2NS0uNTIzLjQyNi4xNjkuOTc1IDEuNDA1IDEuMzU3IDMuMDU1LTEuNTI3LS42MjktMi43NDEtMS4zNTItMi45OC0xLjg0Ni4wNTktLjExMi4yNDEtLjM1Ni42NTgtLjY4Nk0xNSAyMS45NzhjLTEuMDggMC0xLjIxLS4xMDktMS41NTktLjQwMmwtLjE3Ni0uMTQ2Yy0uMzY3LS4zMDItLjgxNi0uNDUyLTEuMjY2LS40NTJzLS44OTguMTUtMS4yNjYuNDUybC0uMTc2LjE0NmMtLjM0Ny4yOTItLjQ3Ny40MDItMS41NTcuNDAyLTIuODEzIDAtNy01LjM4OS03LTkuMDA5IDAtNS44MjMgNC40ODgtNS45OTEgNS01Ljk5MSAxLjkzOSAwIDIuNDg0LjQ3MSAzLjM4NyAxLjI1MWwuMzIzLjI3NmExLjk5NSAxLjk5NSAwIDAgMCAyLjU4IDBsLjMyMy0uMjc2Yy45MDItLjc4IDEuNDQ3LTEuMjUxIDMuMzg3LTEuMjUxLjUxMiAwIDUgLjE2OCA1IDYgMCAzLjYxNy00LjE4NyA5LTcgOVwiLz48L3N2Zz5gLFxuXG4gIG5hdHVyZTogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTE1LjUgOGExLjUgMS41IDAgMSAwIC4wMDEgMy4wMDFBMS41IDEuNSAwIDAgMCAxNS41IDhNOC41IDhhMS41IDEuNSAwIDEgMCAuMDAxIDMuMDAxQTEuNSAxLjUgMCAwIDAgOC41IDhcIi8+PHBhdGggZD1cIk0xOC45MzMgMGgtLjAyN2MtLjk3IDAtMi4xMzguNzg3LTMuMDE4IDEuNDk3LTEuMjc0LS4zNzQtMi42MTItLjUxLTMuODg3LS41MS0xLjI4NSAwLTIuNjE2LjEzMy0zLjg3NC41MTdDNy4yNDUuNzkgNi4wNjkgMCA1LjA5MyAwaC0uMDI3QzMuMzUyIDAgLjA3IDIuNjcuMDAyIDcuMDI2Yy0uMDM5IDIuNDc5LjI3NiA0LjIzOCAxLjA0IDUuMDEzLjI1NC4yNTguODgyLjY3NyAxLjI5NS44ODIuMTkxIDMuMTc3LjkyMiA1LjIzOCAyLjUzNiA2LjM4Ljg5Ny42MzcgMi4xODcuOTQ5IDMuMiAxLjEwMkM4LjA0IDIwLjYgOCAyMC43OTUgOCAyMWMwIDEuNzczIDIuMzUgMyA0IDMgMS42NDggMCA0LTEuMjI3IDQtMyAwLS4yMDEtLjAzOC0uMzkzLS4wNzItLjU4NiAyLjU3My0uMzg1IDUuNDM1LTEuODc3IDUuOTI1LTcuNTg3LjM5Ni0uMjIuODg3LS41NjggMS4xMDQtLjc4OC43NjMtLjc3NCAxLjA3OS0yLjUzNCAxLjA0LTUuMDEzQzIzLjkyOSAyLjY3IDIwLjY0NiAwIDE4LjkzMyAwTTMuMjIzIDkuMTM1Yy0uMjM3LjI4MS0uODM3IDEuMTU1LS44ODQgMS4yMzgtLjE1LS40MS0uMzY4LTEuMzQ5LS4zMzctMy4yOTEuMDUxLTMuMjgxIDIuNDc4LTQuOTcyIDMuMDkxLTUuMDMxLjI1Ni4wMTUuNzMxLjI3IDEuMjY1LjY0Ni0xLjExIDEuMTcxLTIuMjc1IDIuOTE1LTIuMzUyIDUuMTI1LS4xMzMuNTQ2LS4zOTguODU4LS43ODMgMS4zMTNNMTIgMjJjLS45MDEgMC0xLjk1NC0uNjkzLTItMSAwLS42NTQuNDc1LTEuMjM2IDEtMS42MDJWMjBhMSAxIDAgMSAwIDIgMHYtLjYwMmMuNTI0LjM2NSAxIC45NDcgMSAxLjYwMi0uMDQ2LjMwNy0xLjA5OSAxLTIgMW0zLTMuNDh2LjAyYTQuNzUyIDQuNzUyIDAgMCAwLTEuMjYyLTEuMDJjMS4wOTItLjUxNiAyLjIzOS0xLjMzNCAyLjIzOS0yLjIxNyAwLTEuODQyLTEuNzgxLTIuMTk1LTMuOTc3LTIuMTk1LTIuMTk2IDAtMy45NzguMzU0LTMuOTc4IDIuMTk1IDAgLjg4MyAxLjE0OCAxLjcwMSAyLjIzOCAyLjIxN0E0LjggNC44IDAgMCAwIDkgMTguNTM5di0uMDI1Yy0xLS4wNzYtMi4xODItLjI4MS0yLjk3My0uODQyLTEuMzAxLS45Mi0xLjgzOC0zLjA0NS0xLjg1My02LjQ3OGwuMDIzLS4wNDFjLjQ5Ni0uODI2IDEuNDktMS40NSAxLjgwNC0zLjEwMiAwLTIuMDQ3IDEuMzU3LTMuNjMxIDIuMzYyLTQuNTIyQzkuMzcgMy4xNzggMTAuNTU1IDMgMTEuOTQ4IDNjMS40NDcgMCAyLjY4NS4xOTIgMy43MzMuNTcgMSAuOSAyLjMxNiAyLjQ2NSAyLjMxNiA0LjQ4LjMxMyAxLjY1MSAxLjMwNyAyLjI3NSAxLjgwMyAzLjEwMi4wMzUuMDU4LjA2OC4xMTcuMTAyLjE3OC0uMDU5IDUuOTY3LTEuOTQ5IDcuMDEtNC45MDIgNy4xOW02LjYyOC04LjIwMmMtLjAzNy0uMDY1LS4wNzQtLjEzLS4xMTMtLjE5NWE3LjU4NyA3LjU4NyAwIDAgMC0uNzM5LS45ODdjLS4zODUtLjQ1NS0uNjQ4LS43NjgtLjc4Mi0xLjMxMy0uMDc2LTIuMjA5LTEuMjQxLTMuOTU0LTIuMzUzLTUuMTI0LjUzMS0uMzc2IDEuMDA0LS42MyAxLjI2MS0uNjQ3LjYzNi4wNzEgMy4wNDQgMS43NjQgMy4wOTYgNS4wMzEuMDI3IDEuODEtLjM0NyAzLjIxOC0uMzcgMy4yMzVcIi8+PC9zdmc+YCxcblxuICBvYmplY3RzOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTIgMGE5IDkgMCAwIDAtNSAxNi40ODJWMjFzMi4wMzUgMyA1IDMgNS0zIDUtM3YtNC41MThBOSA5IDAgMCAwIDEyIDB6bTAgMmMzLjg2IDAgNyAzLjE0MSA3IDdzLTMuMTQgNy03IDctNy0zLjE0MS03LTcgMy4xNC03IDctN3pNOSAxNy40NzdjLjk0LjMzMiAxLjk0Ni41MjMgMyAuNTIzczIuMDYtLjE5IDMtLjUyM3YuODM0Yy0uOTEuNDM2LTEuOTI1LjY4OS0zIC42ODlhNi45MjQgNi45MjQgMCAwIDEtMy0uNjl2LS44MzN6bS4yMzYgMy4wN0E4Ljg1NCA4Ljg1NCAwIDAgMCAxMiAyMWMuOTY1IDAgMS44ODgtLjE2NyAyLjc1OC0uNDUxQzE0LjE1NSAyMS4xNzMgMTMuMTUzIDIyIDEyIDIyYy0xLjEwMiAwLTIuMTE3LS43ODktMi43NjQtMS40NTN6XCIvPjxwYXRoIGQ9XCJNMTQuNzQ1IDEyLjQ0OWgtLjAwNGMtLjg1Mi0uMDI0LTEuMTg4LS44NTgtMS41NzctMS44MjQtLjQyMS0xLjA2MS0uNzAzLTEuNTYxLTEuMTgyLTEuNTY2aC0uMDA5Yy0uNDgxIDAtLjc4My40OTctMS4yMzUgMS41MzctLjQzNi45ODItLjgwMSAxLjgxMS0xLjYzNiAxLjc5MWwtLjI3Ni0uMDQzYy0uNTY1LS4xNzEtLjg1My0uNjkxLTEuMjg0LTEuNzk0LS4xMjUtLjMxMy0uMjAyLS42MzItLjI3LS45MTMtLjA1MS0uMjEzLS4xMjctLjUzLS4xOTUtLjYzNEM3LjA2NyA5LjAwNCA3LjAzOSA5IDYuOTkgOUExIDEgMCAwIDEgNyA3aC4wMWMxLjY2Mi4wMTcgMi4wMTUgMS4zNzMgMi4xOTggMi4xMzQuNDg2LS45ODEgMS4zMDQtMi4wNTggMi43OTctMi4wNzUgMS41MzEuMDE4IDIuMjggMS4xNTMgMi43MzEgMi4xNDFsLjAwMi0uMDA4QzE0Ljk0NCA4LjQyNCAxNS4zMjcgNyAxNi45NzkgN2guMDMyQTEgMSAwIDEgMSAxNyA5aC0uMDExYy0uMTQ5LjA3Ni0uMjU2LjQ3NC0uMzE5LjcwOWE2LjQ4NCA2LjQ4NCAwIDAgMS0uMzExLjk1MWMtLjQyOS45NzMtLjc5IDEuNzg5LTEuNjE0IDEuNzg5XCIvPjwvc3ZnPmAsXG5cbiAgc21pbGV5czogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTEyIDBDNS4zNzMgMCAwIDUuMzczIDAgMTJzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMG0wIDIyQzYuNDg2IDIyIDIgMTcuNTE0IDIgMTJTNi40ODYgMiAxMiAyczEwIDQuNDg2IDEwIDEwLTQuNDg2IDEwLTEwIDEwXCIvPjxwYXRoIGQ9XCJNOCA3YTIgMiAwIDEgMC0uMDAxIDMuOTk5QTIgMiAwIDAgMCA4IDdNMTYgN2EyIDIgMCAxIDAtLjAwMSAzLjk5OUEyIDIgMCAwIDAgMTYgN00xNS4yMzIgMTVjLS42OTMgMS4xOTUtMS44NyAyLTMuMzQ5IDItMS40NzcgMC0yLjY1NS0uODA1LTMuMzQ3LTJIMTVtMy0ySDZhNiA2IDAgMSAwIDEyIDBcIi8+PC9zdmc+YCxcblxuICBwZW9wbGU6IGA8c3ZnIHhtbG5zOnN2Zz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiMjRcIiB3aWR0aD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPiA8cGF0aCBpZD1cInBhdGgzODE0XCIgZD1cIm0gMy4zNTkxMDg5LDIxLjE3NzI2IGMgMC4xNzIwMzYsMC4wOTM4NSA0LjI2NTk5NCwyLjI5ODM3IDguODE0NDQ1MSwyLjI5ODM3IDQuOTI3NzY3LDAgOC42NzA4OTQsLTIuMjExODgzIDguODI3ODIsLTIuMzA2MDE5IDAuMTEzMDc5LC0wLjA2Nzg1IDAuMTgyMjY4LC0wLjE5MDA1MSAwLjE4MjI2NywtMC4zMjE5MjMgMCwtMy4wMzExOSAtMC45Mjk0OTQsLTUuODA0OTM2IC0yLjYxNzE5NiwtNy44MTA3MTIgLTEuMTgwNjAzLC0xLjQwMzEzNCAtMi42NjE5MTgsLTIuMzU5NTE2IC00LjI5NTY5OSwtMi43OTk3OTEgNC42OTkxMTgsLTIuMjM2MjU4IDMuMTAyMzA2LC05LjI4NjE3MTYyIC0yLjA5NzE5MSwtOS4yODYxNzE2MiAtNS4xOTk0OTc4LDAgLTYuNzk2MzEwMyw3LjA0OTkxMzYyIC0yLjA5NzE5Miw5LjI4NjE3MTYyIC0xLjYzMzc4MjEsMC40NDAyNzUgLTMuMTE1MDk3MSwxLjM5Njc5OCAtNC4yOTU2OTkxLDIuNzk5NzkxIC0xLjY4NzcwMywyLjAwNTc3NiAtMi42MTcxOTYsNC43Nzk1MjIgLTIuNjE3MTk2LDcuODEwNzEyIDEuMmUtNiwwLjEzNzM3OCAwLjA3NTAzOSwwLjI2Mzc4NSAwLjE5NTY0MSwwLjMyOTU3MiB6IE0gOC4wNDM5MzE5LDUuODMwODc4MyBDIDguMDQzOTMwOSwyLjE1MTUyMSAxMi40OTIxMDcsMC4zMDk1NTgxMSAxNS4wOTM0OTEsMi45MTA5NDExIDE3LjY5NDg3NCw1LjUxMjMyNDEgMTUuODUyOTExLDkuOTYwNTAwNiAxMi4xNzM1NTQsOS45NjA1IDkuODkzODk5MSw5Ljk1NzkxMzUgOC4wNDY1MTg2LDguMTEwNTMzMiA4LjA0MzkzMTksNS44MzA4NzgzIFogbSAtMS42ODg3ODIsNy42ODk0OTc3IGMgMS41MjQ1MzUsLTEuODExNDQ5IDMuNTkwNjYwMSwtMi44MDkwMzUgNS44MTg0MDQxLC0yLjgwOTAzNSAyLjIyNzc0NCwwIDQuMjkzODY5LDAuOTk3NTg2IDUuODE4NDA0LDIuODA5MDM1IDEuNTMzNjM5LDEuODIyNTcxIDIuMzk1OTMyLDQuMzM5ODU4IDIuNDM5MTUyLDcuMTA4MzAxIC0wLjgwMzM1MiwwLjQzNDg3NyAtNC4xNDE2MzYsMi4wOTYxMTIgLTguMjU3NTU2LDIuMDk2MTEyIC0zLjgwNjI5MjEsMCAtNy4zOTEwODYxLC0xLjY3MTA0MyAtOC4yNTczNjgxLC0yLjEwNDk4MSAwLjA0NTA1LC0yLjc2NTAxNyAwLjkwNjk2OCwtNS4yNzg3ODUgMi40Mzg5NjQsLTcuMDk5NDMyIHpcIiAvPiA8cGF0aCBpZD1cInBhdGgzODE2XCIgZD1cIk0gMTIuMTczODI4IDAuMzg4NjcxODggQyA5LjMxOTg1MTMgMC4zODg2NzE4NyA3LjM3NzA5ODggMi4zNjcyMjg1IDYuODY1MjM0NCA0LjYzMDg1OTQgQyA2LjQyMTg2MDggNi41OTE2MDE1IDcuMTE1MzU2MiA4Ljc2NzYxMTcgOC45NjQ4NDM4IDEwLjEyNjk1MyBDIDcuNjE0MTI0OSAxMC42NzczNzYgNi4zNTUwNTExIDExLjQ4MDk0NCA1LjM0OTYwOTQgMTIuNjc1NzgxIEMgMy41NjI5MzE3IDE0Ljc5OTE4NSAyLjYwMTU2MjUgMTcuNzAxNDc1IDIuNjAxNTYyNSAyMC44NDc2NTYgQyAyLjYwMTU2NTQgMjEuMTg5ODYxIDIuNzg5NDI3NiAyMS41MDgwMDIgMy4wODk4NDM4IDIxLjY3MTg3NSBDIDMuMzA0NDA2OCAyMS43ODg5MjUgNy40NDM2MjM5IDI0LjAzOTA2MiAxMi4xNzM4MjggMjQuMDM5MDYyIEMgMTcuMjY5OTE4IDI0LjAzOTA2MiAyMS4wODM1NjggMjEuNzc2Nzg2IDIxLjI5MTAxNiAyMS42NTIzNDQgQyAyMS41NzI4MSAyMS40ODMyNjYgMjEuNzQ2MDk3IDIxLjE3NjI4MiAyMS43NDYwOTQgMjAuODQ3NjU2IEMgMjEuNzQ2MDk0IDE3LjcwMTQ3NSAyMC43ODI3NyAxNC43OTkxODUgMTguOTk2MDk0IDEyLjY3NTc4MSBDIDE3Ljk5MDQ1NSAxMS40ODA1OTEgMTYuNzMzODE4IDEwLjY3NTM2MiAxNS4zODI4MTIgMTAuMTI1IEMgMTcuMjMxMTMyIDguNzY1NTU1MiAxNy45MjU2NzUgNi41OTEwNzAxIDE3LjQ4MjQyMiA0LjYzMDg1OTQgQyAxNi45NzA1NTcgMi4zNjcyMjg1IDE1LjAyNzgwNSAwLjM4ODY3MTg4IDEyLjE3MzgyOCAwLjM4ODY3MTg4IHogTSAxMi43OTI5NjkgMi4zMDA3ODEyIEMgMTMuNDY2MjUzIDIuNDE2MTc5MiAxNC4xMjUxMTMgMi43MzgzOTQxIDE0LjY5NTMxMiAzLjMwODU5MzggQyAxNS44MzU3MTIgNC40NDg5OTMxIDE1Ljk4NTYwNCA1Ljk0NzM1NDkgMTUuNDY4NzUgNy4xOTUzMTI1IEMgMTQuOTUxODk2IDguNDQzMjcwMSAxMy43ODY4MjggOS4zOTg0Mzc4IDEyLjE3MzgyOCA5LjM5ODQzNzUgQyAxMC4xOTc3MTkgOS4zOTYxOTU0IDguNjA3NzExIDcuODA2MTg3IDguNjA1NDY4OCA1LjgzMDA3ODEgQyA4LjYwNTQ2ODMgNC4yMTcwNzg1IDkuNTYwNjM2MiAzLjA1MjAxMDIgMTAuODA4NTk0IDIuNTM1MTU2MiBDIDExLjQzMjU3MyAyLjI3NjcyOTMgMTIuMTE5Njg1IDIuMTg1MzgzMyAxMi43OTI5NjkgMi4zMDA3ODEyIHogTSAxMi4xNzM4MjggMTEuMjczNDM4IEMgMTQuMjMzNjQ3IDExLjI3MzQzOCAxNi4xMzM2NzQgMTIuMTg1MDg0IDE3LjU2MjUgMTMuODgyODEyIEMgMTguOTMwNjkgMTUuNTA4NzY1IDE5LjY5ODM0NyAxNy43NzY5NjkgMTkuODA4NTk0IDIwLjI4MzIwMyBDIDE4LjgwNzM5NSAyMC44MDAyMzUgMTUuODg2MTU3IDIyLjE2MjEwOSAxMi4xNzM4MjggMjIuMTYyMTA5IEMgOC43NjE0NjMyIDIyLjE2MjEwOSA1LjYyNDU3NTQgMjAuNzg3MDY5IDQuNTM5MDYyNSAyMC4yNjU2MjUgQyA0LjY1MjU4OTYgMTcuNzY2NzE3IDUuNDIwMzMxNSAxNS41MDQ3OTEgNi43ODUxNTYyIDEzLjg4MjgxMiBDIDguMjEzOTgyNyAxMi4xODUwODQgMTAuMTE0MDEgMTEuMjczNDM4IDEyLjE3MzgyOCAxMS4yNzM0MzggeiBcIiAvPiA8L3N2Zz5gLFxuXG4gIHBsYWNlczogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTYuNSAxMkM1LjEyMiAxMiA0IDEzLjEyMSA0IDE0LjVTNS4xMjIgMTcgNi41IDE3IDkgMTUuODc5IDkgMTQuNSA3Ljg3OCAxMiA2LjUgMTJtMCAzYy0uMjc1IDAtLjUtLjIyNS0uNS0uNXMuMjI1LS41LjUtLjUuNS4yMjUuNS41LS4yMjUuNS0uNS41TTE3LjUgMTJjLTEuMzc4IDAtMi41IDEuMTIxLTIuNSAyLjVzMS4xMjIgMi41IDIuNSAyLjUgMi41LTEuMTIxIDIuNS0yLjUtMS4xMjItMi41LTIuNS0yLjVtMCAzYy0uMjc1IDAtLjUtLjIyNS0uNS0uNXMuMjI1LS41LjUtLjUuNS4yMjUuNS41LS4yMjUuNS0uNS41XCIvPjxwYXRoIGQ9XCJNMjIuNDgyIDkuNDk0bC0xLjAzOS0uMzQ2TDIxLjQgOWguNmMuNTUyIDAgMS0uNDM5IDEtLjk5MiAwLS4wMDYtLjAwMy0uMDA4LS4wMDMtLjAwOEgyM2MwLTEtLjg4OS0yLTEuOTg0LTJoLS42NDJsLS43MzEtMS43MTdDMTkuMjYyIDMuMDEyIDE4LjA5MSAyIDE2Ljc2NCAySDcuMjM2QzUuOTA5IDIgNC43MzggMy4wMTIgNC4zNTcgNC4yODNMMy42MjYgNmgtLjY0MkMxLjg4OSA2IDEgNyAxIDhoLjAwM1MxIDguMDAyIDEgOC4wMDhDMSA4LjU2MSAxLjQ0OCA5IDIgOWguNmwtLjA0My4xNDgtMS4wMzkuMzQ2YTIuMDAxIDIuMDAxIDAgMCAwLTEuMzU5IDIuMDk3bC43NTEgNy41MDhhMSAxIDAgMCAwIC45OTQuOTAxSDN2MWMwIDEuMTAzLjg5NiAyIDIgMmgyYzEuMTA0IDAgMi0uODk3IDItMnYtMWg2djFjMCAxLjEwMy44OTYgMiAyIDJoMmMxLjEwNCAwIDItLjg5NyAyLTJ2LTFoMS4wOTZhLjk5OS45OTkgMCAwIDAgLjk5NC0uOTAxbC43NTEtNy41MDhhMi4wMDEgMi4wMDEgMCAwIDAtMS4zNTktMi4wOTdNNi4yNzMgNC44NTdDNi40MDIgNC40MyA2Ljc4OCA0IDcuMjM2IDRoOS41MjdjLjQ0OCAwIC44MzQuNDMuOTYzLjg1N0wxOS4zMTMgOUg0LjY4OGwxLjU4NS00LjE0M3pNNyAyMUg1di0xaDJ2MXptMTIgMGgtMnYtMWgydjF6bTIuMTg5LTNIMi44MTFsLS42NjItNi42MDdMMyAxMWgxOGwuODUyLjM5M0wyMS4xODkgMTh6XCIvPjwvc3ZnPmAsXG5cbiAgcmVjZW50OiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTMgNGgtMmwtLjAwMSA3SDl2MmgydjJoMnYtMmg0di0yaC00elwiLz48cGF0aCBkPVwiTTEyIDBDNS4zNzMgMCAwIDUuMzczIDAgMTJzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMG0wIDIyQzYuNDg2IDIyIDIgMTcuNTE0IDIgMTJTNi40ODYgMiAxMiAyczEwIDQuNDg2IDEwIDEwLTQuNDg2IDEwLTEwIDEwXCIvPjwvc3ZnPmAsXG5cbiAgc3ltYm9sczogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTAgMGgxMXYySDB6TTQgMTFoM1Y2aDRWNEgwdjJoNHpNMTUuNSAxN2MxLjM4MSAwIDIuNS0xLjExNiAyLjUtMi40OTNzLTEuMTE5LTIuNDkzLTIuNS0yLjQ5M1MxMyAxMy4xMyAxMyAxNC41MDcgMTQuMTE5IDE3IDE1LjUgMTdtMC0yLjk4NmMuMjc2IDAgLjUuMjIyLjUuNDkzIDAgLjI3Mi0uMjI0LjQ5My0uNS40OTNzLS41LS4yMjEtLjUtLjQ5My4yMjQtLjQ5My41LS40OTNNMjEuNSAxOS4wMTRjLTEuMzgxIDAtMi41IDEuMTE2LTIuNSAyLjQ5M1MyMC4xMTkgMjQgMjEuNSAyNHMyLjUtMS4xMTYgMi41LTIuNDkzLTEuMTE5LTIuNDkzLTIuNS0yLjQ5M20wIDIuOTg2YS40OTcuNDk3IDAgMCAxLS41LS40OTNjMC0uMjcxLjIyNC0uNDkzLjUtLjQ5M3MuNS4yMjIuNS40OTNhLjQ5Ny40OTcgMCAwIDEtLjUuNDkzTTIyIDEzbC05IDkgMS41MTMgMS41IDguOTktOS4wMDl6TTE3IDExYzIuMjA5IDAgNC0xLjExOSA0LTIuNVYycy45ODUtLjE2MSAxLjQ5OC45NDlDMjMuMDEgNC4wNTUgMjMgNiAyMyA2czEtMS4xMTkgMS0zLjEzNUMyNC0uMDIgMjEgMCAyMSAwaC0ydjYuMzQ3QTUuODUzIDUuODUzIDAgMCAwIDE3IDZjLTIuMjA5IDAtNCAxLjExOS00IDIuNXMxLjc5MSAyLjUgNCAyLjVNMTAuMjk3IDIwLjQ4MmwtMS40NzUtMS41ODVhNDcuNTQgNDcuNTQgMCAwIDEtMS40NDIgMS4xMjljLS4zMDctLjI4OC0uOTg5LTEuMDE2LTIuMDQ1LTIuMTgzLjkwMi0uODM2IDEuNDc5LTEuNDY2IDEuNzI5LTEuODkycy4zNzYtLjg3MS4zNzYtMS4zMzZjMC0uNTkyLS4yNzMtMS4xNzgtLjgxOC0xLjc1OS0uNTQ2LS41ODEtMS4zMjktLjg3MS0yLjM0OS0uODcxLTEuMDA4IDAtMS43OS4yOTMtMi4zNDQuODc5LS41NTYuNTg3LS44MzIgMS4xODEtLjgzMiAxLjc4NCAwIC44MTMuNDE5IDEuNzQ4IDEuMjU2IDIuODA1LS44NDcuNjE0LTEuNDQ0IDEuMjA4LTEuNzk0IDEuNzg0YTMuNDY1IDMuNDY1IDAgMCAwLS41MjMgMS44MzNjMCAuODU3LjMwOCAxLjU2LjkyNCAyLjEwNy42MTYuNTQ5IDEuNDIzLjgyMyAyLjQyLjgyMyAxLjE3MyAwIDIuNDQ0LS4zNzkgMy44MTMtMS4xMzdMOC4yMzUgMjRoMi44MTlsLTIuMDktMi4zODMgMS4zMzMtMS4xMzV6bS02LjczNi02LjM4OWExLjAyIDEuMDIgMCAwIDEgLjczLS4yODZjLjMxIDAgLjU1OS4wODUuNzQ3LjI1NGEuODQ5Ljg0OSAwIDAgMSAuMjgzLjY1OWMwIC41MTgtLjQxOSAxLjExMi0xLjI1NyAxLjc4NC0uNTM2LS42NTEtLjgwNS0xLjIzMS0uODA1LTEuNzQyYS45MDEuOTAxIDAgMCAxIC4zMDItLjY2OU0zLjc0IDIyYy0uNDI3IDAtLjc3OC0uMTE2LTEuMDU3LS4zNDktLjI3OS0uMjMyLS40MTgtLjQ4Ny0uNDE4LS43NjYgMC0uNTk0LjUwOS0xLjI4OCAxLjUyNy0yLjA4My45NjggMS4xMzQgMS43MTcgMS45NDYgMi4yNDggMi40MzgtLjkyMS41MDctMS42ODYuNzYtMi4zLjc2XCIvPjwvc3ZnPmAsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNWR3NcbiIsImNvbnN0IG1hcHBpbmcgPSB7XG4gIG5hbWU6ICdhJyxcbiAgdW5pZmllZDogJ2InLFxuICBub25fcXVhbGlmaWVkOiAnYycsXG4gIGhhc19pbWdfYXBwbGU6ICdkJyxcbiAgaGFzX2ltZ19nb29nbGU6ICdlJyxcbiAgaGFzX2ltZ190d2l0dGVyOiAnZicsXG4gIGhhc19pbWdfZmFjZWJvb2s6ICdoJyxcbiAga2V5d29yZHM6ICdqJyxcbiAgc2hlZXQ6ICdrJyxcbiAgZW1vdGljb25zOiAnbCcsXG4gIHRleHQ6ICdtJyxcbiAgc2hvcnRfbmFtZXM6ICduJyxcbiAgYWRkZWRfaW46ICdvJyxcbn1cblxuY29uc3QgYnVpbGRTZWFyY2ggPSAoZW1vamkpID0+IHtcbiAgY29uc3Qgc2VhcmNoID0gW11cblxuICB2YXIgYWRkVG9TZWFyY2ggPSAoc3RyaW5ncywgc3BsaXQpID0+IHtcbiAgICBpZiAoIXN0cmluZ3MpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIDsoQXJyYXkuaXNBcnJheShzdHJpbmdzKSA/IHN0cmluZ3MgOiBbc3RyaW5nc10pLmZvckVhY2goKHN0cmluZykgPT4ge1xuICAgICAgOyhzcGxpdCA/IHN0cmluZy5zcGxpdCgvWy18X3xcXHNdKy8pIDogW3N0cmluZ10pLmZvckVhY2goKHMpID0+IHtcbiAgICAgICAgcyA9IHMudG9Mb3dlckNhc2UoKVxuXG4gICAgICAgIGlmIChzZWFyY2guaW5kZXhPZihzKSA9PSAtMSkge1xuICAgICAgICAgIHNlYXJjaC5wdXNoKHMpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGFkZFRvU2VhcmNoKGVtb2ppLnNob3J0X25hbWVzLCB0cnVlKVxuICBhZGRUb1NlYXJjaChlbW9qaS5uYW1lLCB0cnVlKVxuICBhZGRUb1NlYXJjaChlbW9qaS5rZXl3b3JkcywgZmFsc2UpXG4gIGFkZFRvU2VhcmNoKGVtb2ppLmVtb3RpY29ucywgZmFsc2UpXG5cbiAgcmV0dXJuIHNlYXJjaC5qb2luKCcsJylcbn1cblxuZnVuY3Rpb24gZGVlcEZyZWV6ZShvYmplY3QpIHtcbiAgLy8gUmV0cmlldmUgdGhlIHByb3BlcnR5IG5hbWVzIGRlZmluZWQgb24gb2JqZWN0XG4gIHZhciBwcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmplY3QpXG5cbiAgLy8gRnJlZXplIHByb3BlcnRpZXMgYmVmb3JlIGZyZWV6aW5nIHNlbGZcbiAgZm9yIChsZXQgbmFtZSBvZiBwcm9wTmFtZXMpIHtcbiAgICBsZXQgdmFsdWUgPSBvYmplY3RbbmFtZV1cbiAgICBvYmplY3RbbmFtZV0gPVxuICAgICAgdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IGRlZXBGcmVlemUodmFsdWUpIDogdmFsdWVcbiAgfVxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZShvYmplY3QpXG59XG5cbmNvbnN0IHVuY29tcHJlc3MgPSAoZGF0YSkgPT4ge1xuICBpZiAoIWRhdGEuY29tcHJlc3NlZCkge1xuICAgIHJldHVybiBkYXRhXG4gIH1cbiAgZGF0YS5jb21wcmVzc2VkID0gZmFsc2VcblxuICBmb3IgKGxldCBpZCBpbiBkYXRhLmVtb2ppcykge1xuICAgIGxldCBlbW9qaSA9IGRhdGEuZW1vamlzW2lkXVxuXG4gICAgZm9yIChsZXQga2V5IGluIG1hcHBpbmcpIHtcbiAgICAgIGVtb2ppW2tleV0gPSBlbW9qaVttYXBwaW5nW2tleV1dXG4gICAgICBkZWxldGUgZW1vamlbbWFwcGluZ1trZXldXVxuICAgIH1cblxuICAgIGlmICghZW1vamkuc2hvcnRfbmFtZXMpIGVtb2ppLnNob3J0X25hbWVzID0gW11cbiAgICBlbW9qaS5zaG9ydF9uYW1lcy51bnNoaWZ0KGlkKVxuXG4gICAgZW1vamkuc2hlZXRfeCA9IGVtb2ppLnNoZWV0WzBdXG4gICAgZW1vamkuc2hlZXRfeSA9IGVtb2ppLnNoZWV0WzFdXG4gICAgZGVsZXRlIGVtb2ppLnNoZWV0XG5cbiAgICBpZiAoIWVtb2ppLnRleHQpIGVtb2ppLnRleHQgPSAnJ1xuXG4gICAgaWYgKCFlbW9qaS5hZGRlZF9pbikgZW1vamkuYWRkZWRfaW4gPSA2XG4gICAgZW1vamkuYWRkZWRfaW4gPSBlbW9qaS5hZGRlZF9pbi50b0ZpeGVkKDEpXG5cbiAgICBlbW9qaS5zZWFyY2ggPSBidWlsZFNlYXJjaChlbW9qaSlcbiAgfVxuICBkYXRhID0gZGVlcEZyZWV6ZShkYXRhKVxuICByZXR1cm4gZGF0YVxufVxuXG5leHBvcnQgeyBidWlsZFNlYXJjaCwgdW5jb21wcmVzcyB9XG4iLCJpbXBvcnQgeyBpbnRlcnNlY3QsIHVuaWZpZWRUb05hdGl2ZSB9IGZyb20gJy4vaW5kZXgnXG5pbXBvcnQgeyB1bmNvbXByZXNzLCBidWlsZFNlYXJjaCB9IGZyb20gJy4vZGF0YSdcbmltcG9ydCBmcmVxdWVudGx5IGZyb20gJy4vZnJlcXVlbnRseSdcblxuY29uc3QgU0hFRVRfQ09MVU1OUyA9IDYxXG5jb25zdCBDT0xPTlNfUkVHRVggPSAvXig/OlxcOihbXlxcOl0rKVxcOikoPzpcXDpza2luLXRvbmUtKFxcZClcXDopPyQvXG4vLyBTa2luIHRvbmVzXG5jb25zdCBTS0lOUyA9IFsnMUYzRkEnLCAnMUYzRkInLCAnMUYzRkMnLCAnMUYzRkQnLCAnMUYzRkUnLCAnMUYzRkYnXVxuXG4vKipcbiAqIEVtb2ppIGRhdGEgc3RydWN0dXJlOlxuICoge1xuICogICAgXCJjb21wcmVzc2VkXCI6IGZhbHNlLFxuICogICAgXCJhbGlhc2VzXCI6IHtcbiAqICAgICAgY29sbGlzaW9uOiBcImJvb21cIlxuICogICAgICBjb29raW5nOiBcImZyaWVkX2VnZ1wiXG4gKiAgICAgIGVudmVsb3BlOiBcImVtYWlsXCJcbiAqICAgICAgZmFjZV93aXRoX2Zpbmdlcl9jb3ZlcmluZ19jbG9zZWRfbGlwczogXCJzaHVzaGluZ19mYWNlXCJcbiAqICAgICAgLi4uXG4gKiAgICB9LFxuICogICAgXCJjYXRlZ29yaWVzXCI6IFsge1xuICogICAgICBpZDogXCJwZW9wbGVcIixcbiAqICAgICAgbmFtZTogXCJTbWlsZXlzICYgRW1vdGlvblwiLFxuICogICAgICBlbW9qaXM6IFsgXCJncmlubmluZ1wiLCBcImdyaW5cIiwgXCJqb3lcIiwgLi4uIF1cbiAqICAgIH0sIHtcbiAqICAgICAgaWQ6IFwibmF0dXJlXCIsXG4gKiAgICAgIG5hbWU6IFwiQW5pbWFscyAmIE5hdHVyZVwiLFxuICogICAgICBlbW9qaXM6IFsgXCJtb25rZXlfZmFjZVwiLCBcIm1vbmV5XCIsIFwiZ29yaWxsYVwiLCAuLi4gXVxuICogICAgfSxcbiAqICAgIC4uLlxuICogICAgXSxcbiAqICAgIFwiZW1vamlzXCI6IFtcbiAqICAgICAgc21pbGV5OiB7XG4gKiAgICAgICAgYWRkZWRfaW46IFwiNi4wXCIsXG4gKiAgICAgICAgZW1vdGljb25zOiBbXCI9KVwiLCBcIj0tKVwiXSxcbiAqICAgICAgICBoYXNfaW1nX2FwcGxlOiB0cnVlLFxuICogICAgICAgIGhhc19pbWdfZmFjZWJvb2s6IHRydWUsXG4gKiAgICAgICAgaGFzX2ltZ19nb29nbGU6IHRydWUsXG4gKiAgICAgICAgaGFzX2ltZ190d2l0dGVyOiB0cnVlLFxuICogICAgICAgIGtleXdvcmRzOiBbXCJmYWNlXCIsIFwiaGFwcHlcIiwgXCJqb3lcIiwgXCJoYWhhXCIsIFwiOkRcIiwgXCI6KVwiLCBcInNtaWxlXCIsIFwiZnVubnlcIl0sXG4gKiAgICAgICAgbmFtZTogXCJTbWlsaW5nIEZhY2Ugd2l0aCBPcGVuIE1vdXRoXCIsXG4gKiAgICAgICAgbm9uX3F1YWxpZmllZDogdW5kZWZpbmVkLFxuICogICAgICAgIHNlYXJjaDogXCJzbWlsZXksc21pbGluZyxmYWNlLHdpdGgsb3Blbixtb3V0aCxoYXBweSxqb3ksaGFoYSw6ZCw6KSxzbWlsZSxmdW5ueSw9KSw9LSlcIixcbiAqICAgICAgICBzaGVldF94OiAzMCxcbiAqICAgICAgICBzaGVldF95OiAyNyxcbiAqICAgICAgICBzaG9ydF9uYW1lczogW1wic21pbGV5XCJdLFxuICogICAgICAgIHRleHQ6IFwiOilcIixcbiAqICAgICAgICB1bmlmaWVkOiBcIjFGNjAzXCIsXG4gKiAgICAgIH0sIHtcbiAqICAgICAgKzE6IHsgICAgLy8gZW1vamkgd2l0aCBza2luX3ZhcmlhdGlvbnNcbiAqICAgICAgICAgIC4uLiwgLy8gYWxsIHRoZSByZWd1bGFyIGZpZWxkcyBhcmUgcHJlc2VudFxuICogICAgICAgICAgbmFtZTogXCJUaHVtYnMgVXAgU2lnblwiLFxuICogICAgICAgICAgc2hvcnRfbmFtZXM6ICgyKSBbXCIrMVwiLCBcInRodW1ic3VwXCJdLFxuICogICAgICAgICAgc2tpbl92YXJpYXRpb25zOiB7XG4gKiAgICAgICAgICAgIDFGM0ZCOiAgICAgICAgICAgICAvLyBlYWNoIHZhcmlhdGlvbiBoYXMgYWRkaXRpb25hbCBzZXQgb2YgZmllbGRzOlxuICogICAgICAgICAgICAgIGFkZGVkX2luOiBcIjguMFwiLFxuICogICAgICAgICAgICAgIGhhc19pbWdfYXBwbGU6IHRydWUsXG4gKiAgICAgICAgICAgICAgaGFzX2ltZ19mYWNlYm9vazogdHJ1ZSxcbiAqICAgICAgICAgICAgICBoYXNfaW1nX2dvb2dsZTogdHJ1ZSxcbiAqICAgICAgICAgICAgICBoYXNfaW1nX3R3aXR0ZXI6IHRydWUsXG4gKiAgICAgICAgICAgICAgaW1hZ2U6IFwiMWY0NGQtMWYzZmIucG5nXCIsXG4gKiAgICAgICAgICAgICAgbm9uX3F1YWxpZmllZDogbnVsbCxcbiAqICAgICAgICAgICAgICBzaGVldF94OiAxNCxcbiAqICAgICAgICAgICAgICBzaGVldF95OiA1MCxcbiAqICAgICAgICAgICAgICB1bmlmaWVkOiBcIjFGNDRELTFGM0ZCXCIsXG4gKiAgICAgICAgICAgIDFGM0ZCOiB74oCmfSxcbiAqICAgICAgICAgICAgMUYzRkM6IHvigKZ9LFxuICogICAgICAgICAgICAxRjNGRDoge+KApn0sXG4gKiAgICAgICAgICAgIDFGM0ZFOiB74oCmfSxcbiAqICAgICAgICAgICAgMUYzRkY6IHvigKZ9XG4gKiAgICAgICAgICAgIH0sXG4gKiAgICAgICAgICAuLi5cbiAqICAgICAgfSxcbiAqICAgICAgYTogeyAgLy8gZW1vamkgd2l0aCBub25fcXVhbGlmaWVkIGZpZWxkIHNldFxuICogICAgICAgIGFkZGVkX2luOiBcIjYuMFwiLFxuICogICAgICAgIGVtb3RpY29uczogdW5kZWZpbmVkLFxuICogICAgICAgIGhhc19pbWdfYXBwbGU6IHRydWUsXG4gKiAgICAgICAgLi4uXG4gKiAgICAgICAgbm9uX3F1YWxpZmllZDogXCIxRjE3MFwiLFxuICogICAgICAgIHVuaWZpZWQ6IFwiMUYxNzAtRkUwRlwiLFxuICogICAgIH0sXG4gKiAgICAgLi4uXG4gKiAgIF1cbiAqIH1cbiAqL1xuXG4vKipcbiAqIFdyYXBzIHJhdyBqYXNvbiBlbW9qaSBkYXRhLCBzZXJ2ZXMgYXMgZGF0YSBzb3VyY2UgZm9yXG4gKiBlbW9qaSBwaWNrZXIgY29tcG9uZW50cy5cbiAqXG4gKiBVc2FnZTpcbiAqXG4gKiAgIGltcG9ydCBkYXRhIGZyb20gJy4uL2RhdGEvYWxsLmpzb24nXG4gKiAgIGxldCBpbmRleCA9IG5ldyBFbW9qaUluZGV4KGRhdGEpXG4gKlxuICovXG5leHBvcnQgY2xhc3MgRW1vamlJbmRleCB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBSYXcganNvbiBkYXRhLCBzZWUgdGhlIHN0cnVjdHVyZSBhYm92ZS5cbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBhZGRpdGlvbmFsIG9wdGlvbnMsIGFzIGFuIG9iamVjdDpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZW1vamlzVG9TaG93RmlsdGVyIC0gb3B0aW9uYWwsIGZ1bmN0aW9uIHRvIGZpbHRlciBvdXRcbiAgICogICBzb21lIGVtb2ppcywgZnVuY3Rpb24oZW1vamkpIHsgcmV0dXJuIHRydWV8ZmFsc2UgfVxuICAgKiAgIHdoZXJlIGBlbW9qaWAgaXMgYW4gcmF3IGVtb2ppIG9iamVjdCwgc2VlIGRhdGEuZW1vamlzIGFib3ZlLlxuICAgKiBAcGFyYW0ge0FycmF5fSBpbmNsdWRlIC0gb3B0aW9uYWwsIGEgbGlzdCBvZiBjYXRlZ29yeSBpZHMgdG8gaW5jbHVkZS5cbiAgICogQHBhcmFtIHtBcnJheX0gZXhjbHVkZSAtIG9wdGlvbmFsLCBhIGxpc3Qgb2YgY2F0ZWdvcnkgaWRzIHRvIGV4Y2x1ZGUuXG4gICAqIEBwYXJhbSB7QXJyYXl9IGN1c3RvbSAtIG9wdGlvbmFsLCBhIGxpc3QgY3VzdG9tIGVtb2ppcywgZWFjaCBlbW9qaSBpc1xuICAgKiAgIGFuIG9iamVjdCwgc2VlIGRhdGEuZW1vamlzIGFib3ZlIGZvciBleGFtcGxlcy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIGRhdGEsXG4gICAge1xuICAgICAgZW1vamlzVG9TaG93RmlsdGVyLFxuICAgICAgaW5jbHVkZSxcbiAgICAgIGV4Y2x1ZGUsXG4gICAgICBjdXN0b20sXG4gICAgICByZWNlbnQsXG4gICAgICByZWNlbnRMZW5ndGggPSAyMCxcbiAgICB9ID0ge30sXG4gICkge1xuICAgIHRoaXMuX2RhdGEgPSB1bmNvbXByZXNzKGRhdGEpXG4gICAgLy8gQ2FsbGJhY2sgdG8gZXhjbHVkZSBzcGVjaWZpYyBlbW9qaXNcbiAgICB0aGlzLl9lbW9qaXNGaWx0ZXIgPSBlbW9qaXNUb1Nob3dGaWx0ZXIgfHwgbnVsbFxuICAgIC8vIENhdGVnb3JpZXMgdG8gaW5jbHVkZSAvIGV4Y2x1ZGVcbiAgICB0aGlzLl9pbmNsdWRlID0gaW5jbHVkZSB8fCBudWxsXG4gICAgdGhpcy5fZXhjbHVkZSA9IGV4Y2x1ZGUgfHwgbnVsbFxuICAgIC8vIEN1c3RvbSBlbW9qaXNcbiAgICB0aGlzLl9jdXN0b20gPSBjdXN0b20gfHwgW11cblxuICAgIHRoaXMucmVjZW50ID0gcmVjZW50XG4gICAgdGhpcy5yZWNlbnRMZW5ndGggPSByZWNlbnRMZW5ndGhcblxuICAgIHRoaXMuX2Vtb2ppcyA9IHt9XG4gICAgdGhpcy5fbmF0aXZlRW1vamlzID0ge31cbiAgICB0aGlzLl9lbW90aWNvbnMgPSB7fVxuXG4gICAgdGhpcy5fY2F0ZWdvcmllcyA9IFtdXG4gICAgdGhpcy5fcmVjZW50Q2F0ZWdvcnkgPSB7IGlkOiAncmVjZW50JywgbmFtZTogJ1JlY2VudCcsIGVtb2ppczogW10gfVxuICAgIHRoaXMuX2N1c3RvbUNhdGVnb3J5ID0geyBpZDogJ2N1c3RvbScsIG5hbWU6ICdDdXN0b20nLCBlbW9qaXM6IFtdIH1cbiAgICB0aGlzLl9zZWFyY2hJbmRleCA9IHt9XG4gICAgdGhpcy5idWlsZEluZGV4KClcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpXG4gIH1cblxuICBidWlsZEluZGV4KCkge1xuICAgIGxldCBhbGxDYXRlZ29yaWVzID0gdGhpcy5fZGF0YS5jYXRlZ29yaWVzXG5cbiAgICBpZiAodGhpcy5faW5jbHVkZSkge1xuICAgICAgLy8gUmVtb3ZlIGNhdGVnb3JpZXMgdGhhdCBhcmUgbm90IGluIHRoZSBpbmNsdWRlIGxpc3QuXG4gICAgICBhbGxDYXRlZ29yaWVzID0gYWxsQ2F0ZWdvcmllcy5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luY2x1ZGUuaW5jbHVkZXMoaXRlbS5pZClcbiAgICAgIH0pXG4gICAgICAvLyBTb3J0IGNhdGVnb3JpZXMgYWNjb3JkaW5nIHRvIHRoZSBpbmNsdWRlIGxpc3QuXG4gICAgICBhbGxDYXRlZ29yaWVzID0gYWxsQ2F0ZWdvcmllcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4QSA9IHRoaXMuX2luY2x1ZGUuaW5kZXhPZihhLmlkKVxuICAgICAgICBjb25zdCBpbmRleEIgPSB0aGlzLl9pbmNsdWRlLmluZGV4T2YoYi5pZClcbiAgICAgICAgaWYgKGluZGV4QSA8IGluZGV4Qikge1xuICAgICAgICAgIHJldHVybiAtMVxuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleEEgPiBpbmRleEIpIHtcbiAgICAgICAgICByZXR1cm4gMVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwXG4gICAgICB9KVxuICAgIH1cblxuICAgIGFsbENhdGVnb3JpZXMuZm9yRWFjaCgoY2F0ZWdvcnlEYXRhKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNDYXRlZ29yeU5lZWRlZChjYXRlZ29yeURhdGEuaWQpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgbGV0IGNhdGVnb3J5ID0ge1xuICAgICAgICBpZDogY2F0ZWdvcnlEYXRhLmlkLFxuICAgICAgICBuYW1lOiBjYXRlZ29yeURhdGEubmFtZSxcbiAgICAgICAgZW1vamlzOiBbXSxcbiAgICAgIH1cbiAgICAgIGNhdGVnb3J5RGF0YS5lbW9qaXMuZm9yRWFjaCgoZW1vamlJZCkgPT4ge1xuICAgICAgICBsZXQgZW1vamkgPSB0aGlzLmFkZEVtb2ppKGVtb2ppSWQpXG4gICAgICAgIGlmIChlbW9qaSkge1xuICAgICAgICAgIGNhdGVnb3J5LmVtb2ppcy5wdXNoKGVtb2ppKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYgKGNhdGVnb3J5LmVtb2ppcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pc0NhdGVnb3J5TmVlZGVkKCdjdXN0b20nKSkge1xuICAgICAgaWYgKHRoaXMuX2N1c3RvbS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAobGV0IGN1c3RvbUVtb2ppIG9mIHRoaXMuX2N1c3RvbSkge1xuICAgICAgICAgIHRoaXMuYWRkQ3VzdG9tRW1vamkoY3VzdG9tRW1vamkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9jdXN0b21DYXRlZ29yeS5lbW9qaXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX2NhdGVnb3JpZXMucHVzaCh0aGlzLl9jdXN0b21DYXRlZ29yeSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVJlY2VudENhdGVnb3J5KClcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHRoZSBlbW9qaSBmcm9tIHRoZSBzdHJpbmdcbiAgICovXG4gIGZpbmRFbW9qaShlbW9qaSwgc2tpbikge1xuICAgIC8vIDEuIFBhcnNlIGFzIDplbW9qaV9uYW1lOnNraW4tdG9uZS14eDpcbiAgICBsZXQgbWF0Y2hlcyA9IGVtb2ppLm1hdGNoKENPTE9OU19SRUdFWClcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICBlbW9qaSA9IG1hdGNoZXNbMV1cbiAgICAgIGlmIChtYXRjaGVzWzJdKSB7XG4gICAgICAgIHNraW4gPSBwYXJzZUludChtYXRjaGVzWzJdLCAxMClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAyLiBDaGVjayBpZiB0aGUgc3BlY2lmaWVkIGVtb2ppIGlzIGFuIGFsaWFzXG4gICAgaWYgKHRoaXMuX2RhdGEuYWxpYXNlcy5oYXNPd25Qcm9wZXJ0eShlbW9qaSkpIHtcbiAgICAgIGVtb2ppID0gdGhpcy5fZGF0YS5hbGlhc2VzW2Vtb2ppXVxuICAgIH1cblxuICAgIC8vIDMuIENoZWNrIGlmIHdlIGhhdmUgdGhlIHNwZWNpZmllZCBlbW9qaVxuICAgIGlmICh0aGlzLl9lbW9qaXMuaGFzT3duUHJvcGVydHkoZW1vamkpKSB7XG4gICAgICBsZXQgZW1vamlPYmplY3QgPSB0aGlzLl9lbW9qaXNbZW1vamldXG4gICAgICBpZiAoc2tpbikge1xuICAgICAgICByZXR1cm4gZW1vamlPYmplY3QuZ2V0U2tpbihza2luKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVtb2ppT2JqZWN0XG4gICAgfVxuXG4gICAgLy8gNC4gQ2hlY2sgaWYgd2UgaGF2ZSB0aGUgc3BlY2lmaWVkIG5hdGl2ZSBlbW9qaVxuICAgIGlmICh0aGlzLl9uYXRpdmVFbW9qaXMuaGFzT3duUHJvcGVydHkoZW1vamkpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbmF0aXZlRW1vamlzW2Vtb2ppXVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY2F0ZWdvcmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2F0ZWdvcmllc1xuICB9XG5cbiAgZW1vamkoZW1vamlJZCkge1xuICAgIGlmICh0aGlzLl9kYXRhLmFsaWFzZXMuaGFzT3duUHJvcGVydHkoZW1vamlJZCkpIHtcbiAgICAgIGVtb2ppSWQgPSB0aGlzLl9kYXRhLmFsaWFzZXNbZW1vamlJZF1cbiAgICB9XG4gICAgbGV0IGVtb2ppID0gdGhpcy5fZW1vamlzW2Vtb2ppSWRdXG4gICAgaWYgKCFlbW9qaSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IGZpbmQgZW1vamkgYnkgaWQ6ICcgKyBlbW9qaUlkKVxuICAgIH1cbiAgICByZXR1cm4gZW1vamlcbiAgfVxuXG4gIGZpcnN0RW1vamkoKSB7XG4gICAgbGV0IGVtb2ppID0gdGhpcy5fZW1vamlzW09iamVjdC5rZXlzKHRoaXMuX2Vtb2ppcylbMF1dXG4gICAgaWYgKCFlbW9qaSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IGdldCBmaXJzdCBlbW9qaScpXG4gICAgfVxuICAgIHJldHVybiBlbW9qaVxuICB9XG5cbiAgaGFzRW1vamkoZW1vamlJZCkge1xuICAgIGlmICh0aGlzLl9kYXRhLmFsaWFzZXMuaGFzT3duUHJvcGVydHkoZW1vamlJZCkpIHtcbiAgICAgIGVtb2ppSWQgPSB0aGlzLl9kYXRhLmFsaWFzZXNbZW1vamlJZF1cbiAgICB9XG4gICAgaWYgKHRoaXMuX2Vtb2ppc1tlbW9qaUlkXSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBuYXRpdmVFbW9qaSh1bmljb2RlRW1vamkpIHtcbiAgICBpZiAodGhpcy5fbmF0aXZlRW1vamlzLmhhc093blByb3BlcnR5KHVuaWNvZGVFbW9qaSkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9uYXRpdmVFbW9qaXNbdW5pY29kZUVtb2ppXVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgc2VhcmNoKHZhbHVlLCBtYXhSZXN1bHRzKSB7XG4gICAgbWF4UmVzdWx0cyB8fCAobWF4UmVzdWx0cyA9IDc1KVxuICAgIGlmICghdmFsdWUubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBpZiAodmFsdWUgPT0gJy0nIHx8IHZhbHVlID09ICctMScpIHtcbiAgICAgIHJldHVybiBbdGhpcy5lbW9qaSgnLTEnKV1cbiAgICB9XG5cbiAgICBsZXQgdmFsdWVzID0gdmFsdWUudG9Mb3dlckNhc2UoKS5zcGxpdCgvW1xcc3wsfFxcLXxfXSsvKVxuICAgIGxldCBhbGxSZXN1bHRzID0gW11cblxuICAgIGlmICh2YWx1ZXMubGVuZ3RoID4gMikge1xuICAgICAgdmFsdWVzID0gW3ZhbHVlc1swXSwgdmFsdWVzWzFdXVxuICAgIH1cblxuICAgIGFsbFJlc3VsdHMgPSB2YWx1ZXNcbiAgICAgIC5tYXAoKHZhbHVlKSA9PiB7XG4gICAgICAgIC8vIFN0YXJ0IHNlYXJjaGluIGluIHRoZSBnbG9iYWwgbGlzdCBvZiBlbW9qaXNcbiAgICAgICAgbGV0IGVtb2ppcyA9IHRoaXMuX2Vtb2ppc1xuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gdGhpcy5fc2VhcmNoSW5kZXhcbiAgICAgICAgbGV0IGxlbmd0aCA9IDBcblxuICAgICAgICBmb3IgKGxldCBjaGFySW5kZXggPSAwOyBjaGFySW5kZXggPCB2YWx1ZS5sZW5ndGg7IGNoYXJJbmRleCsrKSB7XG4gICAgICAgICAgY29uc3QgY2hhciA9IHZhbHVlW2NoYXJJbmRleF1cbiAgICAgICAgICBsZW5ndGgrK1xuXG4gICAgICAgICAgY3VycmVudEluZGV4W2NoYXJdIHx8IChjdXJyZW50SW5kZXhbY2hhcl0gPSB7fSlcbiAgICAgICAgICBjdXJyZW50SW5kZXggPSBjdXJyZW50SW5kZXhbY2hhcl1cblxuICAgICAgICAgIGlmICghY3VycmVudEluZGV4LnJlc3VsdHMpIHtcbiAgICAgICAgICAgIGxldCBzY29yZXMgPSB7fVxuICAgICAgICAgICAgY3VycmVudEluZGV4LnJlc3VsdHMgPSBbXVxuICAgICAgICAgICAgY3VycmVudEluZGV4LmVtb2ppcyA9IHt9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGVtb2ppSWQgaW4gZW1vamlzKSB7XG4gICAgICAgICAgICAgIGxldCBlbW9qaSA9IGVtb2ppc1tlbW9qaUlkXVxuICAgICAgICAgICAgICAvLyBzZWFyY2ggaXMgYSBjb21tYS1zZXBhcmF0ZWQgc3RyaW5nIHdpdGggd29yZHMsIHJlbGF0ZWRcbiAgICAgICAgICAgICAgLy8gdG8gdGhlIGVtb2ppLCBmb3IgZXhhbXBsZTpcbiAgICAgICAgICAgICAgLy8gc2VhcmNoOiBcInNtaWxleSxzbWlsaW5nLGZhY2Usam95LGhhaGEsOmQsOiksc21pbGUsZnVubnksPSksPS0pXCIsXG4gICAgICAgICAgICAgIGxldCBzZWFyY2ggPSBlbW9qaS5fZGF0YS5zZWFyY2hcbiAgICAgICAgICAgICAgbGV0IHN1YiA9IHZhbHVlLnN1YnN0cigwLCBsZW5ndGgpXG4gICAgICAgICAgICAgIGxldCBzdWJJbmRleCA9IHNlYXJjaC5pbmRleE9mKHN1YilcbiAgICAgICAgICAgICAgaWYgKHN1YkluZGV4ICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNjb3JlID0gc3ViSW5kZXggKyAxXG4gICAgICAgICAgICAgICAgaWYgKHN1YiA9PSBlbW9qaUlkKSBzY29yZSA9IDBcblxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleC5yZXN1bHRzLnB1c2goZW1vamkpXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4LmVtb2ppc1tlbW9qaUlkXSA9IGVtb2ppXG5cbiAgICAgICAgICAgICAgICBzY29yZXNbZW1vamlJZF0gPSBzY29yZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50SW5kZXgucmVzdWx0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgIHZhciBhU2NvcmUgPSBzY29yZXNbYS5pZF0sXG4gICAgICAgICAgICAgICAgYlNjb3JlID0gc2NvcmVzW2IuaWRdXG4gICAgICAgICAgICAgIHJldHVybiBhU2NvcmUgLSBiU2NvcmVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gY29udGludWUgc2VhcmNoIGluIHRoZSByZWR1Y2VkIHNldCBvZiBlbW9qaXNcbiAgICAgICAgICBlbW9qaXMgPSBjdXJyZW50SW5kZXguZW1vamlzXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGN1cnJlbnRJbmRleC5yZXN1bHRzXG4gICAgICAgIC8vIFRoZSBcImZpbHRlclwiIGNhbGwgcmVtb3ZlcyB1bmRlZmluZWQgdmFsdWVzIGZyb20gYWxsUmVzdWx0c1xuICAgICAgICAvLyBhcnJheSwgZm9yIGV4YW1wbGUsIGlmIHdlIGhhdmUgXCJ0ZXN0IFwiICh3aXRoIHRyYWlsaW5nIHNwYWNlKSxcbiAgICAgICAgLy8gd2Ugd2lsbCBnZXQgXCJbQXJyYXksIHVuZGVmaW5lZF1cIiBmb3IgYWxsUmVzdWx0cyBhbmQgYWZ0ZXJcbiAgICAgICAgLy8gdGhlIFwiZmlsdGVyXCIgY2FsbCBpdCB3aWxsIHR1cm4gaW50byBcIltBcnJheV1cIlxuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoKGEpID0+IGEpXG5cbiAgICB2YXIgcmVzdWx0cyA9IG51bGxcbiAgICBpZiAoYWxsUmVzdWx0cy5sZW5ndGggPiAxKSB7XG4gICAgICByZXN1bHRzID0gaW50ZXJzZWN0LmFwcGx5KG51bGwsIGFsbFJlc3VsdHMpXG4gICAgfSBlbHNlIGlmIChhbGxSZXN1bHRzLmxlbmd0aCkge1xuICAgICAgcmVzdWx0cyA9IGFsbFJlc3VsdHNbMF1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0cyA9IFtdXG4gICAgfVxuICAgIGlmIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gbWF4UmVzdWx0cykge1xuICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuc2xpY2UoMCwgbWF4UmVzdWx0cylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHNcbiAgfVxuXG4gIGFkZEN1c3RvbUVtb2ppKGN1c3RvbUVtb2ppKSB7XG4gICAgbGV0IGVtb2ppRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGN1c3RvbUVtb2ppLCB7XG4gICAgICBpZDogY3VzdG9tRW1vamkuc2hvcnRfbmFtZXNbMF0sXG4gICAgICBjdXN0b206IHRydWUsXG4gICAgfSlcbiAgICBpZiAoIWVtb2ppRGF0YS5zZWFyY2gpIHtcbiAgICAgIGVtb2ppRGF0YS5zZWFyY2ggPSBidWlsZFNlYXJjaChlbW9qaURhdGEpXG4gICAgfVxuICAgIGxldCBlbW9qaSA9IG5ldyBFbW9qaURhdGEoZW1vamlEYXRhKVxuICAgIHRoaXMuX2Vtb2ppc1tlbW9qaS5pZF0gPSBlbW9qaVxuICAgIHRoaXMuX2N1c3RvbUNhdGVnb3J5LmVtb2ppcy5wdXNoKGVtb2ppKVxuICAgIHJldHVybiBlbW9qaVxuICB9XG5cbiAgYWRkRW1vamkoZW1vamlJZCkge1xuICAgIC8vIFdlIGV4cGVjdCB0aGUgY29ycmVjdCBlbW9qaSBpZCB0aGF0IGlzIHByZXNlbnQgaW4gdGhlIGVtb2ppcyBkYXRhLlxuICAgIGxldCBkYXRhID0gdGhpcy5fZGF0YS5lbW9qaXNbZW1vamlJZF1cblxuICAgIGlmICghdGhpcy5pc0Vtb2ppTmVlZGVkKGRhdGEpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBsZXQgZW1vamkgPSBuZXcgRW1vamlEYXRhKGRhdGEpXG4gICAgdGhpcy5fZW1vamlzW2Vtb2ppSWRdID0gZW1vamlcbiAgICBpZiAoZW1vamkubmF0aXZlKSB7XG4gICAgICB0aGlzLl9uYXRpdmVFbW9qaXNbZW1vamkubmF0aXZlXSA9IGVtb2ppXG4gICAgfVxuICAgIGlmIChlbW9qaS5fc2tpbnMpIHtcbiAgICAgIGZvciAobGV0IGlkeCBpbiBlbW9qaS5fc2tpbnMpIHtcbiAgICAgICAgbGV0IHNraW4gPSBlbW9qaS5fc2tpbnNbaWR4XVxuICAgICAgICBpZiAoc2tpbi5uYXRpdmUpIHtcbiAgICAgICAgICB0aGlzLl9uYXRpdmVFbW9qaXNbc2tpbi5uYXRpdmVdID0gc2tpblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVtb2ppLmVtb3RpY29ucykge1xuICAgICAgZW1vamkuZW1vdGljb25zLmZvckVhY2goKGVtb3RpY29uKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9lbW90aWNvbnNbZW1vdGljb25dKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZW1vdGljb25zW2Vtb3RpY29uXSA9IGVtb2ppSWRcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBlbW9qaVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHdlIG5lZWQgdG8gaW5jbHVkZSBnaXZlbiBjYXRlZ29yeS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNhdGVnb3J5X2lkIC0gVGhlIGNhdGVnb3J5IGlkLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSAtIFdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgZW1vamkuXG4gICAqL1xuICBpc0NhdGVnb3J5TmVlZGVkKGNhdGVnb3J5X2lkKSB7XG4gICAgbGV0IGlzSW5jbHVkZWQgPVxuICAgICAgdGhpcy5faW5jbHVkZSAmJiB0aGlzLl9pbmNsdWRlLmxlbmd0aFxuICAgICAgICA/IHRoaXMuX2luY2x1ZGUuaW5kZXhPZihjYXRlZ29yeV9pZCkgPiAtMVxuICAgICAgICA6IHRydWVcbiAgICBsZXQgaXNFeGNsdWRlZCA9XG4gICAgICB0aGlzLl9leGNsdWRlICYmIHRoaXMuX2V4Y2x1ZGUubGVuZ3RoXG4gICAgICAgID8gdGhpcy5fZXhjbHVkZS5pbmRleE9mKGNhdGVnb3J5X2lkKSA+IC0xXG4gICAgICAgIDogZmFsc2VcbiAgICBpZiAoIWlzSW5jbHVkZWQgfHwgaXNFeGNsdWRlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgd2UgbmVlZCB0byBpbmNsdWRlIGdpdmVuIGVtb2ppLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZW1vamkgLSBUaGUgcmF3IGVtb2ppIG9iamVjdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBXaGV0aGVyIHRvIGluY2x1ZGUgdGhlIGVtb2ppLlxuICAgKi9cbiAgaXNFbW9qaU5lZWRlZChlbW9qaSkge1xuICAgIGlmICh0aGlzLl9lbW9qaXNGaWx0ZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbW9qaXNGaWx0ZXIoZW1vamkpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIHJlY2VudCBjYXRlZ29yeVxuICB1cGRhdGVSZWNlbnRDYXRlZ29yeSgpIHtcbiAgICBpZiAodGhpcy5pc0NhdGVnb3J5TmVlZGVkKCdyZWNlbnQnKSkge1xuICAgICAgY29uc3QgcmVjZW50RW1vamlzID0gdGhpcy5yZWNlbnQgfHwgZnJlcXVlbnRseS5nZXQodGhpcy5yZWNlbnRMZW5ndGgpXG4gICAgICBjb25zdCBuZXdSZWNlbnRFbW9qaXMgPSBbXVxuICAgICAgaWYgKHJlY2VudEVtb2ppcy5sZW5ndGgpIHtcbiAgICAgICAgcmVjZW50RW1vamlzLm1hcCgoaWQpID0+IHtcbiAgICAgICAgICBmb3IgKGxldCBjdXN0b21FbW9qaSBvZiB0aGlzLl9jdXN0b21DYXRlZ29yeS5lbW9qaXMpIHtcbiAgICAgICAgICAgIGlmIChjdXN0b21FbW9qaS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgbmV3UmVjZW50RW1vamlzLnB1c2goY3VzdG9tRW1vamkpXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5oYXNFbW9qaShpZCkpIHtcbiAgICAgICAgICAgIG5ld1JlY2VudEVtb2ppcy5wdXNoKHRoaXMuZW1vamkoaWQpKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIC8vIEFkZCByZWNlbnQgY2F0ZWdvcnkgdG8gdGhlIHRvcFxuICAgICAgaWYgKG5ld1JlY2VudEVtb2ppcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fY2F0ZWdvcmllcy51bnNoaWZ0KHRoaXMuX3JlY2VudENhdGVnb3J5KVxuICAgICAgfVxuICAgICAgdGhpcy5fcmVjZW50Q2F0ZWdvcnkuZW1vamlzID0gbmV3UmVjZW50RW1vamlzXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbW9qaURhdGEge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5fZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEpXG4gICAgdGhpcy5fc2tpbnMgPSBudWxsXG4gICAgaWYgKHRoaXMuX2RhdGEuc2tpbl92YXJpYXRpb25zKSB7XG4gICAgICB0aGlzLl9za2lucyA9IFtdXG4gICAgICBmb3IgKHZhciBza2luSWR4IGluIFNLSU5TKSB7XG4gICAgICAgIGxldCBza2luS2V5ID0gU0tJTlNbc2tpbklkeF1cbiAgICAgICAgbGV0IHZhcmlhdGlvbkRhdGEgPSB0aGlzLl9kYXRhLnNraW5fdmFyaWF0aW9uc1tza2luS2V5XVxuICAgICAgICBsZXQgc2tpbkRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhKVxuICAgICAgICBmb3IgKGxldCBrIGluIHZhcmlhdGlvbkRhdGEpIHtcbiAgICAgICAgICBza2luRGF0YVtrXSA9IHZhcmlhdGlvbkRhdGFba11cbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc2tpbkRhdGEuc2tpbl92YXJpYXRpb25zXG4gICAgICAgIHNraW5EYXRhWydza2luX3RvbmUnXSA9IHBhcnNlSW50KHNraW5JZHgpICsgMVxuICAgICAgICB0aGlzLl9za2lucy5wdXNoKG5ldyBFbW9qaURhdGEoc2tpbkRhdGEpKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9zYW5pdGl6ZWQgPSBzYW5pdGl6ZSh0aGlzLl9kYXRhKVxuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9zYW5pdGl6ZWQpIHtcbiAgICAgIHRoaXNba2V5XSA9IHRoaXMuX3Nhbml0aXplZFtrZXldXG4gICAgfVxuICAgIHRoaXMuc2hvcnRfbmFtZXMgPSB0aGlzLl9kYXRhLnNob3J0X25hbWVzXG4gICAgdGhpcy5zaG9ydF9uYW1lID0gdGhpcy5fZGF0YS5zaG9ydF9uYW1lc1swXVxuICAgIE9iamVjdC5mcmVlemUodGhpcylcbiAgfVxuXG4gIGdldFNraW4oc2tpbklkeCkge1xuICAgIGlmIChza2luSWR4ICYmIHNraW5JZHggIT0gJ25hdGl2ZScgJiYgdGhpcy5fc2tpbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9za2luc1tza2luSWR4IC0gMV1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIGxldCBhZGp1c3RlZENvbHVtbnMgPSBTSEVFVF9DT0xVTU5TIC0gMSxcbiAgICAgIHggPSArKCgxMDAgLyBhZGp1c3RlZENvbHVtbnMpICogdGhpcy5fZGF0YS5zaGVldF94KS50b0ZpeGVkKDIpLFxuICAgICAgeSA9ICsoKDEwMCAvIGFkanVzdGVkQ29sdW1ucykgKiB0aGlzLl9kYXRhLnNoZWV0X3kpLnRvRml4ZWQoMilcbiAgICByZXR1cm4gYCR7eH0lICR7eX0lYFxuICB9XG5cbiAgYXJpYUxhYmVsKCkge1xuICAgIHJldHVybiBbdGhpcy5uYXRpdmVdLmNvbmNhdCh0aGlzLnNob3J0X25hbWVzKS5maWx0ZXIoQm9vbGVhbikuam9pbignLCAnKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbW9qaVZpZXcge1xuICAvKipcbiAgICogZW1vamkgLSBFbW9qaSB0byBkaXNwbGF5XG4gICAqIHNldCAtIHN0cmluZywgZW1vamkgc2V0IG5hbWVcbiAgICogbmF0aXZlIC0gYm9vbGVhbiwgd2hldGhlciB0byByZW5kZXIgbmF0aXZlIGVtb2ppXG4gICAqIGZhbGxiYWNrIC0gZmFsbGJhY2sgZnVuY3Rpb24gdG8gcmVuZGVyIG1pc3NpbmcgZW1vamksIG9wdGlvbmFsXG4gICAqIGVtb2ppVG9vbHRpcCAtIHdldGhlciB3ZSBuZWVkIHRvIHNob3cgdGhlIGVtb2ppIHRvb2x0aXAsIG9wdGlvbmFsXG4gICAqIGVtb2ppU2l6ZSAtIGVtb2ppIHNpemUgaW4gcGl4ZWxzLCBvcHRpb25hbFxuICAgKi9cbiAgY29uc3RydWN0b3IoZW1vamksIHNraW4sIHNldCwgbmF0aXZlLCBmYWxsYmFjaywgZW1vamlUb29sdGlwLCBlbW9qaVNpemUpIHtcbiAgICB0aGlzLl9lbW9qaSA9IGVtb2ppXG4gICAgdGhpcy5fbmF0aXZlID0gbmF0aXZlXG4gICAgdGhpcy5fc2tpbiA9IHNraW5cbiAgICB0aGlzLl9zZXQgPSBzZXRcbiAgICB0aGlzLl9mYWxsYmFjayA9IGZhbGxiYWNrXG5cbiAgICB0aGlzLmNhblJlbmRlciA9IHRoaXMuX2NhblJlbmRlcigpXG4gICAgdGhpcy5jc3NDbGFzcyA9IHRoaXMuX2Nzc0NsYXNzKClcbiAgICB0aGlzLmNzc1N0eWxlID0gdGhpcy5fY3NzU3R5bGUoZW1vamlTaXplKVxuICAgIHRoaXMuY29udGVudCA9IHRoaXMuX2NvbnRlbnQoKVxuICAgIHRoaXMudGl0bGUgPSBlbW9qaVRvb2x0aXAgPT09IHRydWUgPyBlbW9qaS5zaG9ydF9uYW1lIDogbnVsbFxuICAgIHRoaXMuYXJpYUxhYmVsID0gZW1vamkuYXJpYUxhYmVsKClcblxuICAgIE9iamVjdC5mcmVlemUodGhpcylcbiAgfVxuXG4gIGdldEVtb2ppKCkge1xuICAgIHJldHVybiB0aGlzLl9lbW9qaS5nZXRTa2luKHRoaXMuX3NraW4pXG4gIH1cblxuICBfY2FuUmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLl9pc0N1c3RvbSgpIHx8IHRoaXMuX2lzTmF0aXZlKCkgfHwgdGhpcy5faGFzRW1vamkoKSB8fCB0aGlzLl9mYWxsYmFja1xuICAgIClcbiAgfVxuXG4gIF9jc3NDbGFzcygpIHtcbiAgICByZXR1cm4gWydlbW9qaS1zZXQtJyArIHRoaXMuX3NldCwgJ2Vtb2ppLXR5cGUtJyArIHRoaXMuX2Vtb2ppVHlwZSgpXVxuICB9XG5cbiAgX2Nzc1N0eWxlKGVtb2ppU2l6ZSkge1xuICAgIGxldCBjc3NTdHlsZSA9IHt9XG4gICAgaWYgKHRoaXMuX2lzQ3VzdG9tKCkpIHtcbiAgICAgIGNzc1N0eWxlID0ge1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIHRoaXMuZ2V0RW1vamkoKS5fZGF0YS5pbWFnZVVybCArICcpJyxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6ICcxMDAlJyxcbiAgICAgICAgd2lkdGg6IGVtb2ppU2l6ZSArICdweCcsXG4gICAgICAgIGhlaWdodDogZW1vamlTaXplICsgJ3B4JyxcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX2hhc0Vtb2ppKCkgJiYgIXRoaXMuX2lzTmF0aXZlKCkpIHtcbiAgICAgIGNzc1N0eWxlID0ge1xuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IHRoaXMuZ2V0RW1vamkoKS5nZXRQb3NpdGlvbigpLFxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW1vamlTaXplKSB7XG4gICAgICBpZiAodGhpcy5faXNOYXRpdmUoKSkge1xuICAgICAgICAvLyBTZXQgZm9udC1zaXplIGZvciBuYXRpdmUgZW1vamkuXG4gICAgICAgIGNzc1N0eWxlID0gT2JqZWN0LmFzc2lnbihjc3NTdHlsZSwge1xuICAgICAgICAgIC8vIGZvbnQtc2l6ZSBpcyB1c2VkIGZvciBuYXRpdmUgZW1vamkgd2hpY2ggd2UgbmVlZFxuICAgICAgICAgIC8vIHRvIHNjYWxlIHdpdGggMC45NSBmYWN0b3IgdG8gaGF2ZSB0aGVtIGxvb2sgYXBwcm94aW1hdGVseVxuICAgICAgICAgIC8vIHRoZSBzYW1lIHNpemUgYXMgaW1hZ2UtYmFzZWQgZW1vamkuXG4gICAgICAgICAgZm9udFNpemU6IE1hdGgucm91bmQoZW1vamlTaXplICogMC45NSAqIDEwKSAvIDEwICsgJ3B4JyxcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNldCB3aWR0aC9oZWlnaHQgZm9yIGltYWdlIGVtb2ppLlxuICAgICAgICBjc3NTdHlsZSA9IE9iamVjdC5hc3NpZ24oY3NzU3R5bGUsIHtcbiAgICAgICAgICB3aWR0aDogZW1vamlTaXplICsgJ3B4JyxcbiAgICAgICAgICBoZWlnaHQ6IGVtb2ppU2l6ZSArICdweCcsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjc3NTdHlsZVxuICB9XG5cbiAgX2NvbnRlbnQoKSB7XG4gICAgaWYgKHRoaXMuX2lzQ3VzdG9tKCkpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICBpZiAodGhpcy5faXNOYXRpdmUoKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RW1vamkoKS5uYXRpdmVcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hhc0Vtb2ppKCkpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZmFsbGJhY2sgPyB0aGlzLl9mYWxsYmFjayh0aGlzLmdldEVtb2ppKCkpIDogbnVsbFxuICB9XG5cbiAgX2lzTmF0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLl9uYXRpdmVcbiAgfVxuXG4gIF9pc0N1c3RvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRFbW9qaSgpLmN1c3RvbVxuICB9XG5cbiAgX2hhc0Vtb2ppKCkge1xuICAgIGlmICghdGhpcy5nZXRFbW9qaSgpLl9kYXRhKSB7XG4gICAgICAvLyBSZXR1cm4gZmFsc2UgaWYgd2UgaGF2ZSBubyBkYXRhLlxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGNvbnN0IGhhc0ltYWdlID0gdGhpcy5nZXRFbW9qaSgpLl9kYXRhWydoYXNfaW1nXycgKyB0aGlzLl9zZXRdXG4gICAgaWYgKGhhc0ltYWdlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIElmIHRoZXJlIGlzIG5vIGhhc19pbWdfeHh4IGluIHRoZSBkYXRhLCB3ZSBhcmUgd29ya2luZyB3aXRoXG4gICAgICAvLyBzcGVjaWZpYyBkYXRhIGZpbGUsIGxpa2UgZmFjZWJvb2suanNvbiwgc28gd2UgYXNzdW1lIGFsbFxuICAgICAgLy8gZW1vamlzIGFyZSBhdmFpbGFibGUgKHRoZSA6c2V0IHNldHRpbmcgZm9yIHBpY2tlciBzaG91bGRcbiAgICAgIC8vIG1hdGNoIHRoZSBkYXRhIGZpbGUpLlxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgLy8gT3RoZXJ3aXNlLCB3ZSBhcmUgdXNpbmcgYWxsLmpzb24gYW5kIGNhbiBzd2l0Y2ggYmV0d2VlbiBkaWZmZXJlbnRcbiAgICAvLyBzZXRzIC0gaW4gdGhpcyBjYXNlIHRoZSBgaGFzX2ltZ197c2V0X25hbWV9YCBpcyBhIGJvb2xlYW4gdGhhdFxuICAgIC8vIGluZGljYXRlcyBpZiB0aGVyZSBpcyBzdWNoIGltYWdlIG9yIG5vdCBmb3IgYSBnaXZlbiBzZXQuXG4gICAgcmV0dXJuIGhhc0ltYWdlXG4gIH1cblxuICBfZW1vamlUeXBlKCkge1xuICAgIGlmICh0aGlzLl9pc0N1c3RvbSgpKSB7XG4gICAgICByZXR1cm4gJ2N1c3RvbSdcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lzTmF0aXZlKCkpIHtcbiAgICAgIHJldHVybiAnbmF0aXZlJ1xuICAgIH1cbiAgICBpZiAodGhpcy5faGFzRW1vamkoKSkge1xuICAgICAgcmV0dXJuICdpbWFnZSdcbiAgICB9XG4gICAgcmV0dXJuICdmYWxsYmFjaydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemUoZW1vamkpIHtcbiAgdmFyIHtcbiAgICAgIG5hbWUsXG4gICAgICBzaG9ydF9uYW1lcyxcbiAgICAgIHNraW5fdG9uZSxcbiAgICAgIHNraW5fdmFyaWF0aW9ucyxcbiAgICAgIGVtb3RpY29ucyxcbiAgICAgIHVuaWZpZWQsXG4gICAgICBjdXN0b20sXG4gICAgICBpbWFnZVVybCxcbiAgICB9ID0gZW1vamksXG4gICAgaWQgPSBlbW9qaS5pZCB8fCBzaG9ydF9uYW1lc1swXSxcbiAgICBjb2xvbnMgPSBgOiR7aWR9OmBcblxuICBpZiAoY3VzdG9tKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICAgIGNvbG9ucyxcbiAgICAgIGVtb3RpY29ucyxcbiAgICAgIGN1c3RvbSxcbiAgICAgIGltYWdlVXJsLFxuICAgIH1cbiAgfVxuXG4gIGlmIChza2luX3RvbmUpIHtcbiAgICBjb2xvbnMgKz0gYDpza2luLXRvbmUtJHtza2luX3RvbmV9OmBcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaWQsXG4gICAgbmFtZSxcbiAgICBjb2xvbnMsXG4gICAgZW1vdGljb25zLFxuICAgIHVuaWZpZWQ6IHVuaWZpZWQudG9Mb3dlckNhc2UoKSxcbiAgICBza2luOiBza2luX3RvbmUgfHwgKHNraW5fdmFyaWF0aW9ucyA/IDEgOiBudWxsKSxcbiAgICBuYXRpdmU6IHVuaWZpZWRUb05hdGl2ZSh1bmlmaWVkKSxcbiAgfVxufVxuIiwiaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXG5cbmNvbnN0IERFRkFVTFRTID0gW1xuICAnKzEnLFxuICAnZ3Jpbm5pbmcnLFxuICAna2lzc2luZ19oZWFydCcsXG4gICdoZWFydF9leWVzJyxcbiAgJ2xhdWdoaW5nJyxcbiAgJ3N0dWNrX291dF90b25ndWVfd2lua2luZ19leWUnLFxuICAnc3dlYXRfc21pbGUnLFxuICAnam95JyxcbiAgJ3NjcmVhbScsXG4gICdkaXNhcHBvaW50ZWQnLFxuICAndW5hbXVzZWQnLFxuICAnd2VhcnknLFxuICAnc29iJyxcbiAgJ3N1bmdsYXNzZXMnLFxuICAnaGVhcnQnLFxuICAnaGFua2V5Jyxcbl1cblxubGV0IGZyZXF1ZW50bHksIGluaXRpYWxpemVkXG5sZXQgZGVmYXVsdHMgPSB7fVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICBpbml0aWFsaXplZCA9IHRydWVcbiAgZnJlcXVlbnRseSA9IHN0b3JlLmdldCgnZnJlcXVlbnRseScpXG59XG5cbmZ1bmN0aW9uIGFkZChlbW9qaSkge1xuICBpZiAoIWluaXRpYWxpemVkKSBpbml0KClcbiAgdmFyIHsgaWQgfSA9IGVtb2ppXG5cbiAgZnJlcXVlbnRseSB8fCAoZnJlcXVlbnRseSA9IGRlZmF1bHRzKVxuICBmcmVxdWVudGx5W2lkXSB8fCAoZnJlcXVlbnRseVtpZF0gPSAwKVxuICBmcmVxdWVudGx5W2lkXSArPSAxXG5cbiAgc3RvcmUuc2V0KCdsYXN0JywgaWQpXG4gIHN0b3JlLnNldCgnZnJlcXVlbnRseScsIGZyZXF1ZW50bHkpXG59XG5cbmZ1bmN0aW9uIGdldChtYXhOdW1iZXIpIHtcbiAgaWYgKCFpbml0aWFsaXplZCkgaW5pdCgpXG4gIGlmICghZnJlcXVlbnRseSkge1xuICAgIGRlZmF1bHRzID0ge31cblxuICAgIGNvbnN0IHJlc3VsdCA9IFtdXG5cbiAgICBsZXQgZGVmYXVsdExlbmd0aCA9IE1hdGgubWluKG1heE51bWJlciwgREVGQVVMVFMubGVuZ3RoKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVmYXVsdExlbmd0aDsgaSsrKSB7XG4gICAgICBkZWZhdWx0c1tERUZBVUxUU1tpXV0gPSBwYXJzZUludCgoZGVmYXVsdExlbmd0aCAtIGkpIC8gNCwgMTApICsgMVxuICAgICAgcmVzdWx0LnB1c2goREVGQVVMVFNbaV0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgY29uc3QgcXVhbnRpdHkgPSBtYXhOdW1iZXJcbiAgY29uc3QgZnJlcXVlbnRseUtleXMgPSBbXVxuXG4gIGZvciAobGV0IGtleSBpbiBmcmVxdWVudGx5KSB7XG4gICAgaWYgKGZyZXF1ZW50bHkuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgZnJlcXVlbnRseUtleXMucHVzaChrZXkpXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc29ydGVkID0gZnJlcXVlbnRseUtleXNcbiAgICAuc29ydCgoYSwgYikgPT4gZnJlcXVlbnRseVthXSAtIGZyZXF1ZW50bHlbYl0pXG4gICAgLnJldmVyc2UoKVxuICBjb25zdCBzbGljZWQgPSBzb3J0ZWQuc2xpY2UoMCwgcXVhbnRpdHkpXG5cbiAgY29uc3QgbGFzdCA9IHN0b3JlLmdldCgnbGFzdCcpXG5cbiAgaWYgKGxhc3QgJiYgc2xpY2VkLmluZGV4T2YobGFzdCkgPT0gLTEpIHtcbiAgICBzbGljZWQucG9wKClcbiAgICBzbGljZWQucHVzaChsYXN0KVxuICB9XG5cbiAgcmV0dXJuIHNsaWNlZFxufVxuXG5leHBvcnQgZGVmYXVsdCB7IGFkZCwgZ2V0IH1cbiIsImltcG9ydCBzdHJpbmdGcm9tQ29kZVBvaW50IGZyb20gJy4uL3BvbHlmaWxscy9zdHJpbmdGcm9tQ29kZVBvaW50J1xuXG5mdW5jdGlvbiB1bmlmaWVkVG9OYXRpdmUodW5pZmllZCkge1xuICB2YXIgdW5pY29kZXMgPSB1bmlmaWVkLnNwbGl0KCctJyksXG4gICAgY29kZVBvaW50cyA9IHVuaWNvZGVzLm1hcCgodSkgPT4gYDB4JHt1fWApXG5cbiAgcmV0dXJuIHN0cmluZ0Zyb21Db2RlUG9pbnQuYXBwbHkobnVsbCwgY29kZVBvaW50cylcbn1cblxuZnVuY3Rpb24gdW5pcShhcnIpIHtcbiAgcmV0dXJuIGFyci5yZWR1Y2UoKGFjYywgaXRlbSkgPT4ge1xuICAgIGlmIChhY2MuaW5kZXhPZihpdGVtKSA9PT0gLTEpIHtcbiAgICAgIGFjYy5wdXNoKGl0ZW0pXG4gICAgfVxuICAgIHJldHVybiBhY2NcbiAgfSwgW10pXG59XG5cbmZ1bmN0aW9uIGludGVyc2VjdChhLCBiKSB7XG4gIGNvbnN0IHVuaXFBID0gdW5pcShhKVxuICBjb25zdCB1bmlxQiA9IHVuaXEoYilcblxuICByZXR1cm4gdW5pcUEuZmlsdGVyKChpdGVtKSA9PiB1bmlxQi5pbmRleE9mKGl0ZW0pID49IDApXG59XG5cbmZ1bmN0aW9uIGRlZXBNZXJnZShhLCBiKSB7XG4gIHZhciBvID0ge31cblxuICBmb3IgKGxldCBrZXkgaW4gYSkge1xuICAgIGxldCBvcmlnaW5hbFZhbHVlID0gYVtrZXldLFxuICAgICAgdmFsdWUgPSBvcmlnaW5hbFZhbHVlXG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIGtleSkpIHtcbiAgICAgIHZhbHVlID0gYltrZXldXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhbHVlID0gZGVlcE1lcmdlKG9yaWdpbmFsVmFsdWUsIHZhbHVlKVxuICAgIH1cblxuICAgIG9ba2V5XSA9IHZhbHVlXG4gIH1cblxuICByZXR1cm4gb1xufVxuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vc29uaWNkb2UvbWVhc3VyZS1zY3JvbGxiYXJcbmZ1bmN0aW9uIG1lYXN1cmVTY3JvbGxiYXIoKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT0gJ3VuZGVmaW5lZCcpIHJldHVybiAwXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgZGl2LnN0eWxlLndpZHRoID0gJzEwMHB4J1xuICBkaXYuc3R5bGUuaGVpZ2h0ID0gJzEwMHB4J1xuICBkaXYuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJ1xuICBkaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gIGRpdi5zdHlsZS50b3AgPSAnLTk5OTlweCdcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdilcbiAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBkaXYub2Zmc2V0V2lkdGggLSBkaXYuY2xpZW50V2lkdGhcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkaXYpXG5cbiAgcmV0dXJuIHNjcm9sbGJhcldpZHRoXG59XG5cbmV4cG9ydCB7IHVuaXEsIGludGVyc2VjdCwgZGVlcE1lcmdlLCB1bmlmaWVkVG9OYXRpdmUsIG1lYXN1cmVTY3JvbGxiYXIgfVxuIiwiZXhwb3J0IGNsYXNzIFBpY2tlclZpZXcge1xuICBjb25zdHJ1Y3RvcihwaWNrZXJDb21wb25lbnQpIHtcbiAgICB0aGlzLl92bSA9IHBpY2tlckNvbXBvbmVudFxuICAgIHRoaXMuX2RhdGEgPSBwaWNrZXJDb21wb25lbnQuZGF0YVxuICAgIHRoaXMuX3BlckxpbmUgPSBwaWNrZXJDb21wb25lbnQucGVyTGluZVxuXG4gICAgdGhpcy5fY2F0ZWdvcmllcyA9IFtdXG4gICAgdGhpcy5fY2F0ZWdvcmllcy5wdXNoKC4uLnRoaXMuX2RhdGEuY2F0ZWdvcmllcygpKVxuICAgIHRoaXMuX2NhdGVnb3JpZXMgPSB0aGlzLl9jYXRlZ29yaWVzLmZpbHRlcigoY2F0ZWdvcnkpID0+IHtcbiAgICAgIHJldHVybiBjYXRlZ29yeS5lbW9qaXMubGVuZ3RoID4gMFxuICAgIH0pXG5cbiAgICB0aGlzLl9jYXRlZ29yaWVzWzBdLmZpcnN0ID0gdHJ1ZVxuICAgIE9iamVjdC5mcmVlemUodGhpcy5fY2F0ZWdvcmllcylcblxuICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSB0aGlzLl9jYXRlZ29yaWVzWzBdXG4gICAgdGhpcy5zZWFyY2hFbW9qaXMgPSBudWxsXG5cbiAgICAvLyBQcmV2aWV3IGVtb2ppLCBzaG93biBvbiBtb3VzZSBvdmVyIG9yIHdoZW4gd2UgbW92ZVxuICAgIC8vIHdpdGggYXJyb3cga2V5cy5cbiAgICB0aGlzLnByZXZpZXdFbW9qaSA9IG51bGxcbiAgICAvLyBJbmRleGVzIGFyZSB1c2VkIHRvIGtlZXAgdGhlIHBvc2l0aW9uIHdoZW4gbW92aW5nXG4gICAgLy8gd2l0aCBhcnJvd3M6IGN1cnJlbnQgY2F0ZWdvcnkgYW5kIGN1cnJlbnQgZW1vamlcbiAgICAvLyBpbnNpZGUgdGhlIGNhdGVnb3J5LlxuICAgIHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggPSAwXG4gICAgdGhpcy5wcmV2aWV3RW1vamlJZHggPSAtMVxuICB9XG5cbiAgb25TY3JvbGwoKSB7XG4gICAgY29uc3Qgc2Nyb2xsRWxlbWVudCA9IHRoaXMuX3ZtLiRyZWZzLnNjcm9sbFxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHNjcm9sbEVsZW1lbnQuc2Nyb2xsVG9wXG5cbiAgICBsZXQgYWN0aXZlQ2F0ZWdvcnkgPSB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllc1swXVxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5maWx0ZXJlZENhdGVnb3JpZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2F0ZWdvcnkgPSB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllc1tpXVxuICAgICAgbGV0IGNvbXBvbmVudCA9IHRoaXMuX3ZtLmdldENhdGVnb3J5Q29tcG9uZW50KGkpXG4gICAgICAvLyBUaGUgYC01MGAgb2Zmc2V0IHN3aXRjaGVzIGFjdGl2ZSBjYXRlZ29yeSAoc2VsZWN0ZWQgaW4gdGhlXG4gICAgICAvLyBhbmNob3JzIGJhcikgYSBiaXQgZWFyaWxlciwgYmVmb3JlIGl0IGFjdHVhbGx5IHJlYWNoZXMgdGhlIHRvcC5cbiAgICAgIGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50LiRlbC5vZmZzZXRUb3AgLSA1MCA+IHNjcm9sbFRvcCkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgYWN0aXZlQ2F0ZWdvcnkgPSBjYXRlZ29yeVxuICAgIH1cbiAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gYWN0aXZlQ2F0ZWdvcnlcbiAgfVxuXG4gIGdldCBhbGxDYXRlZ29yaWVzKCkge1xuICAgIHJldHVybiB0aGlzLl9jYXRlZ29yaWVzXG4gIH1cblxuICBnZXQgZmlsdGVyZWRDYXRlZ29yaWVzKCkge1xuICAgIGlmICh0aGlzLnNlYXJjaEVtb2ppcykge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnc2VhcmNoJyxcbiAgICAgICAgICBuYW1lOiAnU2VhcmNoJyxcbiAgICAgICAgICBlbW9qaXM6IHRoaXMuc2VhcmNoRW1vamlzLFxuICAgICAgICB9LFxuICAgICAgXVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fY2F0ZWdvcmllcy5maWx0ZXIoKGNhdGVnb3J5KSA9PiB7XG4gICAgICBsZXQgaGFzRW1vamlzID0gY2F0ZWdvcnkuZW1vamlzLmxlbmd0aCA+IDBcbiAgICAgIHJldHVybiBoYXNFbW9qaXNcbiAgICB9KVxuICB9XG5cbiAgZ2V0IHByZXZpZXdFbW9qaUNhdGVnb3J5KCkge1xuICAgIGlmICh0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4ID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllc1t0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4XVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgb25BbmNob3JDbGljayhjYXRlZ29yeSkge1xuICAgIGlmICh0aGlzLnNlYXJjaEVtb2ppcykge1xuICAgICAgLy8gTm8gY2F0ZWdvcmllcyBhcmUgc2hvd24gd2hlbiBzZWFyY2ggaXMgYWN0aXZlLlxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGxldCBpID0gdGhpcy5maWx0ZXJlZENhdGVnb3JpZXMuaW5kZXhPZihjYXRlZ29yeSlcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5fdm0uZ2V0Q2F0ZWdvcnlDb21wb25lbnQoaSlcbiAgICBsZXQgc2Nyb2xsVG9Db21wb25lbnQgPSAoKSA9PiB7XG4gICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgIGxldCB0b3AgPSBjb21wb25lbnQuJGVsLm9mZnNldFRvcFxuICAgICAgICBpZiAoY2F0ZWdvcnkuZmlyc3QpIHtcbiAgICAgICAgICB0b3AgPSAwXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdm0uJHJlZnMuc2Nyb2xsLnNjcm9sbFRvcCA9IHRvcFxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5fdm0uaW5maW5pdGVTY3JvbGwpIHtcbiAgICAgIHNjcm9sbFRvQ29tcG9uZW50KClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmVDYXRlZ29yeSA9IHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzW2ldXG4gICAgfVxuICB9XG5cbiAgb25TZWFyY2godmFsdWUpIHtcbiAgICBsZXQgZW1vamlzID0gdGhpcy5fZGF0YS5zZWFyY2godmFsdWUsIHRoaXMubWF4U2VhcmNoUmVzdWx0cylcbiAgICB0aGlzLnNlYXJjaEVtb2ppcyA9IGVtb2ppc1xuXG4gICAgdGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCA9IDBcbiAgICB0aGlzLnByZXZpZXdFbW9qaUlkeCA9IDBcbiAgICB0aGlzLnVwZGF0ZVByZXZpZXdFbW9qaSgpXG4gIH1cblxuICBvbkVtb2ppRW50ZXIoZW1vamkpIHtcbiAgICB0aGlzLnByZXZpZXdFbW9qaSA9IGVtb2ppXG4gICAgdGhpcy5wcmV2aWV3RW1vamlJZHggPSAtMVxuICAgIHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggPSAtMVxuICB9XG5cbiAgb25FbW9qaUxlYXZlKGVtb2ppKSB7XG4gICAgdGhpcy5wcmV2aWV3RW1vamkgPSBudWxsXG4gIH1cblxuICBvbkFycm93TGVmdCgpIHtcbiAgICAvLyBNb3ZpbmcgbGVmdCwgZGVjcmVhc2UgZW1vamkgaW5kZXguXG4gICAgaWYgKHRoaXMucHJldmlld0Vtb2ppSWR4ID4gMCkge1xuICAgICAgdGhpcy5wcmV2aWV3RW1vamlJZHggLT0gMVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiBlbW9qaSBpbmRleCBpcyB6ZXJvLCBnbyB0byB0aGUgcHJldmlvdXMgY2F0ZWdvcnkuXG4gICAgICB0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4IC09IDFcbiAgICAgIGlmICh0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4IDwgMCkge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGZpcnN0IGNhdGVnb3J5LCBrZWVwIGl0LlxuICAgICAgICB0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4ID0gMFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVXBkYXRlIGVtb2ppIGluZGV4IC0gd2UgbW92ZWQgdG8gdGhlIHByZXZpb3VzIGNhdGVnb3J5LFxuICAgICAgICAvLyBnZXQgdGhlIGxhc3QgZW1vamkgaW4gaXQuXG4gICAgICAgIHRoaXMucHJldmlld0Vtb2ppSWR4ID1cbiAgICAgICAgICB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllc1t0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4XS5lbW9qaXMubGVuZ3RoIC1cbiAgICAgICAgICAxXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudXBkYXRlUHJldmlld0Vtb2ppKClcbiAgfVxuXG4gIG9uQXJyb3dSaWdodCgpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnByZXZpZXdFbW9qaUlkeCA8XG4gICAgICB0aGlzLmVtb2ppc0xlbmd0aCh0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4KSAtIDFcbiAgICApIHtcbiAgICAgIC8vIE1vdmluZyByaWdodCB3aXRoaW4gY2F0ZWdvcnksIGluY3JlYXNlIGVtb2ppIGluZGV4LlxuICAgICAgdGhpcy5wcmV2aWV3RW1vamlJZHggKz0gMVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBHbyB0byB0aGUgbmV4dCBjYXRlZ29yeS5cbiAgICAgIHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggKz0gMVxuICAgICAgaWYgKHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggPj0gdGhpcy5maWx0ZXJlZENhdGVnb3JpZXMubGVuZ3RoKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgdGhlIGxhc3QgY2F0ZWdvcnkgLSBrZWVwIGl0LlxuICAgICAgICB0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4ID0gdGhpcy5maWx0ZXJlZENhdGVnb3JpZXMubGVuZ3RoIC0gMVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgd2UgbW92ZWQgdG8gdGhlIG5leHQgY2F0ZWdvcnksIHVwZGF0ZSBlbW9qaSBpbmRleCB0byB0aGVcbiAgICAgICAgLy8gZmlyc3QgZW1vamkgaW4gdGhlIG5ldyBjYXRlZ29yeS5cbiAgICAgICAgdGhpcy5wcmV2aWV3RW1vamlJZHggPSAwXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudXBkYXRlUHJldmlld0Vtb2ppKClcbiAgfVxuXG4gIG9uQXJyb3dEb3duKCkge1xuICAgIC8vIElmIHdlIGFyZSBvdXQgb2YgdGhlIGVtb2ppIGNvbnRyb2wgKGluZGV4IGlzIC0xKSwgc2VsZWN0IHRoZSBmaXJzdFxuICAgIC8vIGVtb2ppIGluIHRoZSBmaXJzdCBjYXRlZ29yeSBieSBjYWxsaW5nIGBvbkFycm93UmlnaHRgLlxuICAgIGlmICh0aGlzLnByZXZpZXdFbW9qaUlkeCA9PSAtMSkge1xuICAgICAgcmV0dXJuIHRoaXMub25BcnJvd1JpZ2h0KClcbiAgICB9XG5cbiAgICBjb25zdCBjYXRlZ29yeUxlbmd0aCA9XG4gICAgICB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllc1t0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4XS5lbW9qaXMubGVuZ3RoXG5cbiAgICAvLyBXaGVuIG1vdmluZyBkb3duLCB3ZSBjYW4gbW92ZSBgX3BlckxpbmVgIGljb25zIHJpZ2h0IHRvXG4gICAgLy8ganVtcCB0byB0aGUgc2FtZSBwb3NpdGlvbiBpbiB0aGUgbmV4dCByb3cuXG4gICAgbGV0IGRpZmYgPSB0aGlzLl9wZXJMaW5lXG5cbiAgICAvLyBUT0RPOiBwcmV2aWV3Q2F0ZWdvcnkgc2hvdWxkIG1hdGNoIGFjdGl2ZUNhdGVnb3J5XG4gICAgLy8gKHNvIGl0IHdvdWxkIGJlIGJvdGggaGlnaGxpZ2h0ZWQgaW4gVUkgYW5kIHVzZWRcbiAgICAvLyB3aGVuIHdlIHN0YXJ0IG1vdmluZyB3aXRoIGFycm93cyBhZnRlciBjbGlja2luZ1xuICAgIC8vIHRoZSBjYXRlZ29yeSkuXG5cbiAgICAvLyBOb3RlOiBwcm9iYWJseSB3ZSBjYW4gYWx3YXN5IHRha2UgY3VycmVudCByb3cgbGVuZ3RoXG4gICAgLy8gYXMgYSBgZGlmZmAgLSBpdCB3aWxsIGZpdCBib3RoIGNhc2Ugb2YgYW55IHJvdyBhbmRcbiAgICAvLyBzcGVjaWFsIGNhc2Ugb2YgdGhlIGxhc3Qgcm93LlxuICAgIC8vIE5vdGU6IGl0IGNhbiBiZSBhbHNvIGVhc2llciB0byB1cGRhdGUgaW5kZXhlc1xuICAgIC8vIGRpcmVjdGx5IGhlcmUgaW5zdGVhZCBvZiBjYWxsaW5nIG9uQXJyb3dSaWdodC5cbiAgICAvLyBTYW1lIGlzIHRydWUgZm9yIGBvbkFycm93VXBgLlxuXG4gICAgLy8gVW5sZXNzIGlmIHdlIGFyZSBvbiB0aGUgbGFzdCByb3cgb2YgdGhlIGNhdGVnb3J5IGFuZFxuICAgIC8vIHRoZXJlIGFyZSBsZXNzIHRoZW4gYF9wZXJMaW5lYCBlbW9qaXMgaW4gaXQuXG4gICAgLy8gSW4gdGhpcyBjYXNlIHdlIHVzZSB0aGUgbGFzdCByb3cgbGVuZ3RoIGFzIGRpZmZcbiAgICAvLyBzbyB3ZSBnbyBzdHJhaWdodCBkb3duLCBmb3IgZXhhbXBsZTpcbiAgICAvL1xuICAgIC8vICAgMSAyIDMgNCA1IDZcbiAgICAvLyAgIDcgOCA5XG4gICAgLy8gICBBIEIgQyBEIEUgRlxuICAgIC8vXG4gICAgLy8gSWYgd2UgZ28gZG93biBmcm9tIGA4YCwgd2UgbmVlZCB0byBtb3ZlIDMgZW1vamlzIHJpZ2h0XG4gICAgLy8gdG8gbGVuZCBhdCBgQmAgKGFuZCAzIGlzIHRoZSBsZW5ndGggb2YgdGhlIGxhc3Qgcm93IG9mXG4gICAgLy8gdGhpcyBjYXRlZ29yeSkuXG4gICAgLy8gQW5kIGlmIHdlIHVzZWQgNiBpbnN0ZWFkIChyb3cgbGVuZ3RoLCBgX3BlckxpbmVgKSwgd2Ugd291bGRcbiAgICAvLyBsZW5kIHVwIGF0IGBFYC5cbiAgICBpZiAodGhpcy5wcmV2aWV3RW1vamlJZHggKyBkaWZmID4gY2F0ZWdvcnlMZW5ndGgpIHtcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbGFzdCByb3cgbGVuZ3RoLlxuICAgICAgZGlmZiA9IGNhdGVnb3J5TGVuZ3RoICUgdGhpcy5fcGVyTGluZVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpZmY7IGkrKykge1xuICAgICAgdGhpcy5vbkFycm93UmlnaHQoKVxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVByZXZpZXdFbW9qaSgpXG4gIH1cblxuICBvbkFycm93VXAoKSB7XG4gICAgLy8gU2ltaWxhciB0byBgb25BcnJvd0Rvd25gLCB0byBtb3ZlIHVwIHdlIGNhbiBtb3ZlIGxlZnRcbiAgICAvLyBieSBgX3BlckxpbmVgIG51bWJlciBvZiBlbW9qaXMuXG4gICAgbGV0IGRpZmYgPSB0aGlzLl9wZXJMaW5lXG5cbiAgICBpZiAodGhpcy5wcmV2aWV3RW1vamlJZHggLSBkaWZmIDwgMCkge1xuICAgICAgaWYgKHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggPiAwKSB7XG4gICAgICAgIC8vIFVubGVzcyBpZiB3ZSBhcmUgb24gdGhlIGZpcnN0IGxpbmUgb2YgdGhlIGNhdGVnb3J5IGFuZFxuICAgICAgICAvLyB0aGUgbGFzdCBsaW5lIGluIHRoZSBwcmV2aW91cyBjYXRlZ29yeSBpcyBzaG9ydGVyIHRoYW5cbiAgICAgICAgLy8gYF9wZXJMaW5lYC5cbiAgICAgICAgLy8gSW4gdGhpcyBjYXNlIHdlIHVzZSB0aGUgbGFzdCByb3cgbGVuZ3RoIGFzIGRpZmYsIHNvXG4gICAgICAgIC8vIHdlIGdvIHN0cmFpZ2h0IHVwLCBmb3IgZXhhbXBsZTpcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAxIDIgMyA0IDVcbiAgICAgICAgLy8gICA2IDcgOFxuICAgICAgICAvLyAgIDkgQSBCIEMgRFxuICAgICAgICAvL1xuICAgICAgICAvLyBJZiB3ZSBnbyB1cCBmcm9tIGBBYCwgd2UgbmVlZCB0byBtb3ZlIDMgZW1vamlzIGxlZnQgdG8gZ2V0XG4gICAgICAgIC8vIHRvIGA3YCAoYW5kIDMgaXMgdGhlIGxlbmd0aCBvZiB0aGUgbGFzdCByb3cgb2YgdGhlIHByZXZpb3VzXG4gICAgICAgIC8vIGNhdGVnb3J5KS5cbiAgICAgICAgY29uc3QgcHJldkNhdGVnb3J5TGFzdFJvd0xlbmd0aCA9XG4gICAgICAgICAgdGhpcy5maWx0ZXJlZENhdGVnb3JpZXNbdGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCAtIDFdLmVtb2ppc1xuICAgICAgICAgICAgLmxlbmd0aCAlIHRoaXMuX3BlckxpbmVcbiAgICAgICAgLy8gZGlmZiA9IHRoaXMucHJldmlld0Vtb2ppSWR4ICsgcHJldkNhdGVnb3J5TGFzdFJvd0xlbmd0aFxuICAgICAgICBkaWZmID0gcHJldkNhdGVnb3J5TGFzdFJvd0xlbmd0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlmZiA9IDBcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWZmOyBpKyspIHtcbiAgICAgIHRoaXMub25BcnJvd0xlZnQoKVxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVByZXZpZXdFbW9qaSgpXG4gIH1cblxuICB1cGRhdGVQcmV2aWV3RW1vamkoKSB7XG4gICAgdGhpcy5wcmV2aWV3RW1vamkgPVxuICAgICAgdGhpcy5maWx0ZXJlZENhdGVnb3JpZXNbdGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeF0uZW1vamlzW1xuICAgICAgICB0aGlzLnByZXZpZXdFbW9qaUlkeFxuICAgICAgXVxuXG4gICAgdGhpcy5fdm0uJG5leHRUaWNrKCgpID0+IHtcbiAgICAgIC8vIFNjcm9sbCB0aGUgdmlldyBpZiB0aGUgYHByZXZpZXdFbW9qaWAgZ29lcyBvdXQgb2YgdGhlIHZpc2libGUgYXJlYS5cbiAgICAgIGNvbnN0IHNjcm9sbEVsID0gdGhpcy5fdm0uJHJlZnMuc2Nyb2xsXG5cbiAgICAgIC8vIE5vdGU6IGl0IHdvdWxkIGJlIG1vcmUgVnVlLWlzaCB0byBtYXJrIGFsbCBlbW9qaXMgd2l0aCBgcmVmYHNcbiAgICAgIC8vIGFuZCB0aGVuIGRvIHNvbWV0aGluZyBzaW1pbGFyIGhlcmUgdG8gd2hhdCB3ZSBkbyBpbiB0aGVcbiAgICAgIC8vIGBnZXRDYXRlZ29yaWVzYCBpbnN0ZWFkIG9mIHVzaW5nIGBxdWVyeVNlbGVjdG9yYCBkaXJlY3RseSxcbiAgICAgIC8vIGJ1dCBJIGFtIG5vdCBzdXJlIGlmIGhhdmluZyBtYW55IHJlZnMgd291bGQgYWZmZWN0IHRoZSBwZXJmb3JtYW5jZVxuICAgICAgLy8gKGl0IG1pZ2h0LCBzbyBJIHVzZSBgcXVlcnlTZWxlY3RvcmAgZm9yIG5vdykuXG4gICAgICBjb25zdCBlbW9qaUVsID0gc2Nyb2xsRWwucXVlcnlTZWxlY3RvcignLmVtb2ppLW1hcnQtZW1vamktc2VsZWN0ZWQnKVxuXG4gICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSBzY3JvbGxFbC5vZmZzZXRUb3AgLSBzY3JvbGxFbC5vZmZzZXRIZWlnaHRcbiAgICAgIGlmIChcbiAgICAgICAgZW1vamlFbCAmJlxuICAgICAgICBlbW9qaUVsLm9mZnNldFRvcCArIGVtb2ppRWwub2Zmc2V0SGVpZ2h0ID5cbiAgICAgICAgICBzY3JvbGxIZWlnaHQgKyBzY3JvbGxFbC5zY3JvbGxUb3BcbiAgICAgICkge1xuICAgICAgICBzY3JvbGxFbC5zY3JvbGxUb3AgKz0gZW1vamlFbC5vZmZzZXRIZWlnaHRcbiAgICAgIH1cbiAgICAgIGlmIChlbW9qaUVsICYmIGVtb2ppRWwub2Zmc2V0VG9wIDwgc2Nyb2xsRWwuc2Nyb2xsVG9wKSB7XG4gICAgICAgIHNjcm9sbEVsLnNjcm9sbFRvcCAtPSBlbW9qaUVsLm9mZnNldEhlaWdodFxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBlbW9qaXNMZW5ndGgoY2F0ZWdvcnlJZHgpIHtcbiAgICBpZiAoY2F0ZWdvcnlJZHggPT0gLTEpIHtcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllc1tjYXRlZ29yeUlkeF0uZW1vamlzLmxlbmd0aFxuICB9XG59XG4iLCJjb25zdCBFbW9qaVByb3BzID0ge1xuICBuYXRpdmU6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICB9LFxuICB0b29sdGlwOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAgZmFsbGJhY2s6IHtcbiAgICB0eXBlOiBGdW5jdGlvbixcbiAgfSxcbiAgc2tpbjoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAxLFxuICB9LFxuICBzZXQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ2FwcGxlJyxcbiAgfSxcbiAgZW1vamk6IHtcbiAgICB0eXBlOiBbU3RyaW5nLCBPYmplY3RdLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9LFxuICBzaXplOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IG51bGwsXG4gIH0sXG4gIHRhZzoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnc3BhbicsXG4gIH0sXG59XG5cbmNvbnN0IFBpY2tlclByb3BzID0ge1xuICBwZXJMaW5lOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDksXG4gIH0sXG4gIG1heFNlYXJjaFJlc3VsdHM6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogNzUsXG4gIH0sXG4gIGVtb2ppU2l6ZToge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAyNCxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ0Vtb2ppIE1hcnTihKInLFxuICB9LFxuICBlbW9qaToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnZGVwYXJ0bWVudF9zdG9yZScsXG4gIH0sXG4gIGNvbG9yOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICcjYWU2NWM1JyxcbiAgfSxcbiAgc2V0OiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdhcHBsZScsXG4gIH0sXG4gIHNraW46IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogbnVsbCxcbiAgfSxcbiAgZGVmYXVsdFNraW46IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMSxcbiAgfSxcbiAgbmF0aXZlOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAgZW1vamlUb29sdGlwOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAgYXV0b0ZvY3VzOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAgaTE4bjoge1xuICAgIHR5cGU6IE9iamVjdCxcbiAgICBkZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfSxcbiAgfSxcbiAgc2hvd1ByZXZpZXc6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IHRydWUsXG4gIH0sXG4gIHNob3dTZWFyY2g6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IHRydWUsXG4gIH0sXG4gIHNob3dDYXRlZ29yaWVzOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiB0cnVlLFxuICB9LFxuICBzaG93U2tpblRvbmVzOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiB0cnVlLFxuICB9LFxuICBpbmZpbml0ZVNjcm9sbDoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogdHJ1ZSxcbiAgfSxcbiAgcGlja2VyU3R5bGVzOiB7XG4gICAgdHlwZTogT2JqZWN0LFxuICAgIGRlZmF1bHQoKSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9LFxuICB9LFxufVxuXG5leHBvcnQgeyBFbW9qaVByb3BzLCBQaWNrZXJQcm9wcyB9XG4iLCJ2YXIgTkFNRVNQQUNFID0gJ2Vtb2ppLW1hcnQnXG5cbmNvbnN0IF9KU09OID0gSlNPTlxuXG52YXIgaXNMb2NhbFN0b3JhZ2VTdXBwb3J0ZWQgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnbG9jYWxTdG9yYWdlJyBpbiB3aW5kb3dcblxubGV0IGdldHRlclxubGV0IHNldHRlclxuXG5mdW5jdGlvbiBzZXRIYW5kbGVycyhoYW5kbGVycykge1xuICBoYW5kbGVycyB8fCAoaGFuZGxlcnMgPSB7fSlcblxuICBnZXR0ZXIgPSBoYW5kbGVycy5nZXR0ZXJcbiAgc2V0dGVyID0gaGFuZGxlcnMuc2V0dGVyXG59XG5cbmZ1bmN0aW9uIHNldE5hbWVzcGFjZShuYW1lc3BhY2UpIHtcbiAgTkFNRVNQQUNFID0gbmFtZXNwYWNlXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZShzdGF0ZSkge1xuICBmb3IgKGxldCBrZXkgaW4gc3RhdGUpIHtcbiAgICBsZXQgdmFsdWUgPSBzdGF0ZVtrZXldXG4gICAgc2V0KGtleSwgdmFsdWUpXG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgaWYgKHNldHRlcikge1xuICAgIHNldHRlcihrZXksIHZhbHVlKVxuICB9IGVsc2Uge1xuICAgIGlmICghaXNMb2NhbFN0b3JhZ2VTdXBwb3J0ZWQpIHJldHVyblxuICAgIHRyeSB7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlW2Ake05BTUVTUEFDRX0uJHtrZXl9YF0gPSBfSlNPTi5zdHJpbmdpZnkodmFsdWUpXG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXQoa2V5KSB7XG4gIGlmIChnZXR0ZXIpIHtcbiAgICByZXR1cm4gZ2V0dGVyKGtleSlcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWlzTG9jYWxTdG9yYWdlU3VwcG9ydGVkKSByZXR1cm5cbiAgICB0cnkge1xuICAgICAgdmFyIHZhbHVlID0gd2luZG93LmxvY2FsU3RvcmFnZVtgJHtOQU1FU1BBQ0V9LiR7a2V5fWBdXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWx1ZSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgeyB1cGRhdGUsIHNldCwgZ2V0LCBzZXROYW1lc3BhY2UsIHNldEhhbmRsZXJzIH1cbiIsIi8vIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4vLyBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG5cbi8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcblxuLy8gTUlUIGxpY2Vuc2VcblxudmFyIGlzV2luZG93QXZhaWxhYmxlID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcblxuaXNXaW5kb3dBdmFpbGFibGUgJiZcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGFzdFRpbWUgPSAwXG4gICAgdmFyIHZlbmRvcnMgPSBbJ21zJywgJ21veicsICd3ZWJraXQnLCAnbyddXG5cbiAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3gpIHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPVxuICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXVxuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID1cbiAgICAgICAgd2luZG93W3ZlbmRvcnNbeF0gKyAnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXSB8fFxuICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArICdDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXVxuICAgIH1cblxuICAgIGlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSlcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSlcbiAgICAgICAgdmFyIGlkID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbClcbiAgICAgICAgfSwgdGltZVRvQ2FsbClcblxuICAgICAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbFxuICAgICAgICByZXR1cm4gaWRcbiAgICAgIH1cblxuICAgIGlmICghd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKVxuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChpZClcbiAgICAgIH1cbiAgfSkoKVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9FbW9qaS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTM0YWQ5NDZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9FbW9qaS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vRW1vamkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy95YW5nZ3Vhbmd6aGFvL0RvY3VtZW50cy9wcm9qZWN0cy9lbW9qaS1tYXJ0LXZ1ZS1mYXN0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzUzNGFkOTQ2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzUzNGFkOTQ2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzUzNGFkOTQ2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9FbW9qaS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTM0YWQ5NDZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1MzRhZDk0NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvRW1vamkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQxNmU5MDg0XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUGlja2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy95YW5nZ3Vhbmd6aGFvL0RvY3VtZW50cy9wcm9qZWN0cy9lbW9qaS1tYXJ0LXZ1ZS1mYXN0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2QxNmU5MDg0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2QxNmU5MDg0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2QxNmU5MDg0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQxNmU5MDg0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZDE2ZTkwODQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL1BpY2tlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxMTg4MTA0XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYW5jaG9ycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vYW5jaG9ycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3lhbmdndWFuZ3poYW8vRG9jdW1lbnRzL3Byb2plY3RzL2Vtb2ppLW1hcnQtdnVlLWZhc3Qvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTExODgxMDQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTExODgxMDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTExODgxMDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxMTg4MTA0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTExODgxMDQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL2FuY2hvcnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mzc2Y2RhMGVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy95YW5nZ3Vhbmd6aGFvL0RvY3VtZW50cy9wcm9qZWN0cy9lbW9qaS1tYXJ0LXZ1ZS1mYXN0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzM3NmNkYTBlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzM3NmNkYTBlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzM3NmNkYTBlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mzc2Y2RhMGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczNzZjZGEwZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvY2F0ZWdvcnkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNTA1NmMzMFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy95YW5nZ3Vhbmd6aGFvL0RvY3VtZW50cy9wcm9qZWN0cy9lbW9qaS1tYXJ0LXZ1ZS1mYXN0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzM1MDU2YzMwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzM1MDU2YzMwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzM1MDU2YzMwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNTA1NmMzMFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzM1MDU2YzMwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9wcmV2aWV3LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vc2VhcmNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YWQ0MWJiOFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMveWFuZ2d1YW5nemhhby9Eb2N1bWVudHMvcHJvamVjdHMvZW1vamktbWFydC12dWUtZmFzdC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0YWQ0MWJiOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0YWQ0MWJiOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0YWQ0MWJiOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc2VhcmNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YWQ0MWJiOFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzRhZDQxYmI4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9zZWFyY2gudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9za2lucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWM2MTQ4OTRcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9za2lucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy95YW5nZ3Vhbmd6aGFvL0RvY3VtZW50cy9wcm9qZWN0cy9lbW9qaS1tYXJ0LXZ1ZS1mYXN0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzFjNjE0ODk0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzFjNjE0ODk0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzFjNjE0ODk0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9za2lucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWM2MTQ4OTRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxYzYxNDg5NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvc2tpbnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Vtb2ppLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRW1vamkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGlja2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGlja2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2UhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcHJldmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NraW5zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Vtb2ppLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MzRhZDk0NlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2UhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQxNmU5MDg0XCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxMTg4MTA0XCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNzZjZGEwZVwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2UhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNTA1NmMzMFwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2UhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhZDQxYmI4XCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NraW5zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYzYxNDg5NFwiIiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqLyxcbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID1cbiAgICB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJyA/IHNjcmlwdEV4cG9ydHMub3B0aW9ucyA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikge1xuICAgIC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgKG9wdGlvbnMuZnVuY3Rpb25hbCA/IHRoaXMucGFyZW50IDogdGhpcykuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmcgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcbiAgcmV0dXJuIGFycjI7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiaW1wb3J0IHRvUHJvcGVydHlLZXkgZnJvbSBcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImltcG9ydCB0b1Byb3BlcnR5S2V5IGZyb20gXCIuL3RvUHJvcGVydHlLZXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAga2V5ID0gdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvUHJpbWl0aXZlKHQsIHIpIHtcbiAgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7XG4gIHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAodm9pZCAwICE9PSBlKSB7XG4gICAgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5pbXBvcnQgdG9QcmltaXRpdmUgZnJvbSBcIi4vdG9QcmltaXRpdmUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvUHJvcGVydHlLZXkodCkge1xuICB2YXIgaSA9IHRvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IGkgKyBcIlwiO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIF90eXBlb2Yobyk7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHN0b3JlIGZyb20gJy4vdXRpbHMvc3RvcmUnXG5pbXBvcnQgeyB1bmNvbXByZXNzIH0gZnJvbSAnLi91dGlscy9kYXRhJ1xuaW1wb3J0IGZyZXF1ZW50bHkgZnJvbSAnLi91dGlscy9mcmVxdWVudGx5J1xuXG5leHBvcnQge1xuICBQaWNrZXIsXG4gIEVtb2ppLFxuICBBbmNob3JzLFxuICBQcmV2aWV3LFxuICBTZWFyY2gsXG4gIENhdGVnb3J5LFxuICBTa2lucyxcbn0gZnJvbSAnLi9jb21wb25lbnRzJ1xuXG5leHBvcnQgeyBFbW9qaUluZGV4LCBFbW9qaVZpZXcsIEVtb2ppRGF0YSwgc2FuaXRpemUgfSBmcm9tICcuL3V0aWxzL2Vtb2ppLWRhdGEnXG5leHBvcnQgeyB1bmNvbXByZXNzLCBzdG9yZSwgZnJlcXVlbnRseSB9XG4iXSwibmFtZXMiOlsiRW1vamlQcm9wcyIsIkVtb2ppVmlldyIsInByb3BzIiwiX29iamVjdFNwcmVhZCIsImRhdGEiLCJ0eXBlIiwiT2JqZWN0IiwicmVxdWlyZWQiLCJlbWl0cyIsImNvbXB1dGVkIiwidmlldyIsImVtb2ppT2JqZWN0Iiwic2tpbiIsInNldCIsIm5hdGl2ZSIsImZhbGxiYWNrIiwidG9vbHRpcCIsInNpemUiLCJzYW5pdGl6ZWREYXRhIiwiX3Nhbml0aXplZCIsInRpdGxlIiwic2hvcnRfbmFtZSIsImVtb2ppIiwiZmluZEVtb2ppIiwiY3JlYXRlZCIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiJGVtaXQiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJzdG9yZSIsImZyZXF1ZW50bHkiLCJkZWVwTWVyZ2UiLCJtZWFzdXJlU2Nyb2xsYmFyIiwiUGlja2VyUHJvcHMiLCJQaWNrZXJWaWV3IiwiQW5jaG9ycyIsIkNhdGVnb3J5IiwiUHJldmlldyIsIlNlYXJjaCIsIkkxOE4iLCJzZWFyY2giLCJub3Rmb3VuZCIsImNhdGVnb3JpZXMiLCJyZWNlbnQiLCJzbWlsZXlzIiwicGVvcGxlIiwibmF0dXJlIiwiZm9vZHMiLCJhY3Rpdml0eSIsInBsYWNlcyIsIm9iamVjdHMiLCJzeW1ib2xzIiwiZmxhZ3MiLCJjdXN0b20iLCJhY3RpdmVTa2luIiwiZ2V0IiwiZGVmYXVsdFNraW4iLCJjdXN0b21TdHlsZXMiLCJ3aWR0aCIsImNhbGN1bGF0ZVdpZHRoIiwicGlja2VyU3R5bGVzIiwiZW1vamlQcm9wcyIsImVtb2ppVG9vbHRpcCIsImVtb2ppU2l6ZSIsInNlbGVjdGVkRW1vamkiLCJwcmV2aWV3RW1vamkiLCJzZWxlY3RlZEVtb2ppQ2F0ZWdvcnkiLCJwcmV2aWV3RW1vamlDYXRlZ29yeSIsIm9uRW50ZXIiLCJvbkVtb2ppRW50ZXIiLCJiaW5kIiwib25MZWF2ZSIsIm9uRW1vamlMZWF2ZSIsIm9uRW1vamlDbGljayIsInNraW5Qcm9wcyIsInBlckxpbmUiLCJmaWx0ZXJlZENhdGVnb3JpZXMiLCJtZXJnZWRJMThuIiwiZnJlZXplIiwiaTE4biIsImlkbGVFbW9qaSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJmaXJzdEVtb2ppIiwiaXNTZWFyY2hpbmciLCJzZWFyY2hFbW9qaXMiLCJ3YXRjaCIsIm9uU2tpbkNoYW5nZSIsIm9uU2Nyb2xsIiwiaW5maW5pdGVTY3JvbGwiLCJ3YWl0aW5nRm9yUGFpbnQiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvblNjcm9sbFBhaW50Iiwib25BbmNob3JDbGljayIsImNhdGVnb3J5Iiwib25TZWFyY2giLCJ2YWx1ZSIsIm9uQXJyb3dMZWZ0IiwiJGV2ZW50Iiwib2xkSWR4IiwicHJldmlld0Vtb2ppSWR4IiwicHJldmVudERlZmF1bHQiLCJvbkFycm93UmlnaHQiLCJvbkFycm93RG93biIsIm9uQXJyb3dVcCIsImFkZCIsInVwZGF0ZVJlY2VudENhdGVnb3J5Iiwib25UZXh0U2VsZWN0Iiwic3RvcFByb3BhZ2F0aW9uIiwidXBkYXRlIiwiZ2V0Q2F0ZWdvcnlDb21wb25lbnQiLCJpbmRleCIsImNvbXBvbmVudCIsIiRyZWZzIiwiY29tcG9uZW50cyIsInN2Z3MiLCJjb2xvciIsIlN0cmluZyIsIkFycmF5IiwiYWN0aXZlQ2F0ZWdvcnkiLCJkZWZhdWx0IiwiX2RlZmF1bHQiLCJFbW9qaSIsImlkIiwibmFtZSIsImVtb2ppcyIsImFjdGl2ZUNsYXNzIiwiaXNWaXNpYmxlIiwiaXNTZWFyY2giLCJoYXNSZXN1bHRzIiwibGVuZ3RoIiwiZW1vamlPYmplY3RzIiwiX3RoaXMiLCJtYXAiLCJlbW9qaVZpZXciLCJTa2lucyIsInNob3dTa2luVG9uZXMiLCJCb29sZWFuIiwiRnVuY3Rpb24iLCJlbW9qaURhdGEiLCJlbW9qaVNob3J0TmFtZXMiLCJzaG9ydF9uYW1lcyIsImVtb2ppRW1vdGljb25zIiwiZW1vdGljb25zIiwiYXV0b0ZvY3VzIiwiZW1vamlJbmRleCIsImNsZWFyIiwibW91bnRlZCIsIiRpbnB1dCIsIiRlbCIsInF1ZXJ5U2VsZWN0b3IiLCJmb2N1cyIsIk51bWJlciIsIm9wZW5lZCIsInNraW5Ub25lIiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsImNhblJlbmRlciIsInRhZyIsInN0YXRpY0NsYXNzIiwiYXR0cnMiLCJhcmlhTGFiZWwiLCJvbiIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwiY2xpY2siLCJjbGFzcyIsImNzc0NsYXNzIiwic3R5bGUiLCJjc3NTdHlsZSIsIl92IiwiX3MiLCJjb250ZW50IiwiX2UiLCJzdGF0aWNSZW5kZXJGbnMiLCJfd2l0aFN0cmlwcGVkIiwic2hvd0NhdGVnb3JpZXMiLCJhbGxDYXRlZ29yaWVzIiwiX3QiLCJzaG93U2VhcmNoIiwicmVmIiwiYXJyb3dMZWZ0IiwiYXJyb3dSaWdodCIsImFycm93RG93biIsImFycm93VXAiLCJlbnRlciIsInNlbGVjdCIsInJvbGUiLCJzY3JvbGwiLCJfbCIsImlkeCIsImRpcmVjdGl2ZXMiLCJyYXdOYW1lIiwiZXhwcmVzc2lvbiIsImtleSIsInJlZkluRm9yIiwic2hvd1ByZXZpZXciLCJkb21Qcm9wcyIsImlubmVySFRNTCIsImJhY2tncm91bmRDb2xvciIsIl9yZWYiLCJnZXRFbW9qaSIsInNob3J0TmFtZSIsImVtb3RpY29uIiwiY2hhbmdlIiwicGxhY2Vob2xkZXIiLCJrZXlkb3duIiwiaW5kZXhPZiIsIl9rIiwia2V5Q29kZSIsImJ1dHRvbiIsImFwcGx5IiwiYXJndW1lbnRzIiwiaW5wdXQiLCJ0YXJnZXQiLCJjb21wb3NpbmciLCJQaWNrZXIiLCJfU3RyaW5nIiwiZnJvbUNvZGVQb2ludCIsInN0cmluZ0Zyb21Db2RlUG9pbnQiLCJNQVhfU0laRSIsImNvZGVVbml0cyIsImhpZ2hTdXJyb2dhdGUiLCJsb3dTdXJyb2dhdGUiLCJyZXN1bHQiLCJjb2RlUG9pbnQiLCJpc0Zpbml0ZSIsIk1hdGgiLCJmbG9vciIsIlJhbmdlRXJyb3IiLCJwdXNoIiwiZnJvbUNoYXJDb2RlIiwiU1ZHcyIsIm1hcHBpbmciLCJ1bmlmaWVkIiwibm9uX3F1YWxpZmllZCIsImhhc19pbWdfYXBwbGUiLCJoYXNfaW1nX2dvb2dsZSIsImhhc19pbWdfdHdpdHRlciIsImhhc19pbWdfZmFjZWJvb2siLCJrZXl3b3JkcyIsInNoZWV0IiwidGV4dCIsImFkZGVkX2luIiwiYnVpbGRTZWFyY2giLCJhZGRUb1NlYXJjaCIsInN0cmluZ3MiLCJzcGxpdCIsImlzQXJyYXkiLCJmb3JFYWNoIiwic3RyaW5nIiwicyIsInRvTG93ZXJDYXNlIiwiam9pbiIsImRlZXBGcmVlemUiLCJvYmplY3QiLCJwcm9wTmFtZXMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsIm4iLCJkb25lIiwiX3R5cGVvZiIsImVyciIsImYiLCJ1bmNvbXByZXNzIiwiY29tcHJlc3NlZCIsInVuc2hpZnQiLCJzaGVldF94Iiwic2hlZXRfeSIsInRvRml4ZWQiLCJpbnRlcnNlY3QiLCJ1bmlmaWVkVG9OYXRpdmUiLCJTSEVFVF9DT0xVTU5TIiwiQ09MT05TX1JFR0VYIiwiU0tJTlMiLCJFbW9qaUluZGV4IiwidW5kZWZpbmVkIiwiZW1vamlzVG9TaG93RmlsdGVyIiwiaW5jbHVkZSIsImV4Y2x1ZGUiLCJfcmVmJHJlY2VudExlbmd0aCIsInJlY2VudExlbmd0aCIsIl9jbGFzc0NhbGxDaGVjayIsIl9kYXRhIiwiX2Vtb2ppc0ZpbHRlciIsIl9pbmNsdWRlIiwiX2V4Y2x1ZGUiLCJfY3VzdG9tIiwiX2Vtb2ppcyIsIl9uYXRpdmVFbW9qaXMiLCJfZW1vdGljb25zIiwiX2NhdGVnb3JpZXMiLCJfcmVjZW50Q2F0ZWdvcnkiLCJfY3VzdG9tQ2F0ZWdvcnkiLCJfc2VhcmNoSW5kZXgiLCJidWlsZEluZGV4IiwiX2NyZWF0ZUNsYXNzIiwiZmlsdGVyIiwiaXRlbSIsImluY2x1ZGVzIiwic29ydCIsImEiLCJiIiwiaW5kZXhBIiwiaW5kZXhCIiwiY2F0ZWdvcnlEYXRhIiwiaXNDYXRlZ29yeU5lZWRlZCIsImVtb2ppSWQiLCJhZGRFbW9qaSIsImN1c3RvbUVtb2ppIiwiYWRkQ3VzdG9tRW1vamkiLCJtYXRjaGVzIiwibWF0Y2giLCJwYXJzZUludCIsImFsaWFzZXMiLCJoYXNPd25Qcm9wZXJ0eSIsImdldFNraW4iLCJFcnJvciIsImtleXMiLCJoYXNFbW9qaSIsIm5hdGl2ZUVtb2ppIiwidW5pY29kZUVtb2ppIiwibWF4UmVzdWx0cyIsIl90aGlzMiIsInZhbHVlcyIsImFsbFJlc3VsdHMiLCJjdXJyZW50SW5kZXgiLCJfbG9vcCIsImNoYXIiLCJjaGFySW5kZXgiLCJyZXN1bHRzIiwic2NvcmVzIiwic3ViIiwic3Vic3RyIiwic3ViSW5kZXgiLCJzY29yZSIsImFTY29yZSIsImJTY29yZSIsInNsaWNlIiwiYXNzaWduIiwiRW1vamlEYXRhIiwiX3RoaXMzIiwiaXNFbW9qaU5lZWRlZCIsIl9za2lucyIsImNhdGVnb3J5X2lkIiwiaXNJbmNsdWRlZCIsImlzRXhjbHVkZWQiLCJfdGhpczQiLCJyZWNlbnRFbW9qaXMiLCJuZXdSZWNlbnRFbW9qaXMiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwic2tpbl92YXJpYXRpb25zIiwic2tpbklkeCIsInNraW5LZXkiLCJ2YXJpYXRpb25EYXRhIiwic2tpbkRhdGEiLCJrIiwic2FuaXRpemUiLCJnZXRQb3NpdGlvbiIsImFkanVzdGVkQ29sdW1ucyIsIngiLCJ5IiwiY29uY2F0IiwiX2Vtb2ppIiwiX25hdGl2ZSIsIl9za2luIiwiX3NldCIsIl9mYWxsYmFjayIsIl9jYW5SZW5kZXIiLCJfY3NzQ2xhc3MiLCJfY3NzU3R5bGUiLCJfY29udGVudCIsIl9pc0N1c3RvbSIsIl9pc05hdGl2ZSIsIl9oYXNFbW9qaSIsIl9lbW9qaVR5cGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJpbWFnZVVybCIsImJhY2tncm91bmRTaXplIiwiaGVpZ2h0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiZm9udFNpemUiLCJyb3VuZCIsImhhc0ltYWdlIiwic2tpbl90b25lIiwiY29sb25zIiwiREVGQVVMVFMiLCJpbml0aWFsaXplZCIsImRlZmF1bHRzIiwiaW5pdCIsIm1heE51bWJlciIsImRlZmF1bHRMZW5ndGgiLCJtaW4iLCJpIiwicXVhbnRpdHkiLCJmcmVxdWVudGx5S2V5cyIsInNvcnRlZCIsInJldmVyc2UiLCJzbGljZWQiLCJsYXN0IiwicG9wIiwidW5pY29kZXMiLCJjb2RlUG9pbnRzIiwidSIsInVuaXEiLCJhcnIiLCJyZWR1Y2UiLCJhY2MiLCJ1bmlxQSIsInVuaXFCIiwibyIsIm9yaWdpbmFsVmFsdWUiLCJwcm90b3R5cGUiLCJjYWxsIiwiZG9jdW1lbnQiLCJkaXYiLCJjcmVhdGVFbGVtZW50Iiwib3ZlcmZsb3ciLCJwb3NpdGlvbiIsInRvcCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNjcm9sbGJhcldpZHRoIiwib2Zmc2V0V2lkdGgiLCJjbGllbnRXaWR0aCIsInJlbW92ZUNoaWxkIiwicGlja2VyQ29tcG9uZW50IiwiX3RoaXMkX2NhdGVnb3JpZXMiLCJfcGVyTGluZSIsIl90b0NvbnN1bWFibGVBcnJheSIsImZpcnN0IiwicHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHgiLCJzY3JvbGxFbGVtZW50Iiwic2Nyb2xsVG9wIiwibCIsIm9mZnNldFRvcCIsImhhc0Vtb2ppcyIsInNjcm9sbFRvQ29tcG9uZW50IiwibWF4U2VhcmNoUmVzdWx0cyIsInVwZGF0ZVByZXZpZXdFbW9qaSIsImVtb2ppc0xlbmd0aCIsImNhdGVnb3J5TGVuZ3RoIiwiZGlmZiIsInByZXZDYXRlZ29yeUxhc3RSb3dMZW5ndGgiLCIkbmV4dFRpY2siLCJzY3JvbGxFbCIsImVtb2ppRWwiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjYXRlZ29yeUlkeCIsIk5BTUVTUEFDRSIsIl9KU09OIiwiSlNPTiIsImlzTG9jYWxTdG9yYWdlU3VwcG9ydGVkIiwiZ2V0dGVyIiwic2V0dGVyIiwic2V0SGFuZGxlcnMiLCJoYW5kbGVycyIsInNldE5hbWVzcGFjZSIsIm5hbWVzcGFjZSIsInN0YXRlIiwibG9jYWxTdG9yYWdlIiwic3RyaW5naWZ5IiwicGFyc2UiLCJpc1dpbmRvd0F2YWlsYWJsZSIsImxhc3RUaW1lIiwidmVuZG9ycyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJlbGVtZW50IiwiY3VyclRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInRpbWVUb0NhbGwiLCJtYXgiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==
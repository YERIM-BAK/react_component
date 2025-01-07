module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-prettier-scss",
    "stylelint-config-recess-order",
  ],
  rules: {
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["blockless-after-same-name-blockless", "first-nested"],
        ignore: ["after-comment"],
      },
    ],
    "rule-empty-line-before": [
      "always-multi-line",
      {
        except: ["first-nested"],
        ignore: ["after-comment"],
      },
    ],
    "comment-empty-line-before": [
      "always",
      {
        ignore: ["after-comment", "stylelint-commands"],
      },
    ],
    "at-rule-no-unknown": null,
    "block-no-empty": true,
    "declaration-empty-line-before": "never",
    "font-family-no-duplicate-names": true,
    "function-name-case": "lower",
    "length-zero-no-unit": true,
    "media-feature-name-no-unknown": true,
    "no-duplicate-at-import-rules": true,
    "no-empty-source": true,
    "no-unknown-animations": true,
    "property-no-unknown": true,
    "selector-attribute-quotes": "always",
    "selector-class-pattern": null,
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-element-no-unknown": true,
    "selector-type-case": "lower",
    "string-no-newline": true,
    "unit-no-unknown": true,
    "unit-allowed-list": null,
    "value-keyword-case": "lower",
    "custom-media-pattern": null,
    "custom-property-pattern": null,
    "keyframes-name-pattern": [
      "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
      {
        message: "Expected keyframe name to be kebab-case",
      },
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["deep", "global"],
      },
    ],
    "no-descending-specificity": null,
    "font-family-name-quotes": null,
    "property-no-vendor-prefix": null,
  },
}

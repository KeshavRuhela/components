# Component Effects

## Folder naming

- Block: element which has the effect. Example: button.
- Element: effect that happens. Example: ripple.
- Modifier: action that determines the effect. Example: hover.

### Pattern:

The folder name follows the BEM standard:

1. Block name. Example: block-name
2. Double underscore. Always: \_\_
3. Element name. Example: element-name
4. Single underscore. Always: \_
5. Modifier name. Example: modifier-name

In other words, the folder name would be:

- ./block-name\_\_element-name_modifier-name/

Or, using the component effects vocabulary:

- ./element\_\_effect_action/

## Listing

| Elements            |     |
| ------------------- | --- |
| button              | 1   |
| card                | 3   |
| scroll-progress-bar | 2   |
| scrollbar           | 1   |
| section             | 2   |
| svg                 | 1   |
| text                | 1   |

| Actions    |     |
| ---------- | --- |
| click      | 1   |
| hover      | 5   |
| scroll     | 3   |
| none/other | 2   |

Total: 11

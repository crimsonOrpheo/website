export function simpleEvent(category,action) {
  dataLayer.push({'event': 'simpleClick', 'category': category, 'action': action});
}

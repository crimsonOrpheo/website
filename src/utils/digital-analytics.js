export function simpleEvent(category,action) {
  dataLayer.push({'event': 'simpleClick', 'category': category, 'action': action});
}

export function complexEvent(category,action,label) {
  dataLayer.push({'event': 'complexClick', 'category': category, 'action': action, 'label': label});
}

export function GTMsearchQuery(category,action,label,results) {
  dataLayer.push({'event': 'searchQuery', 'category': category, 'action': action, 'label': label, 'results' : results});
}

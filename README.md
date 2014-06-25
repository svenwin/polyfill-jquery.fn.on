# jQuery.fn.on Polyfill

Polyfill to use method `.on` in older versions of jquery

## supported invocations

Simple invocation

```javascript
$('.element').on('eventType', function(event){
	/* ... */
});
```

Multi events

```javascript
$('.element').on('event1 event2', function(event){
	/* ... */
});
```

Delegate event

```javascript
$(document).on('eventType', '.element', function(event){
	/* ... */
});
```

Delegate multi event

```javascript
$(document).on('event1 event2', '.element', function(event){
	/* ... */
});
```
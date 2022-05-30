!function(){"use strict";var e={d:function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}};function t(e){e.classList.add("popup_open"),document.addEventListener("keyup",B)}function n(e){e.classList.remove("popup_open"),document.removeEventListener("keyup",B)}e.d({},{hR:function(){return B},R$:function(){return s},nq:function(){return p},UO:function(){return c}});var o=class{constructor(e,t){this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._form=t,this._buttonElement=this._form.querySelector(this._submitButtonSelector)}_showInputError(e,t){const n=this._form.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}_hideInputError(e){const t=this._form.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.textContent="",t.classList.remove(this._errorClass)}_toggleButtonState(){this._hasInvalidInput()?this._disableSubmitButton():(this._buttonElement.disabled=!1,this._buttonElement.classList.remove(this._inactiveButtonClass))}_disableSubmitButton(){this._buttonElement.disabled=!0,this._buttonElement.classList.add(this._inactiveButtonClass)}_hasInvalidInput(){return this._inputList.some((e=>!e.validity.valid))}_checkInputValidity(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}_setEventListeners(){this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._inputList.forEach((e=>{e.addEventListener("input",(()=>{this._checkInputValidity(e),this._toggleButtonState()}))}))}enableValidation(){this._form.addEventListener("submit",(e=>{e.preventDefault()})),this._setEventListeners()}resetValidation(){this._toggleButtonState(),this._inputList.forEach((e=>{this._hideInputError(e)}))}};const i=document.querySelector(".profile__info-name"),r=document.querySelector(".profile__info-about-me"),s=document.querySelector(".popup__title"),l=(document.querySelector(".popup"),document.querySelector(".popup_type_edit")),a=document.querySelector(".popup_type_add"),c=document.querySelector(".popup_type_preview"),u=document.querySelector(".edit-form"),_=a.querySelector(".edit-form"),d=document.querySelector(".elements__container"),p=document.querySelector(".popup__preview-image"),m=Array.from(document.querySelectorAll(".popup")),h=document.querySelector(".button_location_info"),y=l.querySelector(".button_location_close"),v=a.querySelector(".button_location_close"),S=c.querySelector(".button_location_close"),b=document.querySelector(".button_location_add-photo"),f=(_.querySelector(".button_location_submit"),document.querySelector(".edit-form__input_location_name")),E=document.querySelector(".edit-form__input_location_about-me"),L=document.querySelector(".edit-form__input_type_title"),q=document.querySelector(".edit-form__input_type_link"),k={inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},g=new o(k,u),C=new o(k,_);g.enableValidation(),C.enableValidation();const w=(e,n)=>{const o=new class{constructor(e,t){this._name=e.name,this._link=e.link,this._cardSelector=t}_setEventListeners(){this._element.querySelector(".button_location_like").addEventListener("click",(e=>{this._handleLikeIcon(e)})),this._element.querySelector(".button_location_trash").addEventListener("click",(e=>{this._handleDeleteCard(e)})),this._element.querySelector(".elements__card-image").addEventListener("click",(()=>{this._handlePreviewPicture()}))}_handleLikeIcon(e){e.target.classList.toggle("button_location_like-active")}_handleDeleteCard(e){e.target.closest(".elements__card").remove()}_handlePreviewPicture(){p.src=this._link,p.alt=this._name,s.textContent=this._name,t(c)}_getTemplate(){return document.querySelector(this._cardSelector).content.querySelector(".elements__card").cloneNode(!0)}getView(){this._element=this._getTemplate();const e=this._element.querySelector(".elements__card-image");return e.alt=this._name,e.src=this._link,this._element.querySelector(".elements__card-title").textContent=this._name,this._setEventListeners(),this._element}}(e,"#card-template");n.prepend(o.getView())};function B(e){"Escape"===e.key&&n(document.querySelector(".popup_open"))}[{name:"Yosemite Valley",link:"https://code.s3.yandex.net/web-code/yosemite.jpg"},{name:"Lake Louise",link:"https://code.s3.yandex.net/web-code/lake-louise.jpg"},{name:"Bald Mountains",link:"https://code.s3.yandex.net/web-code/bald-mountains.jpg"},{name:"Latemar",link:"https://code.s3.yandex.net/web-code/latemar.jpg"},{name:"Vanoise National Park",link:"https://code.s3.yandex.net/web-code/vanoise.jpg"},{name:"Lago di Braies",link:"https://code.s3.yandex.net/web-code/lago.jpg"}].forEach((e=>{w(e,d)})),m.forEach((e=>{e.addEventListener("click",(e=>{n(e.target)}))})),h.addEventListener("click",(()=>t(l))),y.addEventListener("click",(()=>n(l))),b.addEventListener("click",(()=>{C.resetValidation(),t(a)})),v.addEventListener("click",(()=>n(a))),S.addEventListener("click",(()=>n(c))),u.addEventListener("submit",(function(e){e.preventDefault(),i.textContent=f.value,r.textContent=E.value,n(l)})),_.addEventListener("submit",(function(e){e.preventDefault();const t={};t.name=L.value,t.link=q.value,w(t,d),n(a),_.reset()}))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVN1RCxJQUNqQkEsRUFBUWxHLGlCQUFpQixTQUFVaUcsSUFDakMvRixFQUFXK0YsRUFBTVgsY0FZckIzQixFQUFZM0QsaUJBQWlCLFNBQVMsSUFBTUwsRUFBVXdELEtBQ3REUyxFQUFrQjVELGlCQUFpQixTQUFTLElBQU1FLEVBQVdpRCxLQUM3RFksRUFBVS9ELGlCQUFpQixTQUFTLEtBQ2xDdUUsRUFBaUJ4QixrQkFDakJwRCxFQUFVeUQsTUFFWlMsRUFBaUI3RCxpQkFBaUIsU0FBUyxJQUFNRSxFQUFXa0QsS0FDNURVLEVBQW1COUQsaUJBQWlCLFNBQVMsSUFBTUUsRUFBV21ELEtBRzlEQyxFQUFXdEQsaUJBQWlCLFVBQVUsU0FBU2lHLEdBQzdDQSxFQUFNbkQsaUJBQ05FLEVBQWNyQixZQUFjcUMsRUFBa0JtQyxNQUM5Q2xELEVBQWF0QixZQUFjc0MsRUFBaUJrQyxNQUM1Q2pHLEVBQVdpRCxNQUdiSSxFQUFVdkQsaUJBQWlCLFVBQVUsU0FBU2lHLEdBQzVDQSxFQUFNbkQsaUJBQ04sTUFBTTZCLEVBQU8sR0FDYkEsRUFBS0csS0FBT1osRUFBa0JpQyxNQUM5QnhCLEVBQUtLLEtBQU9iLEVBQWlCZ0MsTUFDN0IzQixFQUFXRyxFQUFNbkIsR0FDakJ0RCxFQUFXa0QsR0FDWEcsRUFBVTZDLFciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3NjcmlwdHMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsImltcG9ydCB7IGVzY2FwZVBvcHVwIH0gZnJvbSAnLi4vLi4vcGFnZXMvaW5kZXguanMnO1xuXG5mdW5jdGlvbiBvcGVuUG9wdXAocG9wdXApIHtcbiAgcG9wdXAuY2xhc3NMaXN0LmFkZCgncG9wdXBfb3BlbicpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGVzY2FwZVBvcHVwKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VQb3B1cChwb3B1cCkge1xuICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdwb3B1cF9vcGVuJyk7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXNjYXBlUG9wdXApO1xufVxuXG5leHBvcnQgeyBvcGVuUG9wdXAsIGNsb3NlUG9wdXAgfTsiLCJpbXBvcnQgeyBvcGVuUG9wdXAgfSBmcm9tICcuLi91dGlscy91dGlscy5qcyc7XG5pbXBvcnQgeyBwcmV2aWV3SW1nRWwsIGltZ1BvcHVwVGl0bGUsIHByZXZpZXdJbWdQb3B1cH0gZnJvbSAnLi4vLi4vcGFnZXMvaW5kZXguanMnO1xuXG5jbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IoZGF0YSwgY2FyZFNlbGVjdG9yKSB7XG4gICAgdGhpcy5fbmFtZSA9IGRhdGEubmFtZTtcbiAgICB0aGlzLl9saW5rID0gZGF0YS5saW5rO1xuICAgIHRoaXMuX2NhcmRTZWxlY3RvciA9IGNhcmRTZWxlY3RvcjtcbiAgfVxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9lbGVtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9sb2NhdGlvbl9saWtlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB7XG4gICAgICAgIHRoaXMuX2hhbmRsZUxpa2VJY29uKGV2dCk7XG4gICAgICB9KTtcbiAgICB0aGlzLl9lbGVtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9sb2NhdGlvbl90cmFzaCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4ge1xuICAgICAgICB0aGlzLl9oYW5kbGVEZWxldGVDYXJkKGV2dCk7XG4gICAgICB9KTtcbiAgICB0aGlzLl9lbGVtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignLmVsZW1lbnRzX19jYXJkLWltYWdlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2hhbmRsZVByZXZpZXdQaWN0dXJlKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIF9oYW5kbGVMaWtlSWNvbihldnQpIHtcbiAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2J1dHRvbl9sb2NhdGlvbl9saWtlLWFjdGl2ZScpO1xuICB9XG5cbiAgX2hhbmRsZURlbGV0ZUNhcmQoZXZ0KSB7XG4gICAgZXZ0LnRhcmdldC5jbG9zZXN0KCcuZWxlbWVudHNfX2NhcmQnKS5yZW1vdmUoKTtcbiAgfVxuXG4gIF9oYW5kbGVQcmV2aWV3UGljdHVyZSgpIHtcbiAgICBwcmV2aWV3SW1nRWwuc3JjID0gdGhpcy5fbGluaztcbiAgICBwcmV2aWV3SW1nRWwuYWx0ID0gdGhpcy5fbmFtZTtcbiAgICBpbWdQb3B1cFRpdGxlLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcbiAgICBvcGVuUG9wdXAocHJldmlld0ltZ1BvcHVwKTtcbiAgfVxuXG4gIF9nZXRUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFNlbGVjdG9yKS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19fY2FyZCcpLmNsb25lTm9kZSh0cnVlKTtcbiAgICByZXR1cm4gY2FyZEVsZW1lbnQ7XG4gIH1cblxuICAvL0dlbmVyYXRlIENhcmRcbiAgZ2V0VmlldygpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5fZ2V0VGVtcGxhdGUoKTtcbiAgICBjb25zdCBpbWFnZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19fY2FyZC1pbWFnZScpO1xuICAgIGltYWdlRWxlbWVudC5hbHQgPSB0aGlzLl9uYW1lO1xuICAgIGltYWdlRWxlbWVudC5zcmMgPSB0aGlzLl9saW5rO1xuICAgIGNvbnN0IGNhcmRUaXRsZSA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRzX19jYXJkLXRpdGxlJyk7XG4gICAgY2FyZFRpdGxlLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDsiLCJjbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIGZvcm1FbGVtZW50KSB7XG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IHNldHRpbmdzLmlucHV0U2VsZWN0b3I7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBzZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcbiAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcztcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBzZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3M7XG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IHNldHRpbmdzLmVycm9yQ2xhc3M7XG4gICAgdGhpcy5fZm9ybSA9IGZvcm1FbGVtZW50O1xuICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQgPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3IodGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xuXG4gIH1cblxuICBfc2hvd0lucHV0RXJyb3IoaW5wdXQsIGVycm9yTWVzc2FnZSkge1xuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvcihgIyR7aW5wdXQuaWR9LWVycm9yYClcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gZXJyb3JNZXNzYWdlO1xuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICB9O1xuXG4gIF9oaWRlSW5wdXRFcnJvcihpbnB1dCkge1xuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvcihgIyR7aW5wdXQuaWR9LWVycm9yYCk7XG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZXJyb3JDbGFzcyk7XG4gIH07XG5cbiAgX3RvZ2dsZUJ1dHRvblN0YXRlKCkge1xuICAgIGlmICh0aGlzLl9oYXNJbnZhbGlkSW5wdXQoKSkge1xuICAgICAgdGhpcy5fZGlzYWJsZVN1Ym1pdEJ1dHRvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9idXR0b25FbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9idXR0b25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgX2Rpc2FibGVTdWJtaXRCdXR0b24oKSB7XG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICB9XG5cbiAgX2hhc0ludmFsaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRMaXN0LnNvbWUoKGlucHV0KSA9PiAhaW5wdXQudmFsaWRpdHkudmFsaWQpO1xuICB9XG5cbiAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dCkge1xuICAgIGlmKGlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG5vdCB2YWxpZFxuICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXQsIGlucHV0LnZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICB9O1xuICB9XG5cbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20odGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpKTtcblxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dCk7XG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7ICBcbiAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldnQpID0+IHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICByZXNldFZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoKTtcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0KTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtVmFsaWRhdG9yOyIsImltcG9ydCBDYXJkIGZyb20gXCIuLi9zY3JpcHRzL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4uL3NjcmlwdHMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XG5pbXBvcnQgeyBvcGVuUG9wdXAsIGNsb3NlUG9wdXAgfSBmcm9tICcuLi9zY3JpcHRzL3V0aWxzL3V0aWxzLmpzJztcblxuY29uc3QgaW5pdGlhbENhcmRzID0gW1xuICB7XG4gICAgbmFtZTogXCJZb3NlbWl0ZSBWYWxsZXlcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL3lvc2VtaXRlLmpwZ1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxha2UgTG91aXNlXCIsXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWtlLWxvdWlzZS5qcGdcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJCYWxkIE1vdW50YWluc1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvYmFsZC1tb3VudGFpbnMuanBnXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTGF0ZW1hclwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGF0ZW1hci5qcGdcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJWYW5vaXNlIE5hdGlvbmFsIFBhcmtcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL3Zhbm9pc2UuanBnXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTGFnbyBkaSBCcmFpZXNcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhZ28uanBnXCJcbiAgfVxuXTtcblxuXG4vL1RleHQgY29udGVudFxuY29uc3QgcHJvZmlsZU5hbWVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19pbmZvLW5hbWUnKTtcbmNvbnN0IHByb2ZpbGVBYnRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19pbmZvLWFib3V0LW1lJyk7XG5jb25zdCBpbWdQb3B1cFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX190aXRsZScpO1xuXG4vL1dyYXBwZXJzXG5jb25zdCBwb3B1cEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwJyk7XG5jb25zdCBlZGl0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfdHlwZV9lZGl0Jyk7XG5jb25zdCBhZGRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF90eXBlX2FkZCcpO1xuY29uc3QgcHJldmlld0ltZ1BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX3R5cGVfcHJldmlldycpO1xuY29uc3QgZWRpdEZvcm1FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWZvcm0nKTtcbmNvbnN0IGFkZEZvcm1FbCA9IGFkZFBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWZvcm0nKTtcbmNvbnN0IGVsZW1lbnRzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19fY29udGFpbmVyJyk7XG5jb25zdCBwcmV2aWV3SW1nRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3ByZXZpZXctaW1hZ2UnKTtcbmNvbnN0IG92ZXJsYXlFbCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwJykpO1xuXG4vL0J1dHRvbnNcbmNvbnN0IGVkaXRJbmZvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9sb2NhdGlvbl9pbmZvJyk7XG5jb25zdCBlZGl0UG9wdXBDbG9zZUJ0biA9IGVkaXRQb3B1cC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX2xvY2F0aW9uX2Nsb3NlJyk7XG5jb25zdCBhZGRQb3B1cENsb3NlQnRuID0gYWRkUG9wdXAucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9sb2NhdGlvbl9jbG9zZScpO1xuY29uc3QgcHJldmlld0ltZ0Nsb3NlQnRuID0gcHJldmlld0ltZ1BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25fbG9jYXRpb25fY2xvc2UnKTtcbmNvbnN0IGFkZEltZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25fbG9jYXRpb25fYWRkLXBob3RvJyk7XG5jb25zdCBhZGRGb3JtU3VibWl0QnV0dG9uID0gYWRkRm9ybUVsLnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25fbG9jYXRpb25fc3VibWl0JylcblxuLy9JbnB1dHNcbmNvbnN0IGVkaXRGb3JtTmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtZm9ybV9faW5wdXRfbG9jYXRpb25fbmFtZScpO1xuY29uc3QgZWRpdEZvcm1BYnRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWZvcm1fX2lucHV0X2xvY2F0aW9uX2Fib3V0LW1lJyk7XG5jb25zdCBhZGRGb3JtVGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWZvcm1fX2lucHV0X3R5cGVfdGl0bGUnKTtcbmNvbnN0IGFkZEZvcm1MaW5rSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1mb3JtX19pbnB1dF90eXBlX2xpbmsnKTtcblxuLy9WYWxpZGF0aW9uIFxuXG5jb25zdCB2YWxpZGF0aW9uU2V0dGluZ3MgPSB7XG4gIGlucHV0U2VsZWN0b3I6IFwiLnBvcHVwX19pbnB1dFwiLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIucG9wdXBfX2J1dHRvblwiLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcInBvcHVwX19idXR0b25fZGlzYWJsZWRcIixcbiAgaW5wdXRFcnJvckNsYXNzOiBcInBvcHVwX19pbnB1dF90eXBlX2Vycm9yXCIsXG4gIGVycm9yQ2xhc3M6IFwicG9wdXBfX2Vycm9yX3Zpc2libGVcIlxufTtcblxuY29uc3QgZWRpdEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcih2YWxpZGF0aW9uU2V0dGluZ3MsIGVkaXRGb3JtRWwpO1xuY29uc3QgYWRkRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKHZhbGlkYXRpb25TZXR0aW5ncywgYWRkRm9ybUVsKTtcbmVkaXRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcbmFkZEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuXG4vL1RlbXBsYXRlc1xuY29uc3QgY2FyZFNlbGVjdG9yID0gJyNjYXJkLXRlbXBsYXRlJztcblxuLy9BZGQgbmV3IGNhcmRcbmNvbnN0IHJlbmRlckNhcmQgPSAoZGF0YSwgd3JhcCkgPT4ge1xuICBjb25zdCBjYXJkID0gbmV3IENhcmQoZGF0YSwgY2FyZFNlbGVjdG9yKTtcbiAgd3JhcC5wcmVwZW5kKGNhcmQuZ2V0VmlldygpKTtcbn07XG5cbi8vR2VuZXJhdGUgYW5kIGFkZCBjYXJkc1xuaW5pdGlhbENhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgcmVuZGVyQ2FyZChjYXJkLCBlbGVtZW50c0xpc3QpO1xufSk7XG5cbi8vQ2xvc2UgcG9wdXAgbWV0aG9kc1xub3ZlcmxheUVsLmZvckVhY2goKG92ZXJsYXkpID0+IHtcbiAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGNsb3NlUG9wdXAoZXZlbnQudGFyZ2V0KTtcbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gZXNjYXBlUG9wdXAoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgIGNvbnN0IG9wZW5lZFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX29wZW4nKTtcbiAgICBjbG9zZVBvcHVwKG9wZW5lZFBvcHVwKTtcbiAgfTtcbn07XG5cbi8vRXZlbnQgTGlzdGVuZXJzXG5lZGl0SW5mb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5Qb3B1cChlZGl0UG9wdXApKTtcbmVkaXRQb3B1cENsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2VQb3B1cChlZGl0UG9wdXApKTtcbmFkZEltZ0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgYWRkRm9ybVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcbiAgb3BlblBvcHVwKGFkZFBvcHVwKTtcbn0pO1xuYWRkUG9wdXBDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3NlUG9wdXAoYWRkUG9wdXApKTtcbnByZXZpZXdJbWdDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3NlUG9wdXAocHJldmlld0ltZ1BvcHVwKSk7XG5cbi8vRm9ybXNcbmVkaXRGb3JtRWwuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgcHJvZmlsZU5hbWVFbC50ZXh0Q29udGVudCA9IGVkaXRGb3JtTmFtZUlucHV0LnZhbHVlO1xuICBwcm9maWxlQWJ0RWwudGV4dENvbnRlbnQgPSBlZGl0Rm9ybUFidElucHV0LnZhbHVlO1xuICBjbG9zZVBvcHVwKGVkaXRQb3B1cCk7XG59KTtcblxuYWRkRm9ybUVsLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGNhcmQgPSB7fTtcbiAgY2FyZC5uYW1lID0gYWRkRm9ybVRpdGxlSW5wdXQudmFsdWU7XG4gIGNhcmQubGluayA9IGFkZEZvcm1MaW5rSW5wdXQudmFsdWU7XG4gIHJlbmRlckNhcmQoY2FyZCwgZWxlbWVudHNMaXN0KTtcbiAgY2xvc2VQb3B1cChhZGRQb3B1cCk7XG4gIGFkZEZvcm1FbC5yZXNldCgpO1xufSk7XG5cbmV4cG9ydCB7IGVzY2FwZVBvcHVwLCBpbWdQb3B1cFRpdGxlLCBwcmV2aWV3SW1nRWwsIHByZXZpZXdJbWdQb3B1cCB9OyJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZXhwb3J0cyIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIm9wZW5Qb3B1cCIsInBvcHVwIiwiY2xhc3NMaXN0IiwiYWRkIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXNjYXBlUG9wdXAiLCJjbG9zZVBvcHVwIiwicmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnN0cnVjdG9yIiwic2V0dGluZ3MiLCJmb3JtRWxlbWVudCIsInRoaXMiLCJfaW5wdXRTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJfc3VibWl0QnV0dG9uU2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsIl9pbnB1dEVycm9yQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJfZXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJfZm9ybSIsIl9idXR0b25FbGVtZW50IiwicXVlcnlTZWxlY3RvciIsIl9zaG93SW5wdXRFcnJvciIsImlucHV0IiwiZXJyb3JNZXNzYWdlIiwiZXJyb3JFbGVtZW50IiwiaWQiLCJ0ZXh0Q29udGVudCIsIl9oaWRlSW5wdXRFcnJvciIsIl90b2dnbGVCdXR0b25TdGF0ZSIsIl9oYXNJbnZhbGlkSW5wdXQiLCJfZGlzYWJsZVN1Ym1pdEJ1dHRvbiIsImRpc2FibGVkIiwiX2lucHV0TGlzdCIsInNvbWUiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsInZhbGlkYXRpb25NZXNzYWdlIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbmFibGVWYWxpZGF0aW9uIiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJyZXNldFZhbGlkYXRpb24iLCJwcm9maWxlTmFtZUVsIiwicHJvZmlsZUFidEVsIiwiaW1nUG9wdXBUaXRsZSIsImVkaXRQb3B1cCIsImFkZFBvcHVwIiwicHJldmlld0ltZ1BvcHVwIiwiZWRpdEZvcm1FbCIsImFkZEZvcm1FbCIsImVsZW1lbnRzTGlzdCIsInByZXZpZXdJbWdFbCIsIm92ZXJsYXlFbCIsImVkaXRJbmZvQnRuIiwiZWRpdFBvcHVwQ2xvc2VCdG4iLCJhZGRQb3B1cENsb3NlQnRuIiwicHJldmlld0ltZ0Nsb3NlQnRuIiwiYWRkSW1nQnRuIiwiZWRpdEZvcm1OYW1lSW5wdXQiLCJlZGl0Rm9ybUFidElucHV0IiwiYWRkRm9ybVRpdGxlSW5wdXQiLCJhZGRGb3JtTGlua0lucHV0IiwidmFsaWRhdGlvblNldHRpbmdzIiwiZWRpdEZvcm1WYWxpZGF0b3IiLCJGb3JtVmFsaWRhdG9yIiwiYWRkRm9ybVZhbGlkYXRvciIsInJlbmRlckNhcmQiLCJkYXRhIiwid3JhcCIsImNhcmQiLCJjYXJkU2VsZWN0b3IiLCJfbmFtZSIsIm5hbWUiLCJfbGluayIsImxpbmsiLCJfY2FyZFNlbGVjdG9yIiwiX2VsZW1lbnQiLCJfaGFuZGxlTGlrZUljb24iLCJfaGFuZGxlRGVsZXRlQ2FyZCIsIl9oYW5kbGVQcmV2aWV3UGljdHVyZSIsInRhcmdldCIsInRvZ2dsZSIsImNsb3Nlc3QiLCJzcmMiLCJhbHQiLCJfZ2V0VGVtcGxhdGUiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiZ2V0VmlldyIsImltYWdlRWxlbWVudCIsInByZXBlbmQiLCJldmVudCIsIm92ZXJsYXkiLCJ2YWx1ZSIsInJlc2V0Il0sInNvdXJjZVJvb3QiOiIifQ==
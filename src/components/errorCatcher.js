const modalTemplate = (text) => `
<div id="modal" class="modal fade">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body">
      <div class="alert alert-danger">${text}</div>
      </div>
    </div>
  </div>
</div>
`;

const errorCatcher = angular.module('ErrorCatcher', [])
    .factory('$exceptionHandler', () => {
        return (err) => {
            console.error(err);
            const modal = $(modalTemplate('<b>' + err.message + '</b><br/>' + err.stack));
            $(document.body).append(modal);
            modal.modal('show');
            modal.on('hidden.bs.modal', () => modal.remove())
        };
    });

export default errorCatcher;

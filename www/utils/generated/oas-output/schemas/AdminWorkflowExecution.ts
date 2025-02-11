/**
 * @schema AdminWorkflowExecution
 * type: object
 * description: The workflows execution's workflow execution.
 * x-schemaName: AdminWorkflowExecution
 * required:
 *   - id
 *   - workflow_id
 *   - transaction_id
 *   - execution
 *   - context
 *   - state
 *   - created_at
 *   - updated_at
 *   - deleted_at
 * properties:
 *   id:
 *     type: string
 *     title: id
 *     description: The workflow execution's ID.
 *   workflow_id:
 *     type: string
 *     title: workflow_id
 *     description: The workflow execution's workflow id.
 *   transaction_id:
 *     type: string
 *     title: transaction_id
 *     description: The workflow execution's transaction id.
 *   execution:
 *     type: string
 *     title: execution
 *     description: The workflow execution's execution.
 *   context:
 *     type: string
 *     title: context
 *     description: The workflow execution's context.
 *   state: {}
 *   created_at:
 *     type: string
 *     title: created_at
 *     description: The workflow execution's created at.
 *     format: date-time
 *   updated_at:
 *     type: string
 *     title: updated_at
 *     description: The workflow execution's updated at.
 *     format: date-time
 *   deleted_at:
 *     type: string
 *     title: deleted_at
 *     description: The workflow execution's deleted at.
 *     format: date-time
 * 
*/


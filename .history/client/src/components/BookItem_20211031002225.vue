<template>
    <tr>
        <td>
            <span class="custom-checkbox">
                <input type="checkbox" id="checkbox1" name="options[]" value="1">
                <label for="checkbox1"></label>
            </span>
        </td>
        <td>{{book.name}}</td>
        <td>{{book.author}}</td>
        <td>{{book.pb_company}}</td>
        <td>{{book._type}}</td>
        <td>{{book.created_at}}</td>
        <td>
            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
        </td>
    </tr>
</template>

<script>
export default {
    name: "BookItem",
    props: ["book"]
}
</script>
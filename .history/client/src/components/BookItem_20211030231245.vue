<template>
    <tr>
        <td>
            <span class="custom-checkbox">
                <input type="checkbox" id="checkbox1" name="options[]" value="1">
                <label for="checkbox1"></label>
            </span>
        </td>
        <td>Đời ngắn đứng ngủ dài</td>
        <td>Robin Sharma</td>
        <td>Trẻ</td>
        <td>Phát triển bản thân</td>
        <td>30-10-2021</td>
        <td>
            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
        </td>
    </tr>
</template>

<script>
export default {
    name: "BookItem"
}
</script>
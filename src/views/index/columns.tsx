import { message } from "@/utils/message";

// 如果您不习惯tsx写法，可以传slot，然后在template里写
// 需是hooks写法（函数中有return），避免失去响应性
export function useColumns() {
  const columns: TableColumnList = [
    {
      label: "预览",
      slot: "image"
    },
    {
      label: "图片名称",
      prop: "fileName",
      cellRenderer: ({ row }) => (
        <div style="display: flex; align-items: center">
          <span style="margin-left: 10px">{row.fileName}</span>
        </div>
      )
    },
    {
      label: "文件大小",
      prop: "fileSize",
      width: 150,
      cellRenderer: ({ row }) => (
        <div style="display: flex; align-items: center">
          <span style="margin-left: 10px">{row.fileSize}</span>
        </div>
      )
    },
    {
      label: "md5值",
      prop: "md5",
      cellRenderer: ({ row }) => (
        <div style="display: flex; align-items: center">
          <span>{row.md5}</span>
        </div>
      )
    },
    {
      label: "操作",
      width: 90,
      cellRenderer: ({ index, row }) => (
        <>
          <el-button
            size="small"
            type="danger"
            onClick={() => handleDelete(index + 1, row)}
          >
            Delete
          </el-button>
        </>
      )
    }
  ];

  const handleDelete = (index: number, row) => {
    message(`您删除了第 ${index} 行，数据为：${JSON.stringify(row)}`);
  };

  return {
    columns
  };
}

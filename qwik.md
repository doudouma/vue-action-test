# Qwik对比学习笔记

## DOM操作
vue
```plaintext
<template>
  <div class="home">
    <div class="box">
      <input ref="domRef" type="text" />
      <button @click="handleBtnClick">增加</button>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$refs.domRef, 'domRef');
  },
  methods: {
    handleBtnClick() {
      this.$refs.domRef.focus();
    },
  },
};
</script>
```
react
```plaintext
// 声明ref    
const domRef = useRef<HTMLInputElement>(null);
// 通过点击事件选择input框
const handleBtnClick = ()=> {
     domRef.current?.focus();
     console.log(domRef,'domRef')
}

return(
        <View className='home'>
            <View className='box'>
                <Input ref={domRef} type="text" />
                <button onClick={handleBtnClick}>增加</button>
            </View>
        </View>
    )
```
qwik
```plaintext
const domRef= useSignal<Element>();

  useVisibleTask$(() => {
    if (domRef.value) {
      const rect = domRef.value.getBoundingClientRect();
       console.log(rect)
    }
  });
return(
        <View className='home'>
            <View className='box'>
                <Input ref={domRef} type="text" />
                <button onClick={handleBtnClick}>增加</button>
            </View>
        </View>
    )

```

## 组件传值
vue
```plaintext
//父组件
<template>
      <Child :msg="serverUrl" @change-msg="changeMsg"/>
</template>

<script>
export default {
  data() {
    return {
      msg: '',
    };
  },
  methods: {
    changeMsg(msg) {
      this.msg= msg;
    },
  },
};
</script>

//子组件
<template>
  <div>
    <span>{{ msg }}</span>
    <button @click="handleClick('hello world')">测试</button>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleClick(msg) {
      this.$emit('change-msg', msg);
    },
  },
};
</script>
```
react
```plaintext
// 父组件
export default function tab(props:any) {
    const [msg, setMsg] = useState('');
	// 父组件接收子组件的值并修改
    const changeMsg = (msg?:string) => {
        setMsg(msg);
     };

    return(
        <Child msg={serverUrl} changeMsg={changeMsg} />
    )
}

// 子组件
function Child(props){
    console.log('props',props);
	// 子传父
    const handleClick = (msg:string) => {
      props.changeMsg(msg);
    };
    return (
        <>
            <span>{props.msg}</span>
            <button onClick={()=>{handleClick('77777')}}>测试</button>
        </>
    );
};
```
qwik
```plaintext
//父组件
const count = useSignal(0);
const msg = "父子传递";
  // 父组件接收子组件的值并修改
  const changeMsg = $((msg?: string) => {
    console.log(msg);
    count.value++;
  })
return (
    <div>
      <div>
        <Child msg={msg} changeMsg$={changeMsg} />
      </div>
    </div>
  );
});

//子组件
interface ItemProps {
  msg:string
  changeMsg$:PropFunction<(msg:string)=>void>
}
 
export default component$<ItemProps>((props) => {
  return (
    <>
      <span>Props</h1>
     <div>{props.msg}</div>
      <button onClick$={()=>props.changeMsg$('传过来了')}>click me!</button>
    </>
  );
});
```

## 列表渲染
vue
```plaintext
<h1>列表渲染</h1>
<ul>
<li v-for="(user, index) in users" :key="user.id">
	{{user.name}}
</li>
</ul>
```
react
```plaintext
type TUser = {id:number,name:string}[]

// 数组
let [users, setUsers] = useState<TUser[]>([
    { id: 1, name: "豆豆马" },
    { id: 2, name: "西米露" },
  ]);

return (
      <h1>列表</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
  )
```
qwik
```plaintext
export default component$(() => {
  type TUser = {id:number,name:string}[]

  const users = useStore<TUser>([
    { id: 1, name: "豆豆马" },
    { id: 2, name: "西米露" },
  ]);
  return(
      <h1>列表</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
  );
});
```

## 计算属性
vue
```plaintext
computed: {
    capitalizedName() {
      return this.name.toUpperCase()
    },
  },
```
react
```plaintext
let [name, setName] = useState('豆豆马');

const capitalizedName= useMemo(() => {
        return name.toUpperCase()
}, [name]);

```
qwik
```plaintext
  const name = useSignal('豆豆马');

  const capitalizedName = useComputed$(() => {
    return name.value.toUpperCase();
  });

```

## 监听
vue
```plaintext
export default {
  data() {
    return {
      age: 2,
    };
  },
  watch: {
    age(newAge) {
      if (newAge !== 5) {
        this.age++;
      }
    },
  },
};
```
react
```plaintext
import { useEffect, useState } from 'react';

export default function home() {
    const [age, setAge] = useState(2);

   /**
     * useEffect第二个参数中所传递的值才会进行根据值的变化而出发;
     * 如果没有穿值的话,就不会监听数据变化
     */
    useEffect(()=>{
        if (age !== 5) {
            setAge(++age)
        }
    },[age])
}
```
qwik
```plaintext
const age = useSignal(2);

useTask$(({track}) => {
  track(() => age.value);
  if (age.value !== 5) {
      age.value++
  }
});
```
## 总结
qwik语法上总体和react相似，状态管理上类似于vue3的响应式。属于各取所长，使用起来比较顺畅。为什么要还要学习qwik呢？主要是被他惊人的响应速度所震撼,lighthouse评分可以做到100分，正所谓天下武功唯快不破。qwik价值很大特意做了一个对比方便学习
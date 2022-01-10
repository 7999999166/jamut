<!-- <script>
  // import { jaggu } from "../db";
  import {onMount} from "svelte";

  var data = [] ;
  onMount(async function(){data =  await jaggu.toArray();  } );
  async function huy(){ await jaggu.put({id: 3, name: "Trilok", age: 33}); } 
  huy();
  onMount(async function(){ await jaggu.delete(4); } );

</script>
<ul>
  
    {#each data as friend }
      <li>{friend.name}, {friend.age}</li>
    {/each}
 
</ul> -->


